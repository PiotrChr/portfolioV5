const contentful = require('contentful');
import { ContentfulClientApi } from 'contentful';

export type ContentfulConfig = {
    space: string;
    accessToken: string;
};

export class ContentfulStorage {
    config: ContentfulConfig;
    client: ContentfulClientApi;

    constructor(config: ContentfulConfig) {
        this.config = config;

        this.client = contentful.createClient({
            space: config.space,
            accessToken: config.accessToken,
        });
    }

    // async getPosts(page: number): Promise<any> {
    //     return await this.client.getEntries()
    // }

    async getAll(): Promise<any> {
        return await this.client.getEntries();
    }
}
