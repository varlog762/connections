import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MessageInterface } from '../../models/message.interface';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input() message!: MessageInterface;

  ngOnInit(): void {
    // console.log(this.message);
  }
}
