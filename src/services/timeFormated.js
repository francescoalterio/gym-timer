export function timeFormated(time) {
  return time.toString().length === 1 ? "0" + time.toString() : time.toString();
}
