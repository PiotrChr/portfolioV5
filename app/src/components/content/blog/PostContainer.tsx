import { Post } from '@Server/mapper';
import { mapContent } from '@App/service/contentfulMapper';

import React from 'react';

export type Props = {
    posts: Post[];
};

export const PostContainer = (props: Props) => {
    const getPosts = () => mapContent(props.posts);

    return (
        <div>
            <div>Post Container</div>
            <div>{getPosts()}</div>
        </div>
    );
};
