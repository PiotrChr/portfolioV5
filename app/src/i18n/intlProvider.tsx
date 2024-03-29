import React, { useEffect } from 'react';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import { getLocale } from '@App/store/selectors';

import deDE from '@Config/locales/de_DE.json';
import enUS from '@Config/locales/en_US.json';
import plPL from '@Config/locales/pl_PL.json';

import { Locale } from './';

i18next.init({
    fallbackLng: 'en_US',
    fallbackNS: ['translation'],
    resources: {
        de_DE: deDE,
        en_US: enUS,
        pl_PL: plPL,
    },
    parseMissingKeyHandler: (missing) => {
        if (process.env.NODE_ENV === 'development') {
            console.warn('MISSING TRANSLATION:', missing);
        }
        return missing;
    },
});

i18next.languages = ['de_DE', 'en_US', 'pl_PL'];

type Props = {
    children: React.ReactNode;
    locale: Locale;
};

const I18N = ({ children, locale }: Props) => {
    useEffect(() => {
        i18next.changeLanguage(locale);
    }, [locale]);

    return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

const mapStateToProps = (state: any) => {
    return {
        locale: getLocale(state),
    };
};

export default withRouter<any>(
    connect(
        mapStateToProps,
        null,
        null,
        { pure: false }
    )(React.memo(I18N))
);
