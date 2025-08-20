const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors());

const users = []

const JWT_SECRET = "this_is_my_jwt_secret"

// SIGNUP API
app.post("/api/signup", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing Information" });
    }

    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
        return res.status(401).json({ error: "User with email already exists!" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    }

    users.push(newUser);

    return res.status(200).json(
        {
            message: "Sign Up Successful!",
            newUser: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            }
        }
    )
});


// LOGIN API
app.post("/api/login", async (req, res) => {
    console.log("Reached Login")

    try {
        const { email, password } = req.body;
        console.log(`Info: ${email}, ${password}`)
        if (!email || !password) {
            return res.status(400).json({ error: "Missing login information" });
        }

        const loginUser = users.find(user => user.email === email);
        if (!loginUser) {
            return res.status(401).json({ error: "No account found!" })
        }

        const isValid = await bcrypt.compare(password, loginUser.password);
        if (!isValid) {
            return res.status(500).json({ error: "Invalid password." });
        }

        return res.status(200).json({
            message: "Login successful!",
            loginUser
        })
    } catch (error) {
        console.log(`Login Error: ${error}`);
        return res.status(400).json({ error: `Login Error: ${error}` })
    }


})




app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));