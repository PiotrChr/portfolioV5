import { Locale } from '@App/i18n'

export interface Env {
    locale: Locale
};

const envState: Env = {
    locale: 'en_US'
}

export default envState
