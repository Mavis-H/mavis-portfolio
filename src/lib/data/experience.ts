import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-development-intern',
		company: 'CertiK',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 5, 0), to: new Date(2022, 8, 0) },
		skills: getSkills('py', 'snowflake', 'kafka', 'redis', 'aws', 'docker', 'terraform', 'datadog', 'git', 'pycharm', 'jira', 'confluence'),
		name: 'Software Developmentn Intern',
		color: 'green',
		links: [],
		logo: Assets.CertiK,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
