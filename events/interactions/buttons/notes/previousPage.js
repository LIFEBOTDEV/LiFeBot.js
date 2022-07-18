import noteUtil from '#util/NotesUtil';
import errorMessage from '#errormessage';
import { ActionRowBuilder, ButtonStyle, EmbedBuilder } from 'discord.js';

const execute = (interaction, query) => {
	try {
		let notesList;
		notesList =
			query === null
				? noteUtil.charLimitList(interaction.guild.id)
				: noteUtil.charLimitListQuery(interaction.guild.id, query);
		let oldEmbed = interaction.message.embeds[0];
		let oldTitle = oldEmbed.title.split('Page ');
		let page =
			parseInt(oldTitle[1] - 2) >= 0
				? parseInt(oldTitle[1 - 2])
				: notesList.length - 1;
		const previousButtonsDisabled = notesList.length < 1;
		const nextButtonsDisabled = page === notesList.length - 1;

		const newEmbed = new EmbedBuilder()
			.setTitle(oldTitle[0] + `page${page + 1}`)
			.setDescription(notesList[page])
			.setTimestamp();

		const actionRow = new ActionRowBuilder.addComponents(
			new ButtonBuilder()
				.setCustomId(`notes/firstPage-${query}`)
				.setStyle(ButtonStyle.Primary)
				.setLabel('First page')
				.setDisabled(previousButtonsDisabled),
			new ButtonBuilder()
				.setCustomId(`notes/previousPage-${query}`)
				.setStyle(ButtonStyle.Primary)
				.setLabel('Previous Page')
				.setDisabled(previousButtonsDisabled),
			new ButtonBuilder()
				.setCustomId(`notes/nextPage-${query}`)
				.setStyle(ButtonStyle.Primary)
				.setLabel('Next Page')
				.setDisabled(nextButtonsDisabled),
			new ButtonBuilder()
				.setCustomId(`notes/lastPage-${query}`)
				.setStyle(ButtonStyle.Primary)
				.setLabel('Last Page')
				.setDisabled(nextButtonsDisabled)
		);

		interaction.update({
			embeds: [newEmbed],
			components: [actionRow],
		});
	} catch (error) {
		errorMessage(interaction, error);
	}
};
export { execute };
