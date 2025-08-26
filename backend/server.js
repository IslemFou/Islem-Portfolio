const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Portfolio en marche 🚀");
});

app.listen(5000, () => {
    console.log("Serveur lancé sur http://localhost:5000");
});
