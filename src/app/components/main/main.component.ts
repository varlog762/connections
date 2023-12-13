import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from '../groups/groups.component';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [CommonModule, GroupsComponent, PeopleComponent],
})
export class MainComponent implements OnInit {
  public cookies!: string[];

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
