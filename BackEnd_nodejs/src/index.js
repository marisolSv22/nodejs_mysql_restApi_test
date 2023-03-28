import app from './app.js'
import { PORT } from './config.js'

//3. luego colocamos el puerto que vamos a escuchar y el respectivo puerto
app.listen(PORT)
console.log("Server running on port" , PORT);
