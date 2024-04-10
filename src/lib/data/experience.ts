import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-development-intern',
		company: 'CertiK',
		description: '- Software development (<b>Python</b>) of blockchain monitor products with <b>Snowflake, Kafka, and Datadog in production</b>.\n' + 
						'- Researched Solana wash-trade, and applied directed graph cycle detection using <b>SCC algorithm</b> to the current monitor. Improved the performance of it by decreasing 20% false positive. Improved detecting speed using batch processing by 10%.\n' + 
						'- <b>Production CI/CD</b> product deployment using <b>GitHub workflow, Docker, Terraform, ECS, and AWS Fargate</b>. Maintain <b>CI/CD</b> documents.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 5, 0), to: new Date(2022, 8, 0) },
		skills: getSkills('python', 'snowflake', 'kafka', 'redis', 'aws', 'docker', 'terraform', 'datadog', 'git', 'pycharm', 'jira', 'confluence', 'ecs', 'fargate'),
		name: 'Software Development Intern',
		color: 'green',
		links: [{ to: 'https://www.certik.com', label: 'CertiK'}],
		logo: Assets.CertiK,
		shortDescription: 'Developing blockchain monitor products.'
	}
];

export const title = 'Experience';
