import contentful = require('contentful')

export interface ContentfulConfig {
    space: string,
    accessToken: string
}

export class ContentfulStorage {
    config: ContentfulConfig
    client: contentful.ContentfulClientApi

    constructor(config: ContentfulConfig) {
        this.config = config;

        this.client = contentful.createClient({
            space: config.space,
            accessToken: config.accessToken
        })
    }

    async getPosts(page: number) {
        return await this.client.getEntries()
    }
}
