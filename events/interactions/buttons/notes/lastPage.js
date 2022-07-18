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
		let page = noteList.length - 1;
		const previousButtonsDisabled = noteList.length < 2;
		const nextButtonsDisabled = true;

		const newEmbed = new EmbedBuilder()
			.setTitle(oldTitle[0] + `page${page + 1}`)
			.setDescription(noteList[page])
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
