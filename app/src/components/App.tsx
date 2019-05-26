import React from 'react';
import { render } from 'react-dom';

import Helmet from 'react-helmet';

type Props = {
    setLocale: (locale: string) => void
    t: (key: string) => string
}

const App = () => {

    return (
        <div className="">
            <Helmet
                defaultTitle=""
                titleTemplate=""
            />
            Something
        </div>
    );
}