import express = require('express');
const router = express.Router();

import * as Controller from '@Server/controller';

router.get('/', Controller.Index);
router.get('/api/content/blog/:post', Controller.Content)

export default router;
