import { Router } from 'express';
import cloudinary from '../utils/cloudinary';
import upload from '../utils/multer'
import prisma from '../utils/prisma'

const router = Router()

// Get list of movies
router.get('/', async (req, res) => {
    const movies = await prisma.movie.findMany({
        include: { 
            episodes: true,
            genres: {
                include: {
                    genre: true
                }
            }
        },
        where: {
            deleted: false
        }
    })


    res.json(movies)
})

// // Add new movie
// router.post('/', async (req, res) => {
//     const { body } = req

//     if(
//         !body.title ||
//         !body.description ||
//         !body.type
//     ) {
//         res.status(400).json({
//             message: 'Invalid Form Body'
//         })
//         return
//     }

//     const movie = await prisma.movie.create({
//         data: {
//             title: body.title,
//             description: body.description,
//             type: body.type,
//             created: new Date()
//         }
//     })

//     res.json({ data: movie })
// })

// Get a specific movie 
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { content, parentId } = req.body;

    const movie = await prisma.movie.findUnique({
        where: {
            id: parseInt(id)
        },
        include: { 
            episodes: true,
            genres: {
                include: {
                    genre: true
                }
            }
        } 
    })

    res.json(movie)
})

// Edit a movie
// router.patch('/:id', async (req, res) => {
    
// })


// // Get movie comments
// router.get('/:movieId/comments', async (req, res) => {
//     const { movieId } = req.params

//     const comments = await prisma.comment.findMany({
//         where: {
//             movieId: parseInt(movieId)
//         },
//         include: {
//             author: true
//         }
//     })

//     res.json(comments)
// })

// // Post movie comment
// router.post('/:movieId/comments', async (req, res) => {
//     const { movieId } = req.params
//     const { authorId, content } = req.body

//     const comment = await prisma.comment.create({
//         data: {
//             movieId: parseInt(movieId),
//             authorId: parseInt(authorId),
//             content
//         }
//     })

//     res.json(comment)
// })

// // Edit movie comment
// router.patch('/:movieId/comments/:commentId/', async (req, res) => {
//     const { movieId, commentId } = req.params
//     const { content } = req.body

//     const comment = await prisma.comment.update({
//         data: {
//             content: content
//         },
//         where: {
//             id: parseInt(commentId)
//         }
//     })

//     res.json(comment)
// })

export default router