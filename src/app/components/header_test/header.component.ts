import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { searchByQueryAction } from 'src/app/redux/actions/search-results.actions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public isFilterBlockVisible = false;

  public isLoggedIn$!: BehaviorSubject<boolean>;

  public searchForm!: FormGroup;

  private searchFormSubscr$: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.getLoggedIn();

    this.searchForm = this.fb.group({
      searchInput: [''],
    });
  }

  ngAfterViewInit(): void {
    this.searchFormSubscr$ = this.searchForm.get('searchInput')?.valueChanges.pipe(
      debounceTime(600),
      filter((searchText) => searchText && searchText.length > 2),
      distinctUntilChanged(),
    ).subscribe((searchText: string) => {
      this.router.navigate(['/results']);
      this.store.dispatch(searchByQueryAction({ payload: searchText }));
    });
  }

  toggleFilteringBlock(): void {
    this.isFilterBlockVisible = !this.isFilterBlockVisible;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  onLogOut(): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.searchFormSubscr$?.unsubscribe();
  }
}
