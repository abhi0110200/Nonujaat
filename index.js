import express from "express";
import CookiesMD from "@cookies-md/core";

const red = "\x1b[31m";
const bold = "\x1b[1m";
const reset = "\x1b[0m";

const logo = `
${red}${bold}
 ████╗  ██████╗ ██╗   ██╗██╗    ██╗     ██╗     ██╗   ██╗███████╗████████╗
██╔══██╗██╔═══██╗██║   ██║██║    ██║     ██║     ██║   ██║██╔════╝╚══██╔══╝
██████╔╝██║   ██║██║   ██║██║    ██║     ██║     ██║   ██║█████╗     ██║   
██╔══██╗██║   ██║╚██╗ ██╔╝██║    ██║     ██║     ██║   ██║██╔══╝     ██║   
██║  ██║╚██████╔╝ ╚████╔╝ ██████╗███████╗███████╗╚██████╔╝███████╗   ██║   
╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═════╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝   ╚═╝   
                     >>> POWERED BY NONU JAAT <<<
${reset}
`;

console.log(logo);
console.log(red + bold + "🔥 NONU JAAT BOT STARTING…" + reset);

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <body style="background:#111; color:#ff0000; text-align:center; font-family:monospace;">
      <pre>${logo}</pre>
      <h2>🔥 NONU JAAT – Cookies-MD Bot is LIVE 🔥</h2>
    </body>
  `);
});

app.listen(port, () => {
  console.log(red + `🚨 WEB SERVER RUNNING ON PORT ${port}` + reset);
});

// Start Cookies-MD Bot
CookiesMD({
  session: process.env.SESSION_ID,
  browser: ["NONU JAAT", "Chrome", "1.0.0"],
  mark: "🔥 Nonu Jaat 🔥"
});

console.log(red + bold + "💥 NONU JAAT THEME LOADED SUCCESSFULLY!" + reset);
