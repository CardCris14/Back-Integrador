import {config} from "dotenv"
config();
export const PORT=process.env.port ?? 3000 //los signos de interrogacion indican que se ese valor no existe asigne el 3000