import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { State, Action } from '@App/store/';
import { Post } from '@Server/mapper';
import { fetchBlogPosts } from '@App/store/actions/content';
// import console = require('console');
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';



type Props = {
    // posts: Post[];
    posts: any;
    fetchBlogPosts: () => any;
};
class BlogPage extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchBlogPosts();
    }

    render(): ReactNode {
        return 'bumc';
    }
}

const mapStateToProps = (state: State) => {
    console.log(state);

    return {
        posts: 'asd'
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    fetchBlogPosts: () => { dispatch(fetchBlogPosts()) } ,
});

export const Blog = connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPage);
