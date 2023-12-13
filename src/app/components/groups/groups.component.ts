import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  selectGroupList,
  selectIsShowForm,
} from '../../redux/selectors/groups.selectors';
import {
  hideFormAction,
  loadGroupsAction,
  showFormAction,
} from '../../redux/actions/groups.actions';
import { GroupItemComponent } from '../group-item/group-item.component';
import { ModifiedGroupInterface } from '../../models/modified-group.interface';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';

@Component({
  selector: 'app-groups',
  standalone: true,
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss',
  imports: [CommonModule, GroupItemComponent, SortByDatePipe],
})
export class GroupsComponent implements OnInit {
  public isShowForm$!: Observable<boolean>;

  public groupList!: ModifiedGroupInterface[] | null;

  private groupListSubscription$!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isShowForm$ = this.store.select(selectIsShowForm);

    this.groupListSubscription$ = this.store
      .select(selectGroupList)
      .subscribe(list => {
        if (!list?.length) {
          this.store.dispatch(loadGroupsAction());
        }

        this.groupList = list;
      });
  }

  closePopupOnClick(event: Event) {
    const target = event.target as HTMLElement;

    if (target.id === 'popupContainer' || target.id === 'popupCancel') {
      this.store.dispatch(hideFormAction());
    }
  }

  showForm(): void {
    this.store.dispatch(showFormAction());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  getGroupID(index: number, groupItem: ModifiedGroupInterface): string {
    return groupItem.id;
  }

  ngOnDestroy(): void {
    this.groupListSubscription$.unsubscribe();
  }
}
