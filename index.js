import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 4000;


app.get("/", (req, res) => {
    res.send("Hii, Raj")
})

app.listen(PORT, () => {
    console.log("srvr is alive...")
})