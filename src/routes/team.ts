import { Router } from 'express';
import cloudinary from '../utils/cloudinary';
import upload from '../utils/multer'
import prisma from '../utils/prisma'

const router = Router()

// Get list of movies
router.get('/', async (req, res) => {
    const team = await prisma.team.findMany()

    res.json(team)
})

export default router