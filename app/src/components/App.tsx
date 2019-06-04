import React from 'react';
import { render } from 'react-dom';

import Helmet from '@App/components/common/Helmet';

type Props = {
    setLocale: (locale: string) => void
    t: (key: string) => string
}

const App = () => {

    return (
        <div className="">
            <Helmet mainTitle="Piotr Portfolio" />
            Something
        </div>
    );
}

export default App;
