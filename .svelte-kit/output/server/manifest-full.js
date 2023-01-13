export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","Pseudocode-Guide-J277/00.jpg","Pseudocode-Guide-J277/01.jpg","Pseudocode-Guide-J277/02.jpg","Pseudocode-Guide-J277/03.jpg","Pseudocode-Guide-J277/04.jpg","Pseudocode-Guide-J277/05.jpg","Pseudocode-Guide-J277/06.jpg","Web capture_17-10-2022_05026_berkay-yalin.github.io.jpeg","Web capture_17-10-2022_05345_berkay-yalin.github.io.jpeg","devicon/c-original.svg","devicon/css3-original.svg","devicon/flask-original.svg","devicon/github-original.svg","devicon/html5-original.svg","devicon/javascript-original.svg","devicon/lua-original.svg","devicon/python-original.svg","devicon/sass-original.svg","devicon/sqlite-original.svg","devicon/svelte-original.svg","devicon/typescript-original.svg","favicon.ico","fonts/Cabin-VariableFont_wdth,wght.ttf","fonts/RobotoMono-VariableFont_wght.ttf","fonts/Segoe-UI.ttf","ocr-logo.svg","profile-details.svg","s/pythonInterpreter.css","s/pythonInterpreter.html","s/pythonInterpreter.js"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".css":"text/css",".html":"text/html",".js":"application/javascript"},
	_: {
		entry: {"file":"_app/immutable/start-da1c4d8d.js","imports":["_app/immutable/start-da1c4d8d.js","_app/immutable/chunks/index-28fc0cfa.js","_app/immutable/chunks/singletons-ddd121e8.js","_app/immutable/chunks/index-510c38f7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/(index)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(index)/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(index)/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/pseudocode2python",
				pattern: /^\/pseudocode2python\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
