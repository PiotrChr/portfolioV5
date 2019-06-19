/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { Locale } from '@App/i18n';
import { State } from '@App/store';

export const app = (state: { app: State }): State => state.app;

export const getLocale = createSelector(
    [app],
    (app): Locale => app.env.locale
);
