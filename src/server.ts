import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log("*******************************************");
    console.log(`🔰 Servidor rodando na porta ${port}!`);
    console.log(`   Servidor local: http://localhost:${port}`);
    console.log("*******************************************");
});
