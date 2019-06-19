import { Request, Response } from 'express';

export const IndexController = (_: Request, res: Response) => {
    res.send({ test: 1 }.toString());
};

export default IndexController;
