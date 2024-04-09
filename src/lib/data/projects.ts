import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
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
		links: [{ to: 'https://github.com/Mavis-H/onemillion_replica', label: 'GitHub' }],
		logo: Assets.OneMillion,
		name: 'One Million Dollars Webpage Replication with Cryptocurrency',
		period: { 
			from: new Date(2021, 11, 0), 
			to: new Date() 
		},
		skills: getSkills('python', 'reactjs', 'postgresql', 'flask', 'git', 'aws'),
		type: 'Web Application'
	},
	{
		slug: 'trashman-2d-video-game',
		color: '#ff3e00',
		description:
			'- Core-loop: Explore maps, pick/trade items, attack/run from monsters, collect coins, buy powerful props, get a star before running out of energy, and pass to the next level.\n' +
			'- Led a group of 4 developers and built the game including 5 modules (health system, inventory system, GUI system, controller system, random treasure drop system) following <b>OOD</b> principles. Used <b>scriptable objects</b> as data containers to manage inventory data.\n',
		shortDescription:
			'A strategy based 2D adventure game developed using <b>Unity</b> and <b>C#</b>. Be a brave trashman!',
		links: [{ to: 'https://github.com/Mavis-H/VG1-Trashman', label: 'GitHub' }],
		logo: Assets.Trashman,
		name: 'Trashman 2D Video Game',
		period: {
			from: new Date(2022, 2, 0), 
			to: new Date(2022, 6, 0)
		},
		skills: getSkills('unity', 'csharp', 'git'),
		type: '2D Game',
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
	}
];

export const title = 'Projects';
