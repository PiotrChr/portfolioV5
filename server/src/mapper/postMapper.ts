export type Post = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    locale: string;
    fields: any;
    contentTypeId: string;
};

export const postMapper = (posts: any): Post[] => {
    return Array(posts.length)
        .fill(null)
        .map((_, index) => {
            const rawPost = posts[index];
            try {
                return {
                    id: rawPost.sys.id,
                    createdAt: rawPost.sys.createdAt,
                    updatedAt: rawPost.sys.updatedAt,
                    locale: rawPost.sys.locale,
                    title: rawPost.sys.title,
                    fields: rawPost.fields,
                    contentTypeId: rawPost.sys.contentType.sys.id,
                };
            } catch (error) {
                throw new error();
            }
        });
};
