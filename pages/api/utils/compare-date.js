export const compareDate = (date) =>{
  var today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const prevDay = date.getDate();
  const prevMonth = date.getMonth() + 1;
  const prevYear = date.getFullYear();
  if(prevDay >= day && prevMonth >= month && prevYear >= year) {
    return true;
  }
  else return false;
}