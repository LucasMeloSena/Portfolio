export const convertDateToLocaleString = (date: Date) => {
  let value = date.toLocaleDateString()
  let newDate = value.split('/');
  return `${newDate[1]}/${newDate[0]}/${newDate[2]}`
} 