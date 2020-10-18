const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class PhoneBookCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'phone-book',
			group: 'other',
			memberName: 'phone-book',
			description: 'Looks up phone-enabled servers.',
			guildOnly: true,
			args: [
				{
					key: 'query',
					prompt: 'What server would you like to search for?',
					type: 'string'
				}
			]
		});
	}

	run(msg, { query }) {
		const channels = this.client.channels.cache.filter(channel => {
			const search = query.toLowerCase();
			return channel.type === 'text'
				&& channel.topic
				&& channel.topic.includes('<xskull:phone>')
				&& !channel.topic.includes('<xskull :phone-book:hide>')
				&& (channel.guild.name.toLowerCase().includes(search) || channel.name.includes(search));
		});
		if (!channels.size) return msg.reply('Could not find any results.');
		return msg.say(stripIndents`
			__**Results:**__ _(${channels.size} Results)_
			${channels.map(c => `**${c.id}** (#${c.name}: ${c.guild.name})`).slice(0, 10).join('\n')}
		`);
	}
};
