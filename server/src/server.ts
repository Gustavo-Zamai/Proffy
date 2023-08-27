import express, { response as res, request as req } from "express";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    return res.json({ messsage: 'Ashen One' });
});

app.listen(3333);
