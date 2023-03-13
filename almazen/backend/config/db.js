import mongoose from "mongoose";

const conectarDB = async () =>{
    try {
        const conn = await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${conn.connection.host}:${conn.connection.port}`
        console.log(`Mongo DB conectado en ${url}`)

    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;