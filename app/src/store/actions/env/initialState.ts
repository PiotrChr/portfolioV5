import { Locale } from '@App/i18n'

export interface Env {
    locale: Locale
};

export const ActionTypes = {
    SET_LOCALE: 'SET_LOCALE'
};

const envState: Env = {
    locale: 'en_US'
}

export default envState
