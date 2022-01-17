import { MessageActionRow, MessageEmbed, MessageButton } from 'discord.js';
import quoteUtil from '#util/QuoteUtil';
import lang from '#lang';

async function execute(interaction) {
	const locale = interaction.locale;
	let quoteList = await quoteUtil.charLimitList(interaction.guild.id);
	let oldEmbed = interaction.message.embeds[0];
	let oldTitle = oldEmbed.title.split('Page ');
	let page = 0;
	const previousButtonsDisabled = true;
	const nextButtonsDisabled = quoteList.length < 2;

	const newEmbed = new MessageEmbed()
		.setTitle(oldTitle[0] + `Page ${page + 1}`)
		.setDescription(quoteList[page])
		.setTimestamp();

	const actionRow = new MessageActionRow().addComponents(
		new MessageButton()
			.setCustomId('quotes/firstPage')
			.setStyle('PRIMARY')
			.setLabel(await lang('FIRST_PAGE', {}, locale))
			.setDisabled(previousButtonsDisabled),
		new MessageButton()
			.setCustomId('quotes/previousPage')
			.setStyle('PRIMARY')
			.setLabel(await lang('PREVIOUS_PAGE', {}, locale))
			.setDisabled(previousButtonsDisabled),
		new MessageButton()
			.setCustomId('quotes/nextPage')
			.setStyle('PRIMARY')
			.setLabel(await lang('NEXT_PAGE', {}, locale))
			.setDisabled(nextButtonsDisabled),
		new MessageButton()
			.setCustomId('quotes/lastPage')
			.setStyle('PRIMARY')
			.setLabel(await lang('LAST_PAGE', {}, locale))
			.setDisabled(nextButtonsDisabled)
	);

	await interaction.update({
		embeds: [newEmbed],
		components: [actionRow],
	});
}

export { execute };