import { ContentfulStorage } from '../storage';
import { postMapper } from '../mapper';
import console = require('console');
export class BlogRepository {
    storage: ContentfulStorage;

    constructor(contentfulStorage: ContentfulStorage) {
        this.storage = contentfulStorage;
    }

    // getPosts(page: number): any {
    //     const posts = this.storage.getPosts(page);
    //     return posts;
    // }

    async getAll(): Promise<any> {
        try {
            const posts = await this.storage.getAll();
            return postMapper(posts.items);
        } catch (error) {
            console.log('error', error);
            throw new error();
        }
    }

    getById(): any {
        return '';
    }
}
