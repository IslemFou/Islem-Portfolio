const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Portfolio en marche 🚀");
});

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER, // Remplacez par votre adresse email
                pass: process.env.MAIL_PASS // Remplacez par votre mot de passe ou utilisez des variables d'environnement pour plus de sécurité
            },
        });

        await transporter.sendMail({
            from: email,
            to: "archi.islemfourati@gmail.com",
            subject: `Nouveau message de ${name}`,
            text: message,
        });

        res.status(200).json({ message: "Message envoyé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de l'envoi" });
    }
});

app.listen(5000, () => {
    console.log("Serveur lancé sur http://localhost:5000");
});
