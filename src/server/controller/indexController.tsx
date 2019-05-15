import {Request, Response} from 'express';

const indexController = (req: Request, res: Response) => {
    res.send({test: 1}.toString())
}

export default indexController;