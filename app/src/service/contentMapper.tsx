// TODO: dont mix with server types
import { Post } from '@Server/mapper';
import console = require('console');

export const contentMapper = (content: Post[]) => {
    console.log(content);
};
