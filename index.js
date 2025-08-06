import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('messageCreate', (message) => {

  if (message.author.bot) return;


  if (message.content.startsWith('create')) {
    const url = message.content.split('create')[1]?.trim();
    return message.reply({
      content: `Generating short ID for: ${url}`,
    });
  }


  if (message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') {
    return message.reply({
      content: 'hii from bot',
    });
  }

});

client.on('interactionCreate', (interaction) => {
  console.log(interaction);
  interaction.reply('pong!');
});

client.login(process.env.DISCORD_TOKEN);

