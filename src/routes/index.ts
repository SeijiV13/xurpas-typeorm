
import {Router} from 'express';
import blog from './blog.routes';
const router = new Router();

router.use('/blog', blog);

export default router;