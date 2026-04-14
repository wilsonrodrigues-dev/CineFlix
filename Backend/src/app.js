import express from 'express';
import homeRouter from './routes/home.routes.js';
import mediaDataRouter from "./routes/details.routes.js"
import peopleRouter from "./routes/people.routes.js"
import movieRouter from "./routes/movie.routes.js"
import tvShowsRouter from "./routes/tvshows.routes.js"
import morgan from 'morgan';
import cors from 'cors'



const app= express()

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(morgan())
app.use(express.json())


app.use("/api",homeRouter)
app.use("/api",mediaDataRouter)
app.use("/api",peopleRouter)
app.use("/api",movieRouter)
app.use("/api",tvShowsRouter)

export default app