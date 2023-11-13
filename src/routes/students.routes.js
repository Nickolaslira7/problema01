import { Router } from "express";
import rotas from "./index.routes.js";

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res) => {
    return res.status(200).send({ message: "Get all student" });
});
studentsRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Get student with id ${id}` });
});
studentsRoutes.post("/", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({ essage: "Missing required informations" })
    }
    return res.status(200).send({message: "Missing required informations",});

});

studentsRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({
            message: `Missing required informations`
        })
    }
    return res.status(200).send({ message: `Estudante editado ${name} , email é ${email} e idade ${age}` })
});

studentsRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    return res.status(200).send({ message: `Delete student with id ${id}` });
});

    


    export default studentsRoutes;