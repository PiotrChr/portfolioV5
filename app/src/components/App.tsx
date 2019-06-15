import React, { useCallback } from 'react';
import { Normalize } from 'styled-normalize';
import { Routes } from '@App/router/routes';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Helmet from '@App/components/common/Helmet';
import { Navbar } from '@App/components/common/nav/Navbar';

import { setLocale } from '@App/store/actions/env';


const { themes, ...S } = require('@App/styled');

type Props = {
    setLocale: (locale: string) => void
    t: (key: string) => string
}

const App = ({ setLocale, t }: Props) => {
    const handleLocaleChange = useCallback((locale: { value: string }) => {
        setLocale(locale.value);
    }, []);

    return (
        <>
            <Helmet mainTitle="Piotr Portfolio" />
            <S.App>
                    <Normalize />
                    <Navbar setLocale={handleLocaleChange} />
                    <div className="">
                        <Routes />
                    </div>
            </S.App>
        </>
    );
}

const mapDispatchToProps = {
    setLocale,
};

export default connect(
    null,
    mapDispatchToProps
)(withTranslation()<any>(App));
