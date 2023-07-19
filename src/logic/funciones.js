export const formatearFechaInput = (date) => {
   const fecha = new Date(date);

   const dia = String(fecha.getDate()).padStart(2, '0');
   const mes = String(fecha.getMonth() + 1).padStart(2, '0');
   const año = fecha.getFullYear();

   return `${año}-${mes}-${dia}`;
}

export const truncatedText = (texto) => {
   // Numero limite para truncar
   const limit = 150

   // Obtiene las primeras 150 palabras
   const truncatedResult = texto.slice(0, limit);
   
   // Agregar los tres puntos suspensivos si el texto es mayor del limite
   return truncatedResult.length < limit ? truncatedResult : `${truncatedResult}...`;
}