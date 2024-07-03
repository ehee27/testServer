import express from 'express'

const app = express()

const port = process.env.PORT || 3500

app.get('/', (req, res) => {
  res.json('Server is LIVE')
})

app.listen(port, console.log(`Server listening on port ${port}`))
