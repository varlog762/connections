import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ModifiedGroupInterface } from '../../models/modified-group.interface';
import { ManageGroupsService } from '../../services/manage-groups.service';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  distinctUntilChanged,
  map,
} from 'rxjs';
import {
  selectGroupsFeature,
  selectIsGroupSubmiting,
  selectIsShowPopup,
} from '../../redux/selectors/groups.selectors';
import {
  deleteGroupAction,
  groupsSubmitBtnDisableAction,
  hidePopupAction,
  showPopupAction,
} from '../../redux/actions/groups.actions';

@Component({
  selector: 'app-group-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-item.component.html',
  styleUrl: './group-item.component.scss',
})
export class GroupItemComponent {
  @Input() groupItem!: ModifiedGroupInterface;

  public isSubmitInProgress$!: Observable<boolean>;

  public isGroupOwner = this.manageGroupsSrv.isGroupOwner;

  private isShowPopupSubject = new BehaviorSubject<boolean>(false);

  public isShowPopup$ = this.isShowPopupSubject.asObservable();

  private groupFeatureSubscription$!: Subscription;

  constructor(
    private manageGroupsSrv: ManageGroupsService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.isSubmitInProgress$ = this.store.select(selectIsGroupSubmiting);

    this.managePopup();
  }

  managePopup(): void {
    this.groupFeatureSubscription$ = this.store
      .select(selectGroupsFeature)
      .subscribe(state => {
        const isShowPopup = state.delGroupId === this.groupItem.id;
        this.isShowPopupSubject.next(isShowPopup);
      });
  }

  dispatchShowPopupAction(): void {
    this.store.dispatch(showPopupAction({ delGroupId: this.groupItem.id }));
  }

  dispathHidePopupAction(): void {
    this.store.dispatch(hidePopupAction());
  }

  deleteGroup(): void {
    this.store.dispatch(deleteGroupAction({ groupID: this.groupItem.id }));
    this.store.dispatch(groupsSubmitBtnDisableAction());
  }

  ngOnDestroy(): void {
    this.groupFeatureSubscription$.unsubscribe();
  }
}
