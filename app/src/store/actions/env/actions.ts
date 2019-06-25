import { Locale } from '@App/i18n';
import constants from '@Config/constants'

export const ActionTypes = {
    SET_LOCALE: 'SET_LOCALE',
    SET_COMPONENT_STATUS: 'SET_COMPONENT_STATUS',
    SET_COMPONENT_PENDING: 'SET_COMPONENT_PENDING',
    RESET_ALL_COMPONENT_STATUS: 'RESET_ALL_COMPONENT_STATUS',
    REMOVE_COMPONENT_STATUS: 'REMOVE_COMPONENT_STATUS'
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SET_LOCALE,
    payload: locale,
});

export const setComponentStatus = (
    message?: string,
    scope?: string,
    statusType: string = constants.app.statusTypes.error
) => {
    if (!message) {
        return scope ? removeComponentStatus(scope) : removeAllComponentStatus();
    }

    scope = scope || constants.app.componentScopes.app;

    return {
        type: ActionTypes.SET_COMPONENT_STATUS,
        message,
        scope,
        statusType
    };
};

export const setHasPendingRequests = (
    hasPendingRequests: boolean = true,
    scope: string
) => ({
    type: ActionTypes.SET_COMPONENT_PENDING,
    hasPendingRequests,
    scope
});

export const removeAllComponentStatus = () => ({
    type: ActionTypes.RESET_ALL_COMPONENT_STATUS
});

// TODO: extend functionality
export const removeComponentStatus = (
    scope: string
) => ({
    type: ActionTypes.REMOVE_COMPONENT_STATUS,
    scope
});
