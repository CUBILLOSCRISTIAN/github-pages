// GetJson.js

const url =
  "https://www.datos.gov.co/resource/sbwg-7ju4.json?$query=SELECT%0A%20%20%60codigoestacion%60%2C%0A%20%20%60codigosensor%60%2C%0A%20%20%60fechaobservacion%60%2C%0A%20%20%60valorobservado%60%2C%0A%20%20%60nombreestacion%60%2C%0A%20%20%60departamento%60%2C%0A%20%20%60municipio%60%2C%0A%20%20%60zonahidrografica%60%2C%0A%20%20%60latitud%60%2C%0A%20%20%60longitud%60%2C%0A%20%20%60descripcionsensor%60%2C%0A%20%20%60unidadmedida%60%0AWHERE%0A%20%20(%60fechaobservacion%60%20%3E%20%222019-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp)%0A%20%20AND%20((%60latitud%60%20IS%20NOT%20NULL)%0A%20%20%20%20%20%20%20%20%20AND%20((%60longitud%60%20IS%20NOT%20NULL)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20(%60valorobservado%60%20IS%20NOT%20NULL)))";

async function fetchData() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default fetchData;
