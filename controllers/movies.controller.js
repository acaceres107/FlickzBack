import { Movies } from "../models/Movies.js";
import defaultResponse from "../config/response.js";

const controller = {
    read_all: async(req, res, next) => {
        let queriesToFilter = {}
        let ordering = {}
        let pagination = {
        page:1 ,
        limit: 65 
        }
        if(req.query.name){
            queriesToFilter.name = { "$regex": req.query.name, $options: "i" };
        }
        if (req.query.category_id){
            queriesToFilter.category_id = req.query.category_id.split(",")
        }
        if (req.query.sort){
            ordering = {name: req.query.sort}
        }
        if (req.query.page) {
            pagination.page = req.query.page;
        }
        if (req.query.limit) {
            pagination.limit = req.query.limit;
        }
        try{
            const movies = await Movies.find(queriesToFilter)
            .sort(ordering)
            .skip( pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
            .limit(pagination.limit)
            req.body.success = true;
            req.body.sc = 201;
            req.body.data = movies;
            return defaultResponse(req, res);
        }
        catch(error){
            console.log(error);
        }
    }
}
export default controller