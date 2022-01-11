import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

// Import sub-routes
import movieRoutes from './routes/movie'
import faqRoutes from './routes/faq'
import teamRoutes from './routes/team'
import genreRoutes from './routes/genre'
import typeRoutes from './routes/type'

app.use('/movie', movieRoutes)
app.use('/faq', faqRoutes)
app.use('/team', teamRoutes)
app.use('/genre', genreRoutes)
app.use('/type', typeRoutes)

app.listen(3001, '127.0.0.1', () => {
    console.log(`Server listens http://127.0.0.1:3001`)
})

