const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors());

const users = []


// SIGNUP API
app.post("/api/signup", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing Information"});
    }
    
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
        return res.status(401).json({ error: "User with email already exists!"});
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
})


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));