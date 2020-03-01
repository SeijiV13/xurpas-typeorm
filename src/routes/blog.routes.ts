import {Router} from 'express';
import BlogController from '../controllers/BlogController';
import { checkBlogValidity } from '../middlewares/Validator';

const router = Router();

router.get('/:id', BlogController.getSingleBlog)
router.get('/', BlogController.getAll);
router.post('/',BlogController.createBlog);
router.put('/:id', BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export default router;