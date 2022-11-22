import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../database/firebase";

const COLECCION = "reservas";

const readData = async (coleccion) => {
  try {
    const cole = await getDocs(collection(db, coleccion));
    let arrCltes = cole.docs.map(doc => (doc.data()));
    arrCltes = arrCltes.sort((a, b) => a.ts - b.ts);
    return arrCltes;
  } catch (error) {
    console.log("Error leyendo los datos: ", error);
  }
}

const saveData = async (coleccion, nombre, apellidos, fono, eMail, nPersonas, fechaHr, mensaje) => {
  try {
    await addDoc(collection(db, coleccion),
      {
        
        nombre: nombre,
        apellidos: apellidos,
        fono: fono,
        mail: eMail,
        mensaje: mensaje,
        nPersonas: nPersonas,
        fechaHr: fechaHr,
        hr_registro: Date.now(),
      });
  } catch (error) {
    console.log("Error al registrar cliente ", error);
  }
}



export { readData, saveData, COLECCION }