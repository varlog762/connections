import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  selectGroupList,
  selectGroupsTimerValue,
  selectIsGroupRefreshing,
  selectIsGroupSubmiting,
  selectIsShowForm,
} from '../../redux/selectors/groups.selectors';
import {
  createNewGroupAction,
  groupsRefreshBtnDisableAction,
  groupsSubmitBtnDisableAction,
  hideFormAction,
  loadGroupsAction,
  showFormAction,
} from '../../redux/actions/groups.actions';
import { GroupItemComponent } from '../group-item/group-item.component';
import { ModifiedGroupInterface } from '../../models/modified-group.interface';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckFieldService } from '../../services/check-field.service';
import { groupNameValidator } from '../../validators/group-name.validator';

@Component({
  selector: 'app-groups',
  standalone: true,
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss',
  imports: [
    CommonModule,
    GroupItemComponent,
    SortByDatePipe,
    ReactiveFormsModule,
  ],
})
export class GroupsComponent implements OnInit {
  public isShowForm$!: Observable<boolean>;

  public isSubmitInProgress$!: Observable<boolean>;

  public isGroupsRefreshing$!: Observable<boolean>;

  public groupsTimerValue$!: Observable<number | null>;

  public groupList!: ModifiedGroupInterface[] | null;

  private groupListSubscription$!: Subscription;

  public newGroupNameForm!: FormGroup;

  public isFieldInvalid = this.checkFieldSrv.isFieldInvalid;

  public isFieldHasError = this.checkFieldSrv.isFieldHasError;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private checkFieldSrv: CheckFieldService
  ) {}

  ngOnInit(): void {
    this.isShowForm$ = this.store.select(selectIsShowForm);

    this.groupsTimerValue$ = this.store.select(selectGroupsTimerValue);

    this.isSubmitInProgress$ = this.store.select(selectIsGroupSubmiting);

    this.isGroupsRefreshing$ = this.store.select(selectIsGroupRefreshing);

    this.initializeForm();

    this.checkListOfGrops();
  }

  initializeForm(): void {
    this.newGroupNameForm = this.fb.group({
      newGroupName: [
        '',
        [Validators.required, Validators.maxLength(30), groupNameValidator()],
      ],
    });
  }

  checkListOfGrops(): void {
    this.groupListSubscription$ = this.store
      .select(selectGroupList)
      .subscribe(list => {
        if (!list?.length) {
          this.store.dispatch(loadGroupsAction({ isLoadManual: false }));
        }

        this.groupList = list;
      });
  }

  closePopupOnClick(event: Event) {
    const target = event.target as HTMLElement;

    if (target.id === 'popupContainer' || target.id === 'popupCancel') {
      this.store.dispatch(hideFormAction());
      this.newGroupNameForm.get('newGroupName')?.reset();
    }
  }

  showForm(): void {
    this.store.dispatch(showFormAction());
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.newGroupNameForm.invalid) {
      this.store.dispatch(
        createNewGroupAction({
          payload: {
            name: this.newGroupNameForm.get('newGroupName')?.value,
          },
        })
      );

      this.store.dispatch(groupsSubmitBtnDisableAction());
      this.newGroupNameForm.get('newGroupName')?.reset();
    }
  }

  refreshGroups(): void {
    this.store.dispatch(loadGroupsAction({ isLoadManual: true }));
    this.store.dispatch(groupsRefreshBtnDisableAction());
  }

  getGroupID(index: number, groupItem: ModifiedGroupInterface): string {
    return groupItem.id;
  }

  ngOnDestroy(): void {
    this.groupListSubscription$.unsubscribe();
  }
}
