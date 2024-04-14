import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Others', slug: 'others' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: '#306998',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: '',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: '#306998',
		description: '',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: '#306998',
		description: '',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'swift',
		color: 'orange',
		description: '',
		logo: Assets.Swift,
		name: 'Swift',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: '',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: '',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description: '',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'matlab',
		color: 'orange',
		description: '',
		logo: Assets.MATLAB,
		name: 'MATLAB',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: '',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'red',
		description: '',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'postgresql',
		color: '#306998',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: '#00758f',
		description: '',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'snowflake',
		color: 'cyan',
		description: '',
		logo: Assets.Snowflake,
		name: 'Snowflake',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: '',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: '',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'fastapi',
		color: '#429287',
		description: '',
		logo: Assets.FastAPI,
		name: 'FastAPI',
		category: 'framework'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'black',
		description: '',
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'red',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description: '',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'framework'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: '',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'framework'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: '',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'cyan',
		description: '',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: '',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'terraform',
		color: 'purple',
		description: '',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'datadog',
		color: 'purple',
		description: '',
		logo: Assets.Datadog,
		name: 'Datadog',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'ecs',
		color: 'orange',
		description: '',
		logo: Assets.ECS,
		name: 'AWS ECS',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'fargate',
		color: 'orange',
		description: '',
		logo: Assets.Fargate,
		name: 'AWS Fargate',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description: '',
		logo: Assets.Unity,
		name: 'Unity',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'linux',
		color: 'black',
		description: '',
		logo: Assets.Linux,
		name: 'Linux',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		description: '',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description: '',
		logo: Assets.Jira,
		name: 'Jira',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'confluence',
		color: 'blue',
		description: '',
		logo: Assets.Confluence,
		name: 'Confluence',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'pycharm',
		color: '#66d492',
		description: '',
		logo: Assets.PyCharm,
		name: 'PyCharm',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: '#4b9ae9',
		description: '',
		logo: Assets.VSCode,
		name: 'Visual Studio Code',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'xcode',
		color: '#4b9ae9',
		description: '',
		logo: Assets.Xcode,
		name: 'Xcode',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: '',
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'others'
	}),
	defineSkill({
		slug: 'socketio',
		color: 'black',
		description: '',
		logo: Assets.SocketIO,
		name: 'Socket.IO',
		category: 'others'
	}),
	defineSkill({
		slug: 'apache',
		color: 'pink',
		description: '',
		logo: Assets.Apache,
		name: 'Apache',
		category: 'others'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
