import memcache from 'memory-cache';
import { Request, Response, NextFunction, Send } from 'express'

export const cache = (duration: number) => (req: Request, res: any, next: NextFunction) => {
    let key = `__express__` + req.originalUrl || req.url
    let cachedBody = memcache.get(key)

    if (cachedBody) {
        res.send(cachedBody);
        return
    } else {
        res.sendResponse = res.send
        res.send = (body: any): Response => {
            memcache.put(key, body, duration * 1000)
            return res.sendResponse(body)
        }

    }
}
