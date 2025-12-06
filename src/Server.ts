import express, { Request, Response } from "express"
import { UserRouter } from "./Modules/User/User.router";
import { initDB } from "./Database/DB";
import { AuthRouter } from "./Modules/Auth/Auth.router";
const port = 5000
const app = express();




initDB()

app.use(express.json());
app.get('/', (req: Request, res: Response) => {

    res.send(' Hello World!')
})

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/auth', AuthRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
