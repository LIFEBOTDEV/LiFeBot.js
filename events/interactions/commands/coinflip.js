import { SlashCommandBuilder } from '@discordjs/builders';
import lang from '#lang';

async function create() {
	const command = new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flips a coin');

	return command.toJSON();
}
async function execute(interaction) {
	const locale = interaction.locale;
	try {
		// Replys with Heads or Tails with a chance of 50%
		await interaction.reply(
			Math.random() < 0.5
				? await lang('HEADS', {}, locale)
				: await lang('TAILS', {}, locale)
		);
	} catch (error) {
		console.log(error);
		await interaction.reply({
			content: await lang('ERROR', {}, locale),
			ephemeral: true,
		});
	}
}

export { create, execute };
