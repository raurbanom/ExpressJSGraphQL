import express from "express";

const app = express();
const port = parseInt(process.env.PORT, 10) || 4040;

app.set("port", port);
app.get("/", (req, res) => {
    res.send("GET Request Called");
});

// Listen and running server
app.listen(app.get("port"), () => {
    console.log(`Listening to requests on http://localhost:${app.get("port")}`);
});