import database from "src/infra/database";

async function education(response: any): Promise<void> {
  try {
    const educationResult = await database.query("SELECT * FROM EDUCATION");
    const educationValue = educationResult.rows;

    return response.status(200).json({
      message: "Busca realizada com sucesso!",
      data: educationValue,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Erro!",
      data: null,
    });
  }
}

export default education;
