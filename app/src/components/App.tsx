import React from 'react';
import { Normalize } from 'styled-normalize';
import { Routes } from '@App/router/routes';

import Helmet from '@App/components/common/Helmet';
import { Navbar } from '@App/components/common/Navbar';

const { themes, ...S } = require('@App/styled');
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

type Props = {
    setLocale: (locale: string) => void
    t: (key: string) => string
}

const App = () => {

    return (
        <>
            <Helmet mainTitle="Piotr Portfolio" />
            <S.App>
                <BootstrapProvider theme={themes.main}>
                    <Normalize />
                    <Navbar />
                    <div className="">
                        <Routes />
                    </div>
                </BootstrapProvider>
            </S.App>
        </>
    );
}

export default App;
