import express from "express";
import { Mainmiddleware, registration } from "../Middleware/authmiddleware.js";
import { register } from "../Controller/Usercontroller.js";
import { addproduct, getallproducts } from "../Controller/Productcontroller.js";
var router = express.Router();



router.post('/registration',registration,register);
router.post('/Main-middleware',Mainmiddleware,addproduct);
router.post('/getall-products',getallproducts)



export default router;