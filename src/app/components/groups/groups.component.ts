import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  public groupList$!: Observable<ModifiedGroupInterface[] | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadGroupsAction());

    this.isShowForm$ = this.store.select(selectIsShowForm);

    this.groupList$ = this.store.select(selectGroupList);
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

  onSubmit(event: Event) {
    event.preventDefault();
  }

  // getSearchItemID(index: number, cardItem: CardInterface): string {
  //   return cardItem.id;
  // }
}
