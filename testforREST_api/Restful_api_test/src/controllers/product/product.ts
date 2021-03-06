
import { Request, Response } from 'express';
import { Schema } from 'mongoose';
import { Product } from '../../schemas/product';
import { IProduct } from '../../interfaces/iproduct';

export const ProductController = {
    get: (req: Request, res: Response) => {
        let search_word = req.query.search_word ? JSON.parse(req.query.search_word) : {};
        let current_page = req.query.current_page ? parseInt(req.query.current_page) : 1;
        let sort_field = req.query.sort_field ? req.query.sort_field : "createdAt";
        let sort_dir = req.query.sort_dir ? req.query.sort_dir : "DESC";
        let cnt_page = req.query.cnt_page ? parseInt(req.query.cnt_page) : 10;

        var conditions = {
            ...search_word
        };
        var options = {
            skip: cnt_page * (current_page - 1),
            limit: cnt_page,
            sort: {
                [sort_field]: sort_dir
            }
        };
        Product.find(conditions, null, options, (err, products) => {
            let products_added = products.map(product => {
                product['_doc'].passed = product.passed_days();
                return product;
            });
            if (err) {
                res.status(500).json({ code: 500, message: err });
            } else {
                res.json(products_added);
            }
        });
    },
    
    // - GET - /products/:id # Get specific user
    getProduct: (req: Request, res: Response) => {
        Product.findById(req.params.id).exec((err, product) => {
            product["_doc"].passed = product.passed_days();

            if (err) {
                res.status(500).json({ code: 500, message: err });
            } else {
                res.json(product);
            }
        });
    },
        
    // - CREATE - /products # Create a new Product
    create: (req: Request, res: Response) => {
        let product = new Product(req.body);
    
        product.save((err) => {
            if (err) {
                res.status(500).json({ code: 500, message: err });
            } else {
                res.json(product);
            }
        });
    
    },
        
    // - UPDATE - /products # Update a Product
    update: (req: Request, res: Response) => {
        Product.findOneAndUpdate({ _id: req.body.id }, req.body, (err, user) => {
            if (err) {
                res.status(500).json({ code: 500, message: err });
            } else {
                res.json(true);
            }
        });
    },

    // - DELETE - /products/:id # Delete a product
    delete: (req: Request, res: Response) => {
    
        Product.deleteOne({ _id: req.params.id }, (err) => {
            if (err) {
                res.status(500).json({ code: 500, message: err });
            } else {
                res.json(true);
            }
        });
    
    },
};