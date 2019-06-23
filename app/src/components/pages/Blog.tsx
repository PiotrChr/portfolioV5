import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { State, Action } from '@App/store/';
import { Post } from '@App/repository/blogRepository';
import { fetchBlogPosts } from '@App/store/actions/content';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { PostContainer } from '@App/components/content/blog';

type Props = {
    posts: Post[];
    fetchBlogPosts: () => any;
};
class BlogPage extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchBlogPosts();
    }

    render(): ReactNode {
        return (
            <>
                <div>Blog</div>
                <PostContainer posts={this.props.posts} />
            </>
        );
    }
}

const mapStateToProps = (state: { app: State }) => {
    return {
        posts: state.app.content.blog.posts,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchBlogPosts: () => {
        dispatch(fetchBlogPosts());
    },
});

export const Blog = connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPage);
