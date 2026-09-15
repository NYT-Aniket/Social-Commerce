const app = require("./app");
const port = 3000

const StartServer = ()=> {
   
    try {
            
        app.listen(port,()=>{
            console.log(`server is running on localhost:${port}`);
        });

    } catch (error) {

        console.log("failed to server start",error);
        process.exit(1);

    }

}

StartServer();