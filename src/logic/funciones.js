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

export const sortDays = (dias) => {
   const orden = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
   
   // Hace una copia del array
   const diasOrdenados = [...dias];
   
   return diasOrdenados.sort((a, b) => {
      return orden.indexOf(a) - orden.indexOf(b); 
   });
}

export const validateLng = (lng) => {
   const longRegexp = /^-?((0?\d{1,2}\.\d+)|([1-9]\d?|1[0-7]\d)(\.\d+)?)$/
   return longRegexp.test(lng)
}

export const validateLat = (lat) => {
   const latRegexp = /^-?((0?\d{1,2}\.\d+)|([1-8]?\d(\.\d+)?)|(90(\.0+)?))$/
   return latRegexp.test(lat)
}

const searchFields = ["title", "description", "address", "lat", "lon"]

export const findWorkspaceByValue = (workspacesData, value) => {
   const matchingWorkspaces = workspacesData.filter(workspace => {
      for (const field of searchFields) {
         const fieldValue = workspace[field];

         if (fieldValue && fieldValue.toString().toLowerCase().includes(value.toLowerCase())) {
            return true;
         }
      }
      return false;
   });

   return matchingWorkspaces;
}