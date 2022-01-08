import { Router } from 'express';
import cloudinary from '../utils/cloudinary';
import upload from '../utils/multer'
import prisma from '../utils/prisma'

const router = Router()

// Get FAQ questions and answers
router.get('/', async (req, res) => {
    const faq = await prisma.fAQ.findMany()

    res.json(faq)
})

export default router