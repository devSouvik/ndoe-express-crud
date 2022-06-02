import express from "express";

import {
        createUser,
        deleteUser,
        getUser,
        putMethod,
        updateUser,
        getUsers,
} from "../controllers/users.js";

const router = express.Router();

//  all routes are staring from /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

router.put("'/:id", putMethod);

export default router;
