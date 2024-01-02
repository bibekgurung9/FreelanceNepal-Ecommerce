import mongoose, { connection } from "mongoose";

export default async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () =>{
            console.log("MongoDB Has Connected Successfully!");
        })

        connection.on('error', (err) =>{
            console.log("MongoDB is not Running!" + err);
            process.exit;
        })

    } catch(error:any){
        console.log("Something Has Gone Wrong!");
        console.log(error);
    }
}