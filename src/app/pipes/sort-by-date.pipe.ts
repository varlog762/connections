import { Pipe, PipeTransform } from '@angular/core';
import { ModifiedGroupInterface } from '../models/modified-group.interface';

@Pipe({
  name: 'sortByDatePipe',
  standalone: true,
})
export class SortByDatePipe implements PipeTransform {
  transform(groupList: ModifiedGroupInterface[]): ModifiedGroupInterface[] {
    return [...groupList].sort((a, b) => +b.createdAt - +a.createdAt);
  }
}
