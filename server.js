const express = require('express');
const app = express();

let users = [
    {
        "userID": "1",
        "userName": "SaiKiranDiddi"
    }
];

// Middleware to parse JSON bodies
app.use(express.json());

// GET route to fetch all users
app.get('/', (req, res) => {
    res.send(users);
});

// POST route to add a new user
app.post('/', (req, res) => {
    const user = req.body;

    if (!user.userID || !user.userName) {
        return res.status(400).send({ message: "UserID and userName are required" });
    }

    users.push(user);
    res.status(201).send({ message: "User added", user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
