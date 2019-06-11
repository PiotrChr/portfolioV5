import React, { useCallback } from 'react';
import { Normalize } from 'styled-normalize';
import { Routes } from '@App/router/routes';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Helmet from '@App/components/common/Helmet';
import { Navbar } from '@App/components/common/nav/Navbar';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { setLocale } from '@App/store/actions/env';

const { themes, ...S } = require('@App/styled');

type Props = {
    setLocale: (locale: string) => void
    t: (key: string) => string
}

const App = ({ setLocale, t }: Props) => {
    const handleLocaleChange = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
        setLocale(e.currentTarget.value);
    }, []);

    return (
        <>
            <Helmet mainTitle="Piotr Portfolio" />
            <S.App>
                <BootstrapProvider theme={themes.main}>
                    <Normalize />
                    <Navbar setLocale={setLocale} />
                    <div className="">
                        <Routes />
                    </div>
                </BootstrapProvider>
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
