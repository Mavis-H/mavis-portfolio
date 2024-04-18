import{A as o}from"./UIcon.61c69238.js";const d=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function u(r,...t){const s=Object.assign({},r);return Object.keys(s).forEach(n=>{t.includes(n)&&delete s[n]}),s}const a=r=>r,p=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"}),a({name:"Others",slug:"others"})],e=r=>{const t=u(r,"category");return r.category&&(t.category=p.find(s=>s.slug===r.category)),t},i=[e({slug:"python",color:"#306998",description:"",logo:o.Python,name:"Python",category:"pro-lang"}),e({slug:"java",color:"orange",description:"",logo:o.Java,name:"Java",category:"pro-lang"}),e({slug:"csharp",color:"purple",description:"",logo:o.Csharp,name:"C#",category:"pro-lang"}),e({slug:"c",color:"#306998",description:"",logo:o.C,name:"C",category:"pro-lang"}),e({slug:"cpp",color:"#306998",description:"",logo:o.Cpp,name:"C++",category:"pro-lang"}),e({slug:"swift",color:"orange",description:"",logo:o.Swift,name:"Swift",category:"pro-lang"}),e({slug:"js",color:"yellow",description:"",logo:o.JavaScript,name:"Javascript",category:"pro-lang"}),e({slug:"ts",color:"blue",description:"",logo:o.TypeScript,name:"Typescript",category:"pro-lang"}),e({slug:"php",color:"blue",description:"",logo:o.PHP,name:"PHP",category:"pro-lang"}),e({slug:"matlab",color:"orange",description:"",logo:o.MATLAB,name:"MATLAB",category:"pro-lang"}),e({slug:"css",color:"blue",description:"",logo:o.CSS,name:"CSS",category:"pro-lang"}),e({slug:"html",color:"red",description:"",logo:o.HTML,name:"HTML",category:"pro-lang"}),e({slug:"postgresql",color:"#306998",description:"",logo:o.PostgreSQL,name:"PostgreSQL",category:"db"}),e({slug:"mysql",color:"#00758f",description:"",logo:o.MySQL,name:"MySQL",category:"db"}),e({slug:"snowflake",color:"cyan",description:"",logo:o.Snowflake,name:"Snowflake",category:"db"}),e({slug:"redis",color:"red",description:"",logo:o.Redis,name:"Redis",category:"db"}),e({slug:"reactjs",color:"cyan",description:"",logo:o.ReactJs,name:"React Js",category:"framework"}),e({slug:"flask",color:"black",description:"",logo:o.Flask,name:"Flask",category:"framework"}),e({slug:"fastapi",color:"#429287",description:"",logo:o.FastAPI,name:"FastAPI",category:"framework"}),e({slug:"kafka",color:"black",description:"",logo:o.Kafka,name:"Kafka",category:"framework"}),e({slug:"svelte",color:"red",description:d,logo:o.Svelte,name:"Svelte",category:"framework"}),e({slug:"tailwind",color:"cyan",description:"",logo:o.Tailwind,name:"Tailwind",category:"framework"}),e({slug:"sass",color:"pink",description:"",logo:o.Sass,name:"Sass",category:"framework"}),e({slug:"aws",color:"orange",description:"",logo:o.AWS,name:"AWS",category:"devtools"}),e({slug:"docker",color:"cyan",description:"",logo:o.Docker,name:"Docker",category:"devtools"}),e({slug:"kubernetes",color:"blue",description:"",logo:o.Kubernetes,name:"Kubernetes",category:"devtools"}),e({slug:"terraform",color:"purple",description:"",logo:o.Terraform,name:"Terraform",category:"devtools"}),e({slug:"datadog",color:"purple",description:"",logo:o.Datadog,name:"Datadog",category:"devtools"}),e({slug:"ecs",color:"orange",description:"",logo:o.ECS,name:"AWS ECS",category:"devtools"}),e({slug:"fargate",color:"orange",description:"",logo:o.Fargate,name:"AWS Fargate",category:"devtools"}),e({slug:"unity",color:"black",description:"",logo:o.Unity,name:"Unity",category:"devtools"}),e({slug:"linux",color:"black",description:"",logo:o.Linux,name:"Linux",category:"devtools"}),e({slug:"git",color:"red",description:"",logo:o.Git,name:"Git",category:"devtools"}),e({slug:"jira",color:"blue",description:"",logo:o.Jira,name:"Jira",category:"devtools"}),e({slug:"confluence",color:"blue",description:"",logo:o.Confluence,name:"Confluence",category:"devtools"}),e({slug:"pycharm",color:"#66d492",description:"",logo:o.PyCharm,name:"PyCharm",category:"devtools"}),e({slug:"vscode",color:"#4b9ae9",description:"",logo:o.VSCode,name:"Visual Studio Code",category:"devtools"}),e({slug:"xcode",color:"#4b9ae9",description:"",logo:o.Xcode,name:"Xcode",category:"devtools"}),e({slug:"nodejs",color:"green",description:"",logo:o.NodeJs,name:"Node Js",category:"others"}),e({slug:"socketio",color:"black",description:"",logo:o.SocketIO,name:"Socket.IO",category:"others"}),e({slug:"apache",color:"pink",description:"",logo:o.Apache,name:"Apache",category:"others"})],y="Skills",f=(...r)=>i.filter(t=>r.includes(t.slug)),h=r=>{const t=[],s=[];return i.forEach(n=>{if(r.trim()&&!n.name.toLowerCase().includes(r.trim().toLowerCase()))return;if(!n.category){console.log(n.category),s.push(n);return}let l=t.find(g=>{var c;return g.category.slug===((c=n.category)==null?void 0:c.slug)});l||(l={items:[],category:n.category},t.push(l)),l.items.push(n)}),s.length!==0&&t.push({category:{name:"Others",slug:"others"},items:s}),t};export{h as a,f as g,i,y as t};
