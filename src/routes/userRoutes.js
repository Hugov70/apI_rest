// eslint-disable-next-line import/no-extraneous-dependencies, import/newline-after-import
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// não deveria existir em uma aplicação real
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
