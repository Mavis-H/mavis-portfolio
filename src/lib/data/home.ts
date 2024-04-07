import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mavis';

export const lastName = 'Hou';

export const description =
	"I'm a new grad 👩‍🎓 who is actively looking for a backend/frontend/fullstack SDE job. I lived in the SF Bay Area 🌁, I prefer a remote/hybrid job but I'm also willing to work on site in the Bay Area.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Mavis-H/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/siqian-hou-18713713a/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'mavishou@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
