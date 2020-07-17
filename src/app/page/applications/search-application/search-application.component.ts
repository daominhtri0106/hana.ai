import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-application',
  templateUrl: './search-application.component.html',
  styleUrls: ['./search-application.component.scss']
})
export class SearchApplicationComponent implements OnInit, OnDestroy {

  @Output() searchEmitter = new EventEmitter<string>();

  search = new Subject<string>();
  subscription$ = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  onSearch() {
    this.subscription$ = this.search.pipe(
      map((e: any) => e.target.value),
      debounceTime(1000),
      switchMap((e) => {
        return of(e);
      }),
    ).subscribe(val => {
      console.log(val);
      this.searchEmitter.emit(val);
    });
  }

  onKeyup(value) {
    this.search.next(value);
  }

}
