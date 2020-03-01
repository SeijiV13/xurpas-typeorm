import { Blog } from './../entity/Blog';
import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
export const checkBlogValidity = async (req: Request, res: Response, next: NextFunction) => {
     const { title, description, datePosted } = req.body;
     const blog = new Blog();
     blog.title = title;
     blog.description = description;
     blog.datePosted = datePosted;
    const errors = await validate(blog);
    if(errors.length > 0) {
        res.status(400).send(errors);
        return;
    }

    next();
}