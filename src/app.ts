import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import usersRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import contactsRoutes from "./routers/contacts.routes";
import cors from "cors"

const app: Application = express();

app.use(cors())
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;