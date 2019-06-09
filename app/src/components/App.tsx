import React from 'react';
import { Normalize } from 'styled-normalize';
import { Routes } from '@App/router/routes';

import Helmet from '@App/components/common/Helmet';

type Props = {
    setLocale: (locale: string) => void
    t: (key: string) => string
}

const App = () => {

    return (
        <React.Fragment>
            <Helmet mainTitle="Piotr Portfolio" />
            <Normalize />
            <div className="">
                <Routes />
            </div>
        </React.Fragment>
    );
}

export default App;
