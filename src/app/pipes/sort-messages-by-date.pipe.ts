import { Pipe, PipeTransform } from '@angular/core';
import { ModifiedGroupInterface } from '../models/modified-group.interface';
import { MessageInterface } from '../models/message.interface';

@Pipe({
  name: 'sortMessagesByDatePipe',
  standalone: true,
})
export class SortMessagesByDatePipe implements PipeTransform {
  transform(messages: MessageInterface[]): MessageInterface[] {
    const sortedList = [...messages].sort(
      (a, b) => +a.createdAt - +b.createdAt
    );

    return sortedList;
  }
}
