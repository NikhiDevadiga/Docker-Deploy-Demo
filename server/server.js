import "dotenv/config";
import app from "./src/app.js";
import {mongoConnect} from "./src/config/db.js"
mongoConnect()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})

console.log("testing");
