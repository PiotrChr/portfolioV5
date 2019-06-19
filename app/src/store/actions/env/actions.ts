import { Locale } from '@App/i18n';

export const ActionTypes = {
    SET_LOCALE: 'SET_LOCALE',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SET_LOCALE,
    payload: locale,
});
