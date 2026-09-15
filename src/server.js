const app = require("./app");
const port = 3000
require("dotenv").config();

const db = require("./config/db");

const StartServer = async ()=> {
   
    try {

        await db.connectDB();

        app.listen(port,()=>{
            console.log(`server is running on http://localhost:${port}`);
        });

    } catch (error) {

        console.log("failed to server start",error);
        process.exit(1);

    }

}

StartServer();