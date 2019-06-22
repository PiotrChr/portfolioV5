import React from 'react';
import { ContentfulComponentProps } from '@App/service/contentfulMapper';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type Props = ContentfulComponentProps & {
    fields: {
        title: string;
        content: any;
    };
};

export const Post = (props: Props): import('react').ReactElement => {
    const content = documentToHtmlString(props.fields.content);
    return (
        <div id={props.id}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};
