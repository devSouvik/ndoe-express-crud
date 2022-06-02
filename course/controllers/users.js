import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
        const userId = uuidv4();
        const user = req.body;
        const userWithid = { ...user, id: userId };
        users.push(userWithid);
        res.send(userWithid); //there can be only 1 res.send()
        console.log(`user with name : ${userWithid.firstName} added`);
};

export const getUser = (req, res) => {
        // console.log("The get Id route");
        const { id } = req.params;
        const foundUser = users.filter((user) => user.id === id);
        res.send(foundUser);
};

export const deleteUser = (req, res) => {
        const { id } = req.params;
        users = users.filter((user) => user.id !== id);
        res.send(`user with id: ${id} is deleted`);
};

export const updateUser = (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;

        const user = users.find((user) => user.id === id);

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (age) user.age = age;

        res.send(`user with ${id} has been updated`);
};

export const putMethod = (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;

        const user = users.find((user) => user.id === id);

        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;

        res.send(`user with ${id} has been updated with put method`);
};

export const getUsers = (req, res) => {
        res.send(users);
        console.log(users);
};
