import express = require('express');
const router = express.Router();

import * as Controller from './controller';

router.get('/', Controller.index);

export default router;
