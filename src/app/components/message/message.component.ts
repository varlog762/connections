import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MessageInterface } from '../../models/message.interface';
import { UserNamespace } from '../../namespaces/user.namespace';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input() message!: MessageInterface;

  public currentUserId = UserNamespace.currentUser['rs-uid'];

  public currentCompanionName: string | null = null;

  ngOnInit(): void {
    this.getCompanionName();
  }

  getCompanionName(): void {
    if (this.message.authorID !== this.currentUserId) {
      this.currentCompanionName = UserNamespace.getCurrentCompanionName(
        this.message.authorID
      );
    }
  }

  isMyMessage(): boolean {
    return this.message.authorID === this.currentUserId;
  }
}
