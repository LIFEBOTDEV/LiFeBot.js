import {} from 'dotenv/config';
import fs from 'fs';
import sql from '#sql';
import { Client, Intents } from 'discord.js';

// Create a new Client
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
});

const events = fs
	.readdirSync('./events')
	.filter((file) => file.endsWith('.js'));

// Open DB-Connection and create necessary tables
await sql.initialize();

// Check for an event and execute the corresponding file in ./events
for (let event of events) {
	const eventFile = await import(`#events/${event}`);
	if (eventFile.once)
		client.once(eventFile.name, (...args) => {
			eventFile.execute(...args);
		});
	else
		client.on(eventFile.name, (...args) => {
			eventFile.execute(...args);
		});
}

// Login with the environment data
client.login(process.env.BOT_TOKEN);
