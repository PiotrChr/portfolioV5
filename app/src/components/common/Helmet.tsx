import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export type Props = {
    title?: string | undefined;
    description?: string | undefined;
    mainTitle: string;
};

export default ({ title, description, mainTitle }: Props) => {
    return (
        <Fragment>
            <Helmet titleTemplate={`%s - ${mainTitle}`}>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </Fragment>
    );
};
