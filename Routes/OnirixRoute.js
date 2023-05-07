import express from 'express';

import {getResponseByOnirix} from "../controllers/OnirixRControlers.js";

const router = express.Router();

router
    .route('/ask')
    .post(getResponseByOnirix)

export default router