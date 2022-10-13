const express=require('express')
const app=express()
const connectDB=require('./config/db')

connectDB()
//middleware
app.use(express.json())
app.use('/api/contacts',require('./routes/contact'))

const port=process.env.PORT || 5000
app.listen(port,()=>console.log(`server running on port ${port}`))

 