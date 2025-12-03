import express from "express";
import cookiesmd from "cookies-md";

const red = "\x1b[31m";
const bold = "\x1b[1m";
const reset = "\x1b[0m";

const logo = `
${red}${bold}
 █████  ██████  ██   ██ ██      █████      ██      ██    ██  █████  ████████
██   ██ ██   ██ ██   ██ ██     ██   ██     ██      ██    ██ ██   ██    ██
███████ ██████  ███████ ██     ███████     ██      ██    ██ ███████    ██
██   ██ ██   ██ ██   ██ ██     ██   ██     ██      ██    ██ ██   ██    ██
██   ██ ██   ██ ██   ██ ██████ ██   ██     ███████  ██████  ██   ██    ██
                    >>> POWERED BY ABHI JAAT <<<
${reset}
`;

console.log(logo);
console.log(red + bold + "🔥 ABHI JAAT BOT STARTING…" + reset);

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <body style="background:#111; color:red; text-align:center; font-family:monospace;">
      <pre>${logo}</pre>
      <h2>🔥 ABHI JAAT – Cookies-MD Bot is LIVE 🔥</h2>
    </body>
  `);
});

app.listen(port, () => {
  console.log(red + `🚨 WEB SERVER RUNNING ON PORT ${port}` + reset);
});

// Start Cookies-MD bot
cookiesmd({
  session: process.env.SESSION_ID,
  browser: ["ABHI JAAT", "Chrome", "1.0.0"],
  mark: "🔥 ABHI JAAT 🔥"
});

console.log(red + bold + "💥 ABHI JAAT THEME LOADED SUCCESSFULLY!" + reset);
