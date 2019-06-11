import { ContentfulStorage } from '@Server/storage'
import console = require('console');

export class BlogRepository {
    constructor(public storage: ContentfulStorage) {

    }

    getPosts(page: number): any {
        const posts = this.storage.getPosts(page)
        console.log(posts);
        return posts
    }

    getAll(): any {
        return ''
    }

    getById(): any {
        return ''
    }
}
