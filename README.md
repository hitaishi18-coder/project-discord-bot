## 🤖 Discord Bot (discord.js v14)

A simple Discord bot built with `discord.js` that responds to slash commands and regular text messages. Great for learning and quick experiments.

### 🚀 Features

- **Slash command `/ping`**: Replies with “pong!”
- **Text replies**: Responds to `hi` or `hello`
- **URL helper**: Responds to `create <url>` with a confirmation message
- **Event logging**: Logs interaction events to the console

### 🧰 Tech Stack

- Node.js 18+
- discord.js v14
- dotenv

---

## ⚙️ Prerequisites

- Node.js 18 or higher
- A Discord account and a server where you can add a bot

---

## 🛠️ Discord Application Setup (One-time)

1. Open the Discord Developer Portal and create an Application.
2. Go to Bot → Add Bot. Copy the bot token (you will use this as `DISCORD_TOKEN`).
3. Under Bot → Privileged Gateway Intents, enable:
   - Message Content Intent
   - Server Members (if needed later)
4. Go to OAuth2 → URL Generator:
   - Scopes: `bot`, `applications.commands`
   - Bot Permissions: Administrator (or minimum permissions you actually need)
   - Copy the generated URL and open it to add the bot to your server.
5. Copy your Application ID (aka Client ID). You will need it to register slash commands.

---

## 📦 Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with:

```bash
DISCORD_TOKEN=your-bot-token
```

Note:
- `index.js` reads `DISCORD_TOKEN`.
- `command.js` currently sets the REST token from `process.env.CLIENT_ID` and uses a hard-coded Application ID in `Routes.applicationCommands("1399766123880251444")`. For simplicity, either:
  - Set `CLIENT_ID` in your `.env` to the same bot token (works with the current code), and leave the hard-coded ID as-is, or
  - Update `command.js` to use `DISCORD_TOKEN` for the REST token and replace the hard-coded ID with your actual Application ID.

---

## ▶️ Run the Bot

1. (Optional but recommended) Register slash commands:

```bash
node command.js
```

2. Start the bot:

```bash
npm start
```

You should see the bot come online in your server.

---

## 💬 Usage

- Send `hi` or `hello` in any channel the bot can read → it replies with “hii from bot”.
- Send `create <url>` → it replies with “Generating short ID for: <url>”.
- Use `/ping` → it replies “pong!”.

---

## 📁 Project Structure

- `index.js`: Connects the bot, sets intents, and handles message events and interaction logging.
- `command.js`: Registers the global `/ping` slash command via Discord REST API.
- `package.json`: Scripts and dependencies.
- `.env`: Your environment variables (not committed).
- `discord.txt`: Step-by-step notes on setting up a Discord bot.

---

## ❗ Troubleshooting

- Unauthorized (401) when registering commands:
  - Ensure the token used in `command.js` is valid. If using the current code, set `CLIENT_ID` to your bot token in `.env`, or update `command.js` to use `DISCORD_TOKEN`.
- Slash command not showing:
  - Global commands can take up to an hour to propagate. For faster iteration, register guild commands using `Routes.applicationGuildCommands(appId, guildId)`.
- Bot not responding to messages:
  - Ensure Message Content Intent is enabled in the Developer Portal and the bot has permission to read/send messages in the channel.

---

## 📝 License

ISC

---

## 🙌 Notes

- You can extend this bot to add more commands or integrate other services (e.g., ChatGPT) by adding handlers in `index.js` and registering additional commands in `command.js`.

