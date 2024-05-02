import Assets from './assets';
import { getSkills } from './skills';
import type { Blog } from '../types';

export const items: Array<Blog> = [
	{
		slug: 'one-million-dollar-webpage-cryptocurrency',
		color: '#5e95e3',
		description:
			'- Applied <b>ORM</b> technique. Optimized data transfer speed by developing a custom pixel encoding scheme.\n' +
			'- Allow users to register, log in, log out, buy or sell pixels, and set or edit pixel info(color, link, price, description).\n' +
			'- Verify user transactions through <b>cryptocurrency</b> transactions on <b>Goerli (Görli) Testnet</b> (through self-created MHP tokens).\n' +
			'- Deployed to <b>EC2</b> for better scaling.',
		shortDescription:
			"Replicate the famous 'The Million Dollar Homepage' with <b>React.js</b>, <b>Flask</b> and <b>PostgreSQL</b> while combined with <b>blockchain</b> technique.",
		links: [{ to: 'https://github.com/Mavis-H/onemillion_replica', label: 'GitHub'}],
		logo: Assets.OneMillion,
		name: 'One Million Dollars Webpage Replication with Cryptocurrency',
		date: new Date(),
        skills: []
	},
	{
		slug: 'todue-reminder-ios-app',
		color: 'yellow',
		description:
			"- Developed an <b>IOS</b> App that improved the current Apple's built-in Reminder App with a visual countdown bar and integrated it with the system calendar.\n" +
			"- Implemented the App with <b>UIViewController</b>, <b>UITableView</b>, <b>custom UITableViewCell</b>, <b>UIView</b>, and <b>EventKit</b>.",
		shortDescription:
			"Developed an improved version of Apple's built-in Reminder <b>IOS</b> App using <b>Xcode</b> and <b>Swift</b>.",
		links: [{ to: 'https://github.com/TYDingding/ToDue', label: 'GitHub'}],
		logo: Assets.ToDue,
		name: 'ToDue Reminder IOS App',
		date: new Date(),
        skills: []
	},
	{
		slug: 'trashman-2d-video-game',
		color: 'green',
		description:
			'- Core-loop: Explore maps, pick/trade items, attack/run from monsters, collect coins, buy powerful props, get a star before running out of energy, and pass to the next level.\n' +
			'- Led a group of 4 developers and built the game including 5 modules (health system, inventory system, GUI system, controller system, random treasure drop system) following <b>OOD</b> principles. Used <b>scriptable objects</b> as data containers to manage inventory data.\n',
		shortDescription:
			'A strategy based 2D adventure game developed using <b>Unity</b> and <b>C#</b>. Be a brave trashman!',
		links: [{ to: 'https://github.com/Mavis-H/VG1-Trashman', label: 'GitHub' }],
		logo: Assets.Trashman,
		name: 'Trashman 2D Video Game',
		date: new Date(),
        skills: [],
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'online-calendar',
		color: 'purple',
		description:
			"- Developed an interactive online calendar that allows users registration, event addition, and management.\n" +
			"- Enabled categorized event tagging, group collaboration on events, and selective calendar sharing based on time and category.\n" +
			"- Implemented using <b>Javascript(AJAX)</b> to create an asynchronous frontend on the client side, and <b>PHP</b> to run the server side.",
		shortDescription:
			"Developed an online interactive calendar similar to Google Calendar using <b>AJAX</b>, <b>PHP</b> and <b>MySQL</b>.",
		links: [{ to: 'https://github.com/cse330-fall-2021/module5-group-m5-502532-502936', label: 'GitHub'}],
		logo: Assets.OnlineCalendar,
		name: 'Online Calendar Smilar to Google Calendar',
		date: new Date(),
        skills: []
	},
	{
		slug: 'chat-room',
		color: 'black',
		description:
			"- Developed an online multi-user chat room that allows user to create public or priavte chat room with or without a secret passcode.\n" +
			"- Room owner can manage the room by adding, removing or banning user.\n" +
			"- User can send secret messages to other members in the same room.\n" +
			"- Use <b>Socket.IO</b> with <b>Node.JS</b> to implement two-way asychronous communication (non-blocking I/O) between client and server.",
		shortDescription:
			"Developed an online multi-user chat room using <b>Javascript</b>, <b>Node.JS</b>, <b>Socket.IO</b> and <b>JSON</b>.",
		links: [{ to: 'https://github.com/cse330-fall-2021/module6-group-m6-502532-502936', label: 'GitHub'}],
		logo: Assets.ChatRoom,
		name: 'Online Chat Room',
		date: new Date(),
        skills: []
	},
	{
		slug: 'news-website',
		color: 'red',
		description:
			"- Developed a news website that allows user registration, news addition, management and comments.\n" +
			"- Enabled categorized news tagging.",
		shortDescription:
			"Developed a news website using <b>PHP</b> and <b>MySQL</b>.",
		links: [{ to: 'https://github.com/cse330-fall-2021/module3-group-m3-502532-502936', label: 'GitHub'}],
		logo: Assets.NewsWebsite,
		name: 'News Website',
		date: new Date(),
        skills: []
	}
];

export const title = 'Blogs';
