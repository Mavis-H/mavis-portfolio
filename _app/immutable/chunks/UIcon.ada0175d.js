import{t as L,a as R,S as F,i as q}from"./index.1c372b4b.js";import{u as B,s as E,f as O,g as K,h as Q,d as N,j as _,i as V,n as x}from"./scheduler.740bcf2d.js";import{w as H,b as W}from"./paths.42326b1b.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,n){L(e,1,1,()=>{n.delete(e.key)})}function ns(e,n,o,a,c,p,f,U,A,D,h,I){let r=e.length,d=p.length,l=r;const m={};for(;l--;)m[e[l].key]=l;const u=[],y=new Map,w=new Map,C=[];for(l=d;l--;){const t=I(c,p,l),g=o(t);let i=f.get(g);i?a&&C.push(()=>i.p(t,n)):(i=D(g,t),i.c()),y.set(g,u[l]=i),g in m&&w.set(g,Math.abs(l-m[g]))}const J=new Set,M=new Set;function S(t){R(t,1),t.m(U,h),f.set(t.key,t),h=t.first,d--}for(;r&&d;){const t=u[d-1],g=e[r-1],i=t.key,v=g.key;t===g?(h=t.first,r--,d--):y.has(v)?!f.has(i)||J.has(i)?S(t):M.has(v)?r--:w.get(i)>w.get(v)?(M.add(i),S(t)):(J.add(v),r--):(A(g,f),r--)}for(;r--;){const t=e[r];y.has(t.key)||A(t,f)}for(;d;)S(u[d-1]);return B(C),u}const P="@riadh-adrani-theme",G=e=>{localStorage.setItem(P,JSON.stringify(e))},j=H(!1),k=e=>j.update(n=>{var a;const o=typeof e=="boolean"?e:!n;return G(o),(a=document.querySelector(":root"))==null||a.setAttribute("data-theme",o?"dark":"light"),o}),ts=()=>{const e=localStorage.getItem(P);e?k(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?k(!0):k(!1)},b=e=>`${W}/logos/${e}`,s=(e,n)=>n?{dark:b(n),light:b(e)}:b(e),as={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastAPI:s("fastapi.svg"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Swift:s("swift.svg"),MATLAB:s("matlab.png"),MySQL:s("mysql.svg"),Snowflake:s("snowflake.png"),PHP:s("php.png"),Terraform:s("terraform.svg"),Datadog:s("datadog.png"),Unity:s("unity.svg"),Linux:s("linux.png"),Git:s("git.png"),Jira:s("jira.svg"),Confluence:s("confluence.png"),PyCharm:s("pycharm.png"),VSCode:s("vscode.svg"),ECS:s("ecs.png"),Fargate:s("fargate.png"),Xcode:s("xcode.png"),SocketIO:s("socketio.png"),Apache:s("apache.png"),CertiK:s("certik.png"),WashU:s("washu.png"),UNNC:s("unnc.png"),OneMillion:s("onemillion.png"),Trashman:s("dragon.png"),ToDue:s("todue.png"),OnlineCalendar:s("calendar.png"),NewsWebsite:s("news.png"),ChatRoom:s("chatroom.png"),Blog_0:s("blog_0.png"),Blog_1:s("blog_1.png")};let T;j.subscribe(e=>T=e);const os=e=>(console.log("asset",e),typeof e=="string"?e:T?e.dark:e.light);function X(e){let n,o;return{c(){n=O("i"),this.h()},l(a){n=K(a,"I",{class:!0}),Q(n).forEach(N),this.h()},h(){_(n,"class",o=`${e[0]} ${e[1]}`)},m(a,c){V(a,n,c)},p(a,[c]){c&3&&o!==(o=`${a[0]} ${a[1]}`)&&_(n,"class",o)},i:x,o:x,d(a){a&&N(n)}}}function z(e,n,o){let{icon:a=void 0}=n,{classes:c=""}=n;return e.$$set=p=>{"icon"in p&&o(0,a=p.icon),"classes"in p&&o(1,c=p.classes)},[a,c]}class gs extends F{constructor(n){super(),q(this,n,z,X,E,{icon:0,classes:1})}}export{as as A,gs as U,k as a,es as b,ss as e,os as g,ts as o,j as t,ns as u};