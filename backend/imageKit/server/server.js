import app from './src/app.js'

if(!process.env.PORT) 
    console.log(`port is not there`)

app.listen(process.env.PORT , ()=>console.log('server is running'))