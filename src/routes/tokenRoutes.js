// eslint-disable-next-line import/no-extraneous-dependencies, import/newline-after-import
import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
