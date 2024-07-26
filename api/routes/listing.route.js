import express from 'express';
import { createListing  , deleteListing , updateListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utilis/verifyUser.js';

const router =  express.Router();

router.post('/create', verifyToken, createListing);
router.delete("/delete/:id" , verifyToken  , deleteListing);
router.post('/update/:id' , verifyToken , updateListing);

export default router;