"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rich_text_html_renderer_1 = require("@contentful/rich-text-html-renderer");
exports.postMapper = function (posts) {
    return Array(posts.length)
        .fill(null)
        .map(function (_, index) {
        var rawPost = posts[index];
        try {
            // console.log('\n rawPost: ', rawPost.fields);
            return {
                id: rawPost.sys.id,
                createdAt: rawPost.sys.createdAt,
                updatedAt: rawPost.sys.updatedAt,
                locale: rawPost.sys.locale,
                title: rawPost.sys.title,
                content: rich_text_html_renderer_1.documentToHtmlString(rawPost.fields.content),
                contentTypeId: rawPost.sys.contentType.sys.id
            };
        }
        catch (error) {
            throw new error;
        }
    });
};
//# sourceMappingURL=postMapper.js.map