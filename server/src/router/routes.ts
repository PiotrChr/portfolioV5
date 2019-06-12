import express = require('express');
const router = express.Router();
import { cache } from '@Server/middleware/cache'

import * as Controller from '@Server/controller';

router.get('/', Controller.Index);
router.get('/api/content/blog/:post', cache(5), Controller.Blog)

export default router;
