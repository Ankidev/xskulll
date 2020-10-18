const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class DonateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'donate',
			aliases: ['paypal'],
			group: 'util',
			memberName: 'donate',
			description: 'Responds with the bot\'s donation links.',
			guarded: true,
			credit: [
				{
					name: 'Paytm',
					reason: 'Donation Gathering'
				}
			]
		});
	}

	run(msg) {
		return msg.say(stripIndents`
			Contribute to development!India Paytm number-
		 9102088081
		`);
	}
};
