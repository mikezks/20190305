import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  FlightsLoadedAction = '[FlightBooking] Flight loaded',
  FlightUpdateAction = '[FlightBooking] Update Flight',
  FlightsLoadAction = '[FlightBooking] Load Flights'  
}

export class FlightsLoadedAction implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedAction;
  constructor(readonly flights: Flight[]) {}
}

export class FlightUpdateAction implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdateAction;
  constructor(readonly flight: Flight) {}
}

export class FlightsLoadAction implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadAction;
  constructor(readonly from: string, readonly to: string) {}
}

export type FlightBookingActions =
  FlightsLoadedAction |
  FlightUpdateAction |
  FlightsLoadAction;
