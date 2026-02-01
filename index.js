import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 4000;


app.get("/", (req, res) => {
    res.send("Hii, RajKumar")
})

app.listen(PORT, () => {
    console.log("srvr is alive...")
})