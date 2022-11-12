export default function formatDate(date: string) {
  const today = Date.now()
  const newDate = new Date(date).getTime()
  const getDiff = Math.ceil((today - newDate) / (1000 * 60 * 60 * 24)); // Day different
  return `${getDiff} day${getDiff > 1? 's' : ''} ago`;
}
