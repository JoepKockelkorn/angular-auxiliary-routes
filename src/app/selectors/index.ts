import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { RouterReducerState, getSelectors, SerializedRouterStateSnapshot } from '@ngrx/router-store';
import { ActivatedRouteSnapshot, Params } from '@angular/router';

export const selectRouter = createFeatureSelector<any, RouterReducerState<SerializedRouterStateSnapshot>>('router');

const {
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);

export const selectAllRouteParams = selectRouteParams;
export const selectAllRouteParamsRecursively = createSelector(
  selectRouter,
  state => {
    return getParams(state.state.root);
  }
);

function getParams(snapshot: ActivatedRouteSnapshot): Params {
  return { ...snapshot.params, ...snapshot.children.map(c => getParams(c)).reduce((prev, curr) => ({ ...prev, ...curr }), {}) };
}
