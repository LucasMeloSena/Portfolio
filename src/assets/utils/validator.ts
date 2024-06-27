function validateToken(token?: string) {
  if (!token || token.toString().trim() == "") {
    throw Error("Token inválido! Você deve fornecer um token no formato correto.")
  }
}

export default {
  validateToken
}