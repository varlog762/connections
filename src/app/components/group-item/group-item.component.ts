import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModifiedGroupInterface } from '../../models/modified-group.interface';

@Component({
  selector: 'app-group-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-item.component.html',
  styleUrl: './group-item.component.scss',
})
export class GroupItemComponent {
  @Input() groupItem!: ModifiedGroupInterface;
}
