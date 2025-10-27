import express from 'express';
import dotenv from "dotenv";
import comidaRoutes from './src/routes/comidaRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3001;

app.use(express.json());



app.use('/comidas', comidaRoutes);

app.listen(PORT, () => {
  console.log(` API em http://localhost:${PORT}`);
});