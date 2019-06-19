"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("../repository");
var storage_1 = require("../storage/");
var env_1 = require("../config/env");
exports.Blog = function () {
    var env = env_1.getEnv();
    var apiConfig = {
        space: env.CONTENTFUL_PREVIEW_SPACE_ID,
        accessToken: env.CONTENTFUL_CD_ACCESS_TOKEN,
    };
    var storage = new storage_1.ContentfulStorage(apiConfig);
    var repository = new repository_1.BlogRepository(storage);
    // console.log(repository);
    return {
        getAll: function () { return repository.getAll(); },
        getById: function () { return repository.getById(); },
    };
};
//# sourceMappingURL=Blog.js.map