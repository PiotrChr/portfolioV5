import { Request, Response } from 'express';
import { Blog as BlogFactory } from '../service';
import console = require('console');
// import console = require('console');

export const BlogController = async (_: Request, res: Response) => {
    // const { postId } = req.params;

    const Blog = BlogFactory();
    const blog = await Blog.getAll();

    console.log(blog);

    res.send(blog);
};
