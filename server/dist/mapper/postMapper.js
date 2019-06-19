"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentMapper = function (posts) {
    return Array(posts.length)
        .fill(null)
        .map(function (_, index) {
        var rawPost = posts[index];
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
        }
        catch (error) {
            throw new error();
        }
    });
};
//# sourceMappingURL=postMapper.js.map