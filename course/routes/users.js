import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

//  all routes are staring from /users
router.get("/", (req, res) => {
        res.send(users);
        console.log(users);
});

router.post("/", (req, res) => {
        const userId = uuidv4();
        const user = req.body;
        const userWithid = { ...user, id: userId };
        users.push(userWithid);
        res.send(userWithid); //there can be only 1 res.send()
        console.log(`user with name : ${userWithid.firstName} added`);
});

router.get("/:id", (req, res) => {
        // console.log("The get Id route");
        const { id } = req.params;

        const foundUser = users.filter((user) => user.id === id);

        res.send(foundUser);
});

router.delete("/:id", (req, res) => {
        const { id } = req.params;
        users = users.filter((user) => user.id !== id);
        res.send(`user with id: ${id} is deleted`);
});

router.patch(":/id", (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;

        const user = users.find((user) => user.id == id);

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (age) user.age = age;

        res.send(`user with ${id} has been updated`);
});

export default router;
