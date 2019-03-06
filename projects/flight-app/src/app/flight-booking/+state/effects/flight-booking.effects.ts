import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, switchMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FlightBookingActionTypes, FlightBookingActions, FlightsLoadAction, FlightsLoadedAction } from '../actions/flight-booking.actions';
import { FlightService } from '@flight-workspace/flight-api';


@Injectable()
export class FlightBookingEffects {

  constructor(
    private flightService: FlightService,
    private actions$: Actions
  ) {}

  @Effect()
  flightsLoad$ = this.actions$
    .pipe(
      ofType(FlightBookingActionTypes.FlightsLoadAction),
      switchMap((action: FlightsLoadAction) =>
        this.flightService.find(action.from, action.to)
      ),
      map(flights => new FlightsLoadedAction(flights))
    );
}
