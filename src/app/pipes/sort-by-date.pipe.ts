import { Pipe, PipeTransform } from '@angular/core';
import { ModifiedGroupInterface } from '../models/modified-group.interface';

@Pipe({
  name: 'sortByDatePipe',
})
export class SortByDatePipe implements PipeTransform {
  transform(groupList: ModifiedGroupInterface[]): ModifiedGroupInterface[] {
    return groupList.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return dateA.getTime() - dateB.getTime();
    });
  }
}
