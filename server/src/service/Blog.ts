import { BlogRepository } from '../repository';
import { ContentfulStorage, ContentfulConfig } from '../storage/';
import { getEnv } from '../config/env';

// TODO: Add Post Type
export interface Blog {
    getAll: () => Promise<any>;
    getById: (id: string) => any;
}

export const Blog = (): Blog => {
    const env: EnvVars = getEnv();

    const apiConfig: ContentfulConfig = {
        space: env.CONTENTFUL_PREVIEW_SPACE_ID,
        accessToken: env.CONTENTFUL_CD_ACCESS_TOKEN,
    };

    const storage = new ContentfulStorage(apiConfig);
    const repository = new BlogRepository(storage);

    // console.log(repository);

    return {
        getAll: () => repository.getAll(),
        getById: () => repository.getById(),
    };
};
