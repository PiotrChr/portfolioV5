import axios from 'axios';
import constants from '@Config/constants';

export type Post = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    locale: string;
    title: string;
    fields: any;
    contentTypeId: string;
};

export const getPosts = async (): Promise<any> => {
    const url = `${constants.env.SERVER_BASE_URL}${constants.env.API_URL}/content/blog`;

    return await fetchJson(url);
};

export const getPost = async (postId: string): Promise<any> => {
    const url = `${constants.env.SERVER_BASE_URL}${constants.env.API_URL}/content/blog${postId}`;

    return await fetchJson(url);
};

const fetchJson = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log('blogRepository error: ', error);
        throw new error();
    }
};
