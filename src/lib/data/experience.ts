import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-development-intern',
		company: 'CertiK',
		description: '- Developed blockchain security monitoring products (<b>Python</b>) with <b>Snowflake, Kafka, Airflow, and Datadog</b> in production.\n' +
						'- Researched Solana NFT wash-trade detection, applied directed graph cycle detection by detecting SCC, reducing false positive by 20% and increasing detection speed by 10% using batch processing.\n' +
						'- Managed <b>CI/CD</b> deployment with <b>GitHub, Docker, Terraform, ECS, and AWS Fargate</b>; maintained <b>CI/CD</b> documentation.\n' +
						'- Performed unit testing on monitors internal logic, conducted integration testing with Kafka data consumption and production to ensure seamless data flow and reliability, and executed system testing to verify correct product deployment on AWS.\n',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2022, 5, 0), to: new Date(2022, 8, 0) },
		skills: getSkills('python', 'snowflake', 'kafka', 'redis', 'aws', 'docker', 'terraform', 'datadog', 'git', 'pycharm', 'jira', 'confluence', 'ecs', 'fargate'),
		name: 'Software Development Intern',
		color: 'green',
		links: [{ to: 'https://www.certik.com', label: 'CertiK'}],
		logo: Assets.CertiK,
		shortDescription: 'Developing blockchain monitor products.'
	},
	{
		slug: 'fullstack-software-engineer',
		company: 'ToHacking',
		description: '- Designed back-end services for data ingestion and storage, improving short-term rental listing configurations.\n' +
						'- Designed and maintained <b>ETL pipelines</b> using <b>Airflow and Python</b>, optimizing data flow and real-time analytics.\n' +
						'- Developed robust back-end systems for handling rental pricing and occupancy rate forecasting, utilizing <b>Redis</b> for caching and <b>PostgreSQL</b> for persistent storage; used <b>Docker</b> for containerization to ensure faster deployment and easy scaling.\n' +
						'- Designed <b>RESTful APIs</b> and microservices to support front-end data request; maintained a responsive and interactive front-end using <b>React</b>, enabling users to analyze rental configurations and access real-time forecasting.\n' +
						'- Managed data integration and preprocessing from multiple sources, boosting data quality by 11%.\n' +
						'- Introduced time series analysis <b>(Prophet)</b> to address seasonal patterns, reducing MSE by 8% over baseline models.\n',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023, 9, 0), to: new Date() },
		skills: getSkills('python', 'snowflake', 'kafka', 'redis', 'aws', 'docker', 'terraform', 'git', 'pycharm', 'jira', 'confluence', 'ecs', 'fargate', 'reactjs', 'airflow'),
		name: 'Fullstack Software Engineer',
		color: 'black',
		links: [{ to: '', label: 'ToHacking'}],
		logo: Assets.ToHacking,
		shortDescription: 'Developing short-term rental assistant products.'
	}
];

export const title = 'Experience';
