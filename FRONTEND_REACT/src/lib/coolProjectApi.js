const API_URL = import.meta.env.PROD ? "/api/projectCard" : "http://localhost:3000/api/projectCard";

async function createProject(data) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const resJson = await res.json();

    return {
      success: resJson.success,
      cardURL: resJson.cardURL,
      error: resJson.error,
    };
  } catch (err) {
    console.error('FETCH-POST', err);
    return {
      success: false,
      error: "El servidor no está disponible en estos momentos",
    };
  }
}

export default { createProject };
