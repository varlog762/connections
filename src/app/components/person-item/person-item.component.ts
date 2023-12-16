import { Component, Input } from '@angular/core';

import { ModifiedPersonInterface } from '../../models/modified-person.interface';

@Component({
  selector: 'app-person-item',
  standalone: true,
  imports: [],
  templateUrl: './person-item.component.html',
  styleUrl: './person-item.component.scss',
})
export class PersonItemComponent {
  @Input() personItem!: ModifiedPersonInterface;
}
