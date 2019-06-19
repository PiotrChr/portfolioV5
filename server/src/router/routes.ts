import express from 'express';
const router = express.Router();
import cache from 'express-memory-cache';

import * as Controller from '../controller';

const ct = 3600 * 24;

router.get('/', cache(ct), Controller.Index);
router.get('/api/content/blog/:post?', cache(ct), Controller.Blog);

export default router;
