export function getIntervaloData(ano: number) {
  let result = [];
  for (let mes = 1; mes <= 12; mes++) {
    const primeiroDia = new Date(ano, mes - 1, 1);
    const ultimoDia = new Date(ano, mes, 0);

    result.push({
      mes: mes,
      primeiroDia: primeiroDia,
      ultimoDia: ultimoDia,
    });
  }

  return result;
}
