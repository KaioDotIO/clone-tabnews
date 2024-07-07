function status(request: any, response: any) {
  response.status(200).json({
    chave: "Valor",
  });
}

export default status;
