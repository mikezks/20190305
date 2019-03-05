import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subscription, Subject } from 'rxjs';
import { take, takeUntil, switchMap, debounceTime, filter, tap, delay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Flight } from '@flight-workspace/flight-api';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css']
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {
  timer$: Observable<number>;
  timerSubscription: Subscription;
  destroy$ = new Subject<boolean>();

  control = new FormControl();
  flights$: Observable<Flight[]>;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.rxjsDemo();

    this.flights$ = this.control
      .valueChanges
      .pipe(
        debounceTime(300),
        filter((value: string) => value.length > 2),
        tap(() => this.loading = true),
        delay(3000),
        switchMap(value => this.load(value)),
        tap(() => this.loading = false),
      );
  }

  load(from: string): Observable<Flight[]>  {
    const url = "http://www.angular.at/api/flight";

    const params = new HttpParams()
                        .set('from', from);

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  };

  rxjsDemo(): void {
    this.timer$ = timer(0, 1000);
    this.timerSubscription = this.timer$
      .pipe(
        takeUntil(this.destroy$),
        //take(5)
      )
      .subscribe(
        value => console.log(value)
      );
  }

  ngOnDestroy(): void {
    //this.timerSubscription.unsubscribe();
    this.destroy$.next(true);
  }

}
