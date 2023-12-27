export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
export function calcMinutesLeft(dateStr) {
  const currentDate = new Date().getTime();
  const deliveryDate = new Date(dateStr).getTime();
  return Math.round((deliveryDate - currentDate) / 60000);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
