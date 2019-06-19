"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.allowedEnvVariables = [
    'CONTENTFUL_CD_ACCESS_TOKEN',
    'CONTENTFUL_PREVIEW_ACCESS_TOKEN',
    'CONTENTFUL_PREVIEW_SPACE_ID',
    'CONTENTFUL_ENV',
];
exports.getEnv = function () {
    return exports.allowedEnvVariables.reduce(function (acc, envVar) {
        if (!process.env[envVar]) {
            console.log(process.env);
            throw new Error(envVar + " env variable not found in process.env");
        }
        acc[envVar] = process.env[envVar];
        return acc;
    }, {});
};
//# sourceMappingURL=env.js.map