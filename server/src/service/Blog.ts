import { BlogRepository } from '@Server/repository'
import { ContentfulStorage, ContentfulConfig } from '@Server/storage/'
import { env } from '@Config/env';

// TODO: Add Post Type
export interface Blog {
    getAll: () => any,
    getById: (id: string) => any
}

export const Blog = (): Blog => {

    const apiConfig: ContentfulConfig = {
        space: env.CONTENTFUL_PREVIEW_SPACE_ID,
        accessToken: env.CONTENTFUL_CD_ACCESS_TOKEN
    };

    const storage = new ContentfulStorage(apiConfig)
    const repository = new BlogRepository(storage)

    return {
        getAll: repository.getAll,
        getById: repository.getById
    }
}
