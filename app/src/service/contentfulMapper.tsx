import React from 'react';
import { Post as BlogPost } from '@App/components/content/blog';

export type Content = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    locale: string;
    title: string;
    fields: any;
    contentTypeId: string;
};

export type ContentfulComponentProps = {
    fields: any[];
    id: string;
};

export type ContentfulContentComponent = React.FC<ContentfulComponentProps>;

const contentTypes: { [key: string]: ContentfulContentComponent } = {
    blogPost: BlogPost,
};

export const mapContent = (content: Content[]) => {
    return Array(content.length)
        .fill(null)
        .map((_, i) => {
            const { contentTypeId, id, fields, title } = content[i];

            if (!(contentTypeId in contentTypes)) {
                return null;
            }

            const ContentComponent = contentTypes[contentTypeId];

            return <ContentComponent id={id} fields={fields} key={id} />;
        });
};
