export default function handler(req, res) {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send(now);
}
