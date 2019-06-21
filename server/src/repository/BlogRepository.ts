import { ContentfulStorage } from '../storage';
import { contentMapper } from '../mapper';
import console = require('console');
export class BlogRepository {
    storage: ContentfulStorage;

    constructor(contentfulStorage: ContentfulStorage) {
        this.storage = contentfulStorage;
    }

    // TODO: Should only return posts with specific contentType
    // getPosts(page: number): any {
    //     const posts = this.storage.getPosts(page);
    //     return posts;
    // }

    async getAll(): Promise<any> {
        try {
            const posts = await this.storage.getAll();
            return contentMapper(posts.items);
        } catch (error) {
            console.log('error', error);
            throw new error();
        }
    }

    getById(): any {
        return '';
    }
}
