import { Locale } from '@App/i18n';
import constants from '@Config/constants'

export type Status = {
    id: string,
    type: string,
    message: string
}

export type Env = {
    locale: Locale;
    componentScopes: {
        [key: string]: {
            hasPendingRequests: boolean,
            status: Status[]
        }
    }
}

export const env: Env = {
    locale: 'en_US',
    componentScopes: Object.values(constants.app.componentScopes).reduce(
        (acc: { [key: string]: any }, val: string) => {
            acc[val] = {
                hasPendingRequests: false,
                errors: []
            };

            return acc;
        },
        {}
    ),
};
