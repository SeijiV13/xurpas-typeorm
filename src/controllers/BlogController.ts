import { Blog } from './../entity/Blog';
import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
class BlogController { 

    public static getSingleBlog = async ( req: Request, res: Response) => {
        const { id } = req.params;
        const blogRepository = getRepository(Blog);
        blogRepository.findOne(id).then((blog) => {
            if(blog) {
                res.status(200).send(blog);
            } else {
                res.status(404).send({message: "blog not found!"});
            }
        } ).catch(error => res.status(500).send(error));
    }

    public static getAll = (req: Request, res: Response) => {
        const blogRepository = getRepository(Blog);
         blogRepository.find().then((data) => {
             res.status(200).send(data)
         }).catch((error) => {
             res.status(500).send(error);
         });
    } 

    public static createBlog  = async (req: Request, res: Response) => {
        const { title, description, datePosted } = req.body;
        const blogRepository = getRepository(Blog);
        const blog = new Blog();
        blog.title = title;
        blog.description = description;
        blog.datePosted = datePosted;
        blogRepository.save(blog).then((blog) => {
            res.status(201).send({message: 'Blog Created', blog});
        }).then((error) => {
            res.status(500).send(error);
        })
    }

    public static updateBlog = async (req: Request, res: Response) => {
        const { id } = req.params;
        const {title, description, datePosted} = req.body;
        const blogRepository = getRepository(Blog);
         blogRepository.findOne(id).then(async (blog) => {
            if(blog) {
                blog.title = title;
                blog.description = description;
                blog.datePosted = datePosted;
                const updatedBlog = await blogRepository.save(blog);
                res.status(200).send(updatedBlog);
            } else {
                res.status(404).send({ message: "blog not found"});
            }
            
        }).catch((error) => {
                res.status(500).send(error);
        });
    }

    public static deleteBlog = async (req: Request, res: Response) => {
        const { id } = req.params;
        const blogRepository = getRepository(Blog);
        blogRepository.findOne(id).then(async (blog) => {
            if(blog) {
                const deletedBlog = await blogRepository.delete(blog);
                res.status(200).send(deletedBlog);
            } else {
                res.status(404).send({ message: "blog not found"});
            }
           
       }).catch((error) => {
               res.status(500).send(error);
       });
    }
}

export default BlogController;