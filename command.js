import { REST, Routes, Client } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_ID);

(async () => {
    try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1399766123880251444"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
} 
})();
