exports.id=457,exports.ids=[457],exports.modules={1064:(e,t,r)=>{function i(e){for(let t in e)void 0===e[t]&&delete e[t];return e}function n(e,t,r){var n;if("string"==typeof t){let[e,i]=t.split(" ");r=Object.assign(i?{method:e,url:i}:{url:e},r)}else r=Object.assign({},t);r.headers=(n=r.headers)?Object.keys(n).reduce((e,t)=>(e[t.toLowerCase()]=n[t],e),{}):{},i(r),i(r.headers);let o=function e(t,r){let i=Object.assign({},t);return Object.keys(r).forEach(n=>{(function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(r[n])&&n in t?i[n]=e(t[n],r[n]):Object.assign(i,{[n]:r[n]})}),i}(e||{},r);return"/graphql"===r.url&&(e&&e.mediaType.previews?.length&&(o.mediaType.previews=e.mediaType.previews.filter(e=>!o.mediaType.previews.includes(e)).concat(o.mediaType.previews)),o.mediaType.previews=(o.mediaType.previews||[]).map(e=>e.replace(/-preview/,""))),o}r.r(t),r.d(t,{GitHubApi:()=>et});let o=/\{[^}]+\}/g;function a(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function s(e,t){let r={__proto__:null};for(let i of Object.keys(e))-1===t.indexOf(i)&&(r[i]=e[i]);return r}function l(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function u(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e,t,r){return(t="+"===e||"#"===e?l(t):u(t),r)?u(r)+"="+t:t}function h(e){return null!=e}function m(e){return";"===e||"&"===e||"?"===e}function d(e,t){var r=["+","#",".","/",";","?","&"];return"/"===(e=e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(e,i,n){if(!i)return l(n);{let e="",n=[];if(-1!==r.indexOf(i.charAt(0))&&(e=i.charAt(0),i=i.substr(1)),i.split(/,/g).forEach(function(r){var i=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);n.push(function(e,t,r,i){var n=e[r],o=[];if(h(n)&&""!==n){if("string"==typeof n||"number"==typeof n||"boolean"==typeof n)n=n.toString(),i&&"*"!==i&&(n=n.substring(0,parseInt(i,10))),o.push(c(t,n,m(t)?r:""));else if("*"===i)Array.isArray(n)?n.filter(h).forEach(function(e){o.push(c(t,e,m(t)?r:""))}):Object.keys(n).forEach(function(e){h(n[e])&&o.push(c(t,n[e],e))});else{let e=[];Array.isArray(n)?n.filter(h).forEach(function(r){e.push(c(t,r))}):Object.keys(n).forEach(function(r){h(n[r])&&(e.push(u(r)),e.push(c(t,n[r].toString())))}),m(t)?o.push(u(r)+"="+e.join(",")):0!==e.length&&o.push(e.join(","))}}else";"===t?h(n)&&o.push(u(r)):""===n&&("&"===t||"?"===t)?o.push(u(r)+"="):""===n&&o.push("");return o}(t,e,i[1],i[2]||i[3]))}),!e||"+"===e)return n.join(",");var o=",";return"?"===e?o="&":"#"!==e&&(o=e),(0!==n.length?e:"")+n.join(o)}}))?e:e.replace(/\/$/,"")}function p(e){let t,r=e.method.toUpperCase(),i=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),n=Object.assign({},e.headers),l=s(e,["method","baseUrl","url","headers","request","mediaType"]),u=function(e){let t=e.match(o);return t?t.map(a).reduce((e,t)=>e.concat(t),[]):[]}(i);i=({expand:d.bind(null,i)}).expand(l),/^http/.test(i)||(i=e.baseUrl+i);let c=s(l,Object.keys(e).filter(e=>u.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(n.accept)&&(e.mediaType.format&&(n.accept=n.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),i.endsWith("/graphql")&&e.mediaType.previews?.length)){let t=n.accept.match(/[\w-]+(?=-preview)/g)||[];n.accept=t.concat(e.mediaType.previews).map(t=>{let r=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${t}-preview${r}`}).join(",")}return["GET","HEAD"].includes(r)?i=function(e,t){let r=/\?/.test(e)?"&":"?",i=Object.keys(t);return 0===i.length?e:e+r+i.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(i,c):"data"in c?t=c.data:Object.keys(c).length&&(t=c),n["content-type"]||void 0===t||(n["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:i,headers:n},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function g(e,t,r){return p(n(e,t,r))}function f(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&void 0!==process.version?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}let y=function e(t,r){let i=n(t,r);return Object.assign(g.bind(null,i),{DEFAULTS:i,defaults:e.bind(null,i),merge:n.bind(null,i),parse:p})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":`octokit-endpoint.js/9.0.4 ${f()}`},mediaType:{format:""}});class w extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}var v=r(778),b=r.n(v);let C=b()(e=>console.warn(e)),$=b()(e=>console.warn(e));class R extends Error{constructor(e,t,r){let i;super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,"headers"in r&&void 0!==r.headers&&(i=r.headers),"response"in r&&(this.response=r.response,i=r.response.headers);let n=Object.assign({},r.request);r.request.headers.authorization&&(n.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n,Object.defineProperty(this,"code",{get:()=>(C(new w("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t)}),Object.defineProperty(this,"headers",{get:()=>($(new w("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),i||{})})}}function S(e){let t,r;let i=e.request&&e.request.log?e.request.log:console,n=e.request?.parseSuccessResponseBody!==!1;((function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let o={},{fetch:a}=globalThis;if(e.request?.fetch&&(a=e.request.fetch),!a)throw Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");return a(e.url,{method:e.method,body:e.body,headers:e.headers,signal:e.request?.signal,...e.body&&{duplex:"half"}}).then(async a=>{for(let e of(r=a.url,t=a.status,a.headers))o[e[0]]=e[1];if("deprecation"in o){let t=o.link&&o.link.match(/<([^>]+)>; rel="deprecation"/),r=t&&t.pop();i.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${o.sunset}${r?`. See ${r}`:""}`)}if(204!==t&&205!==t){if("HEAD"===e.method){if(t<400)return;throw new R(a.statusText,t,{response:{url:r,status:t,headers:o,data:void 0},request:e})}if(304===t)throw new R("Not modified",t,{response:{url:r,status:t,headers:o,data:await U(a)},request:e});if(t>=400){let i=await U(a);throw new R("string"==typeof i?i:"message"in i?Array.isArray(i.errors)?`${i.message}: ${i.errors.map(JSON.stringify).join(", ")}`:i.message:`Unknown error: ${JSON.stringify(i)}`,t,{response:{url:r,status:t,headers:o,data:i},request:e})}return n?await U(a):a.body}}).then(e=>({status:t,url:r,headers:o,data:e})).catch(t=>{if(t instanceof R||"AbortError"===t.name)throw t;let r=t.message;throw"TypeError"===t.name&&"cause"in t&&(t.cause instanceof Error?r=t.cause.message:"string"==typeof t.cause&&(r=t.cause)),new R(r,500,{request:e})})}async function U(e){let t=e.headers.get("content-type");return/application\/json/.test(t)?e.json().catch(()=>e.text()).catch(()=>""):!t||/^text\/|charset=utf-8$/.test(t)?e.text():e.arrayBuffer()}let D=function e(t,r){let i=t.defaults(r);return Object.assign(function(t,r){let n=i.merge(t,r);if(!n.request||!n.request.hook)return S(i.parse(n));let o=(e,t)=>S(i.parse(i.merge(e,t)));return Object.assign(o,{endpoint:i,defaults:e.bind(null,i)}),n.request.hook(o,n)},{endpoint:i,defaults:e.bind(null,i)})}(y,{headers:{"user-agent":`octokit-request.js/8.1.6 ${f()}`}});var q=class extends Error{constructor(e,t,r){super(`Request failed due to following response errors:
`+r.errors.map(e=>` - ${e.message}`).join("\n")),this.request=e,this.headers=t,this.response=r,this.name="GraphqlResponseError",this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},F=["method","baseUrl","url","headers","request","query","mediaType"],M=["query","method","url"],E=/\/api\/v3\/?$/,P=function e(t,r){let i=t.defaults(r);return Object.assign((e,t)=>(function(e,t,r){if(r){if("string"==typeof t&&"query"in r)return Promise.reject(Error('[@octokit/graphql] "query" cannot be used as variable name'));for(let e in r)if(M.includes(e))return Promise.reject(Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))}let i="string"==typeof t?Object.assign({query:t},r):t,n=Object.keys(i).reduce((e,t)=>(F.includes(t)?e[t]=i[t]:(e.variables||(e.variables={}),e.variables[t]=i[t]),e),{}),o=i.baseUrl||e.endpoint.DEFAULTS.baseUrl;return E.test(o)&&(n.url=o.replace(E,"/api/graphql")),e(n).then(e=>{if(e.data.errors){let t={};for(let r of Object.keys(e.headers))t[r]=e.headers[r];throw new q(n,t,e.data)}return e.data.data})})(i,e,t),{defaults:e.bind(null,i),endpoint:i.endpoint})}(D,{headers:{"user-agent":`octokit-graphql.js/7.0.2 ${f()}`},method:"POST",url:"/graphql"}),x=r(9496),k=r(1177),T=r(7338),A=r(4575),_=r(4321),I=r(2075),H=r(7925),B=r(2800),O=r(5148),j=r(4241),N=r(4336),L=r(6004),G=r(6398),Y=r(4627),V=r(4550),W=r(998),z=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,J=(e,t,r,i)=>{for(var n,o=i>1?void 0:i?Q(t,r):t,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i?n(t,r,o):n(o))||o);return i&&o&&z(t,r,o),o};let X=Object.freeze({values:[]}),K=Object.freeze({ranges:[]}),Z=`
assignees(first: 10) {
	nodes {
		login
		avatarUrl
		url
	}
}
author {
	login
	avatarUrl
	url
}
baseRefName
baseRefOid
baseRepository {
	name
	owner {
		login
	}
	url
}
checksUrl
isDraft
isCrossRepository
isReadByViewer
headRefName
headRefOid
headRepository {
	name
	owner {
		login
	}
	url
}
permalink
id
number
title
state
additions
deletions
updatedAt
closedAt
mergeable
mergedAt
mergedBy {
	login
}
repository {
	isFork
	owner {
		login
	}
}
reviewDecision
reviewRequests(first: 10) {
	nodes {
		asCodeOwner
		id
		requestedReviewer {
			... on User {
				login
				avatarUrl
				url
			}
		}
	}
}
totalCommentsCount
`,ee=`
... on Issue {
	assignees(first: 100) {
		nodes {
			login
			url
			avatarUrl
		}
	}
	author {
		login
		avatarUrl
		url
	}
	comments {
	  totalCount
	}
	id
	number
	title
	url
	createdAt
	closedAt
	closed
	updatedAt
	labels(first: 20) {
		nodes {
			color
			name
		}
	}
	reactions(content: THUMBS_UP) {
	  totalCount
	}
	repository {
		name
		owner {
			login
		}
	}
}
`;class et{_onDidReauthenticate=new x.EventEmitter;get onDidReauthenticate(){return this._onDidReauthenticate.event}_disposable;constructor(e){this._disposable=O.D.onDidChangeAny(e=>{(O.D.changedAny(e,["http.proxy","http.proxyStrictSSL"])||O.D.changed(e,["outputLevel","proxy"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._proxyAgent=null,this._defaults.clear(),this._enterpriseVersions.clear()}_proxyAgent=null;get proxyAgent(){if(!T.$L)return null===this._proxyAgent&&(this._proxyAgent=(0,k.Nx)()),this._proxyAgent}async getAccountForCommit(e,t,r,i,n,o){let a=(0,L.UH)();try{let s=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
				}
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...o,owner:r,repo:i,ref:n},a),u=l?.repository?.object?.author;if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||er(o)?u.avatarUrl??void 0:u.email&&o?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,o.baseUrl,u.email,o.avatarSize):void 0}}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,a)}}async getAccountForEmail(e,t,r,i,n,o){let a=(0,L.UH)();try{let s=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...o,owner:r,repo:i,emailQuery:`in:email ${n}`},a),u=l?.search?.nodes?.[0];if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||er(o)?u.avatarUrl??void 0:u.email&&o?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,o.baseUrl,u.email,o.avatarSize):void 0}}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,a)}}async getDefaultBranch(e,t,r,i,n){let o=(0,L.UH)();try{let a=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,s=await this.graphql(e,t,a,{...n,owner:r,repo:i},o),l=s?.repository?.defaultBranchRef?.name??void 0;if(null==l)return;return{provider:e,name:l}}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,o)}}async getIssueOrPullRequest(e,t,r,i,n,o){let a=(0,L.UH)();try{let s=`query getIssueOrPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
) {
	repository(name: $repo, owner: $owner) {
		issueOrPullRequest(number: $number) {
			__typename
			... on Issue {
				createdAt
				closed
				closedAt
				id
				title
				url
				state
			}
			... on PullRequest {
				createdAt
				closed
				closedAt
				id
				title
				url
				state
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...o,owner:r,repo:i,number:n},a),u=l?.repository?.issueOrPullRequest;if(null==u)return;return{provider:e,type:u.type,id:String(n),nodeId:u.id,date:new Date(u.createdAt),title:u.title,closed:u.closed,closedDate:null==u.closedAt?void 0:new Date(u.closedAt),url:u.url,state:(0,W.fromGitHubPullRequestState)(u.state)}}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,a)}}async getPullRequestForBranch(e,t,r,i,n,o){let a=(0,L.UH)();try{let s=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		ref(qualifiedName: $branch) {
			associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
				nodes {
					author {
						login
						avatarUrl(size: $avatarSize)
						url
					}
					permalink
					number
					title
					state
					updatedAt
					closedAt
					mergedAt
					repository {
						isFork
						owner {
							login
						}
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,t,s,{...o,owner:r,repo:i,branch:`refs/heads/${n}`,limit:10},a),u=l?.repository?.ref?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==u||0===u.length)return;return u.length>1&&u.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("OPEN"===e.state?-1:1)-("OPEN"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,W.fromGitHubPullRequest)(u[0],e)}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,a)}}async getPullRequestForCommit(e,t,r,i,n,o,a){let s=(0,L.UH)();try{let l=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,u=await this.graphql(e,t,l,{...o,owner:r,repo:i,ref:n},s,a),c=u?.repository?.object?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==c||0===c.length)return;return c.length>1&&c.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("MERGED"===e.state?-1:1)-("MERGED"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,W.fromGitHubPullRequest)(c[0],e)}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,s)}}async getRepositoryMetadata(e,t,r,i,n,o){let a=(0,L.UH)();try{let s=`query getRepositoryMetadata(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		owner {
			login
		}
		name
		parent {
			owner {
				login
			}
			name
		}
	}
}`,l=await this.graphql(e,t,s,{...n,owner:r,repo:i},a,o),u=l?.repository??void 0;if(null==u)return;return{provider:e,owner:u.owner.login,name:u.name,isFork:null!=u.parent,parent:null!=u.parent?{owner:u.parent.owner.login,name:u.parent.name}:void 0}}catch(t){if(t instanceof A.Ww)return;throw this.handleException(t,e,a)}}async getBlame(e,t,r,i,n){let o=(0,L.UH)();try{let a=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,path:n},o);if(null==s)return K;let l=s.repository?.object?.blame?.ranges;if(null==l||0===l.length)return{ranges:[],viewer:s.viewer?.name};return{ranges:l,viewer:s.viewer?.name}}catch(e){if(e instanceof A.Ww)return K;throw this.handleException(e,void 0,o)}}async getBranches(e,t,r,i){let n=(0,L.UH)();try{let o=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,branchQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},n);if(null==a)return X;let s=a.repository?.refs;if(null==s)return X;return{paging:{cursor:s.pageInfo.endCursor,more:s.pageInfo.hasNextPage},values:s.nodes}}catch(e){if(e instanceof A.Ww)return X;throw this.handleException(e,void 0,n)}}async getCommit(e,t,r,i){let n=(0,L.UH)();try{let o=await this.request(void 0,e,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:t,repo:r,ref:i},n),a=o?.data;if(null==a)return;let{commit:s}=a;return{oid:a.sha,parents:{nodes:a.parents.map(e=>({oid:e.sha}))},message:s.message,additions:a.stats?.additions,changedFiles:a.files?.length,deletions:a.stats?.deletions,author:{avatarUrl:a.author?.avatar_url??void 0,date:s.author?.date??new Date().toString(),email:s.author?.email??void 0,name:s.author?.name??""},committer:{date:s.committer?.date??new Date().toString(),email:s.committer?.email??void 0,name:s.committer?.name??""},files:a.files}}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,n)}}async getCommitForFile(e,t,r,i,n){if((0,_.D3)(i))return this.getCommit(e,t,r,i);let o=await this.getCommits(e,t,r,i,{limit:1,path:n});if(0!==o.values.length)return{...await this.getCommit(e,t,r,o.values[0].oid)??o.values[0],viewer:o.viewer}}async getCommitBranches(e,t,r,i,n){let o=(0,L.UH)();try{let a=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,since:n.toISOString(),until:n.toISOString()},o),l=s?.repository?.refs?.nodes;if(null==l)return[];let u=[];for(let e of l)for(let t of e.target.history.nodes)if(t.oid===i){u.push(e.name);break}return u}catch(e){if(e instanceof A.Ww)return[];throw this.handleException(e,void 0,o)}}async getCommitCount(e,t,r,i){let n=(0,L.UH)();try{let o=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i},n);return a?.repository?.ref?.target.history.totalCount}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,n)}}async getCommitOnBranch(e,t,r,i,n,o){let a=(0,L.UH)();try{let s=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 3, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,l=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:`refs/heads/${i}`,since:o.toISOString(),until:o.toISOString()},a),u=l?.repository?.ref.target.history.nodes;if(null==u)return[];let c=[];for(let e of u)if(e.oid===n){c.push(i);break}return c}catch(e){if(e instanceof A.Ww)return[];throw this.handleException(e,void 0,a)}}async getCommits(e,t,r,i,n){let o=(0,L.UH)();if(n?.limit===1&&n?.path==null)return this.getCommitsCoreSingle(e,t,r,i);try{let a;let s=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;if(n?.authors!=null){if(1===n.authors.length){let[e]=n.authors;a={id:e.id,emails:e.email?[e.email]:void 0}}else{let e=n.authors.filter(e=>e.email).map(e=>e.email);a=e.length?{emails:e}:void 0}}let l=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i,after:n?.after,before:n?.before,path:n?.path,author:a,limit:Math.min(100,n?.limit??100),since:"string"==typeof n?.since?n?.since:n?.since?.toISOString(),until:"string"==typeof n?.until?n?.until:n?.until?.toISOString()},o),u=l?.repository?.object?.history;if(null==u)return X;return{paging:null!=u.pageInfo.endCursor?{cursor:u.pageInfo.endCursor??void 0,more:u.pageInfo.hasNextPage}:void 0,values:u.nodes,viewer:l?.viewer.name}}catch(e){if(e instanceof A.Ww)return X;throw this.handleException(e,void 0,o)}}async getCommitsCoreSingle(e,t,r,i){let n=(0,L.UH)();try{let o=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i},n);if(null==a)return X;let s=a.repository?.object;return null!=s?{values:[s],viewer:a.viewer.name}:X}catch(e){if(e instanceof A.Ww)return X;throw this.handleException(e,void 0,n)}}async getCommitRefs(e,t,r,i,n){let o=(0,L.UH)();try{let a=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,path:n?.path,first:n?.first,last:n?.last,after:n?.after,before:n?.before,since:n?.since,until:n?.until},o),l=s?.repository?.object?.history;if(null==l)return;return{pageInfo:l.pageInfo,totalCount:l.totalCount,values:l.nodes}}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,o)}}async getCommitTags(e,t,r,i,n){let o=(0,L.UH)();try{let a=`query getCommitTags(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/tags/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,since:n.toISOString(),until:n.toISOString()},o),l=s?.repository?.refs?.nodes;if(null==l)return[];let u=[];for(let e of l)for(let t of e.target.history.nodes)if(t.oid===i){u.push(e.name);break}return u}catch(e){if(e instanceof A.Ww)return[];throw this.handleException(e,void 0,o)}}async getNextCommitRefs(e,t,r,i,n,o){let a;let s=await this.getCommitDate(e,t,r,o);if(null==s)return[];let l=await this.getCommitRefs(e,t,r,i,{path:n,first:1,since:s});if(null==l)return[];let u=`${l.pageInfo.startCursor.split(" ",1)[0]} ${l.totalCount}`;if([,a]=u.split(" ",2),a=Math.min(parseInt(a,10),5),null==(l=await this.getCommitRefs(e,t,r,i,{path:n,last:a,before:u})))return[];let c=[];for(let{oid:e}of l.values){if(e===o)break;c.push(e)}return c.reverse()}async getCommitDate(e,t,r,i){let n=(0,L.UH)();try{let o=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,sha:i},n);return a?.repository?.object?.committer.date}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,n)}}async getContributors(e,t,r){let i=(0,L.UH)();try{let n=await this.request(void 0,e,"GET /repos/{owner}/{repo}/contributors",{owner:t,repo:r,per_page:100},i),o=n?.data;if(null==o)return[];return n.data}catch(e){if(e instanceof A.Ww)return[];throw this.handleException(e,void 0,i)}}async getDefaultBranchName(e,t,r){let i=(0,L.UH)();try{let n=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r},i);if(null==o)return;return o.repository?.defaultBranchRef?.name??void 0}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,i)}}async getCurrentUser(e,t,r){let i=(0,L.UH)();try{let n=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r},i);if(null==o)return;return{name:o.viewer?.name,email:o.viewer?.email,username:o.viewer?.login,id:o.viewer?.id}}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,i)}}async getRepositoryVisibility(e,t,r){let i=(0,L.UH)();try{let n=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r},i);if(o?.repository?.visibility==null)return;return"PUBLIC"===o.repository.visibility?"public":"private"}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,i)}}async getTags(e,t,r,i){let n=(0,L.UH)();try{let o=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Tag {
						message
						tagger { date }
						target {
					...on Commit {
								oid
						authoredDate
						committedDate
						message
					}
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,tagQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},n);if(null==a)return X;let s=a.repository?.refs;if(null==s)return X;return{paging:{cursor:s.pageInfo.endCursor,more:s.pageInfo.hasNextPage},values:s.nodes}}catch(e){if(e instanceof A.Ww)return X;throw this.handleException(e,void 0,n)}}async resolveReference(e,t,r,i,n){let o=(0,L.UH)();try{if(!n){let n=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},o);return a?.repository?.object?.oid??void 0}let a=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,path:n},o);return s?.repository?.object?.history.nodes?.[0]?.oid??void 0}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,o)}}async searchCommits(e,t,r){let i,n,o;let a=(0,L.UH)(),s=Math.min(100,r?.limit??100);r?.cursor!=null?([i,n,o]=r.cursor.split(" ",3),i=parseInt(i,10),n=parseInt(n,10),o=parseInt(o,10)):(i=1,n=s,o=0);try{let s=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:n,page:i},a),l=s?.data;if(null==l||0===l.items.length)return;let u=l.items.map(e=>({oid:e.sha,parents:{nodes:e.parents.map(e=>({oid:e.sha}))},message:e.commit.message,author:{avatarUrl:e.author?.avatar_url??void 0,date:e.commit.author?.date??e.commit.author?.date??new Date().toString(),email:e.author?.email??e.commit.author?.email??void 0,name:e.author?.name??e.commit.author?.name??""},committer:{date:e.commit.committer?.date??e.committer?.date??new Date().toString(),email:e.committer?.email??e.commit.committer?.email??void 0,name:e.committer?.name??e.commit.committer?.name??""}})),c=o+l.items.length,h=l.incomplete_results||l.total_count>c;return{pageInfo:{startCursor:`${i} ${n} ${o}`,endCursor:h?`${i+1} ${n} ${c}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:h},totalCount:l.total_count,values:u}}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,a)}}async searchCommitShas(e,t,r){let i,n,o;let a=(0,L.UH)(),s=Math.min(100,r?.limit??100);r?.cursor!=null?([i,n,o]=r.cursor.split(" ",3),i=parseInt(i,10),n=parseInt(n,10),o=parseInt(o,10)):(i=1,n=s,o=0);try{let s=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:n,page:i},a),l=s?.data;if(null==l||0===l.items.length)return;let u=o+l.items.length,c=l.incomplete_results||l.total_count>u;return{pageInfo:{startCursor:`${i} ${n} ${o}`,endCursor:c?`${i+1} ${n} ${u}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:c},totalCount:l.total_count,values:l.items.map(e=>({sha:e.sha,authorDate:new Date(e.commit.author.date).getTime(),committerDate:new Date(e.commit.committer?.date??e.commit.author.date).getTime()}))}}catch(e){if(e instanceof A.Ww)return;throw this.handleException(e,void 0,a)}}_enterpriseVersions=new Map;async getEnterpriseVersion(e,t,r){let i=this._enterpriseVersions.get(t);if(null!=i)return i;if(null===i)return;let n=(0,L.UH)();try{let o=await this.request(e,t,"GET /meta",r,n),a=o?.data?.installed_version;i=a?(0,V.mL)(a):null}catch(e){i=null}return this._enterpriseVersions.set(t,i),i??void 0}async graphql(e,t,r,i,n,o){try{let n;if(null!=o){if(o.isCancellationRequested)throw new A.FU;n=new AbortController,o.onCancellationRequested(()=>n.abort()),i={...i,request:{...i?.request,signal:n.signal}}}return await (0,k.a_)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,P)(r,i))}catch(r){if(r instanceof q){switch(r.errors?.[0]?.type){case"NOT_FOUND":throw new A.Ww(r);case"FORBIDDEN":throw new A._7("github",A.Jx.Forbidden,r);case"RATE_LIMITED":{let e;let i=r.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new A.yx(r,t,e)}}N.Yd.isDebugging&&x.window.showErrorMessage(`GitHub request failed: ${r.errors?.[0]?.message??r.message}`)}else r instanceof R||"AbortError"===r.name?this.handleRequestError(e,t,r,n):N.Yd.isDebugging&&x.window.showErrorMessage(`GitHub request failed: ${r.message}`);throw r}}async request(e,t,r,i,n,o){try{let n;if(null!=o){if(o.isCancellationRequested)throw new A.FU;n=new AbortController,o.onCancellationRequested(()=>n.abort()),i={...i,request:{...i?.request,signal:n.signal}}}return await (0,k.a_)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,D)(r,i))}catch(r){throw r instanceof R||"AbortError"===r.name?this.handleRequestError(e,t,r,n):N.Yd.isDebugging&&x.window.showErrorMessage(`GitHub request failed: ${r.message}`),r}}_defaults=new Map;getDefaults(e,t){let r=this._defaults.get(t);null==r&&(r=new Map,this._defaults.set(t,r));let i=r.get(e);return null==i&&(i=t.defaults({headers:{authorization:`token ${e}`},request:{agent:this.proxyAgent,fetch:T.$L?(e,t)=>{if(null!=t.headers){let{"user-agent":e,...r}=t.headers;e&&(t.headers=r)}return(0,k.he)(e,t)}:k.he,hook:"debug"===N.Yd.logLevel||N.Yd.isDebugging?async(e,t)=>{let r=(0,G.k)(`[GITHUB] ${t.method} ${t.url}`,{log:!1});try{return await e(t)}finally{let e;try{if("string"==typeof t.query){let r=/(^[^({\n]+)/.exec(t.query);e=` ${r?.[1].trim()??t.query}`}}catch{}r?.stop({message:e})}}:void 0}}),r.set(e,i)),i}handleRequestError(e,t,r,i){if("AbortError"===r.name)throw new A.FU(r);switch(r.status){case 404:case 410:case 422:throw new A.Ww(r);case 401:throw new A._7("github",A.Jx.Unauthorized,r);case 403:if(r.message.includes("rate limit")){let e;let i=r.response?.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new A.yx(r,t,e)}throw new A._7("github",A.Jx.Forbidden,r);case 500:N.Yd.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,H.vF)(`${e?.name??"GitHub"} failed to respond and might be experiencing issues.${null==e||"github"===e.id?" Please visit the [GitHub status page](https://githubstatus.com) for more information.":""}`));return;case 502:if(N.Yd.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,H.s$)(e?.name??"GitHub");return}break;default:if(r.status>=400&&r.status<500)throw new A.Bn(r)}N.Yd.error(r,i),N.Yd.isDebugging&&x.window.showErrorMessage(`GitHub request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return N.Yd.error(e,r),e instanceof A._7&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===A.Jx.Unauthorized||e.reason===A.Jx.Forbidden){let r="Reauthenticate";await x.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===A.Jx.Forbidden?" to provide additional access":""}?`,r)===r&&(await t?.reauthenticate(),this.resetCaches(),this._onDidReauthenticate.fire())}else x.window.showErrorMessage(e.message)}async createEnterpriseAvatarUrl(e,t,r,i,n){n=n??16;let o=await this.getEnterpriseVersion(e,t,{baseUrl:r});if((0,V.L5)(o,">= 3.0.0")){let o;let a=(0,I.a)(i);null!=a&&x.Uri.parse(r).authority===a.authority&&(null!=a.userId?o=`${r}/enterprise/avatars/u/${encodeURIComponent(a.userId)}?s=${n}`:null!=a.login&&(o=`${r}/enterprise/avatars/${encodeURIComponent(a.login)}?s=${n}`)),null==o&&(o=`${r}/enterprise/avatars/u/e?email=${encodeURIComponent(i)}&s=${n}`);let s=await (0,k.a_)(e?.getIgnoreSSLErrors()??!1,()=>(0,k.he)(o,{method:"GET",headers:{Authorization:`Bearer ${t}`}}));if(s.ok){let e=(0,Y.US)(new Uint8Array(await s.arrayBuffer())),t=s.headers.get("content-type");return`data:${t};base64,${e}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(i)}&s=${n}`}async searchMyPullRequests(e,t,r){let i=(0,L.UH)();try{let n=function(t,r){return{pullRequest:(0,W.fromGitHubPullRequestDetailed)(t,e),reasons:r?[r]:[]}},o=`query searchPullRequests(
	$authored: String!
	$assigned: String!
	$reviewRequested: String!
	$mentioned: String!
) {
	authored: search(first: 100, query: $authored, type: ISSUE) {
		nodes {
			...on PullRequest {
				${Z}
			}
		}
	}
	assigned: search(first: 100, query: $assigned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${Z}
			}
		}
	}
	reviewRequested: search(first: 100, query: $reviewRequested, type: ISSUE) {
		nodes {
			...on PullRequest {
				${Z}
			}
		}
	}
	mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${Z}
			}
		}
	}
}`,a=r?.search?.trim()??"";if(r?.user&&(a+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";a+=`${e}${r.repos.join(e)}`}let s="is:pr is:open archived:false",l=await this.graphql(e,t,o,{authored:`${a} ${s} author:@me`.trim(),assigned:`${a} ${s} assignee:@me`.trim(),reviewRequested:`${a} ${s} review-requested:@me`.trim(),mentioned:`${a} ${s} mentions:@me`.trim(),baseUrl:r?.baseUrl},i);if(void 0===l)return[];return ei([...l.assigned.nodes.map(e=>n(e,"assigned")),...l.reviewRequested.nodes.map(e=>n(e,"review-requested")),...l.mentioned.nodes.map(e=>n(e,"mentioned")),...l.authored.nodes.map(e=>n(e,"authored"))],e=>e.pullRequest.url)}catch(t){throw this.handleException(t,e,i)}}async searchMyIssues(e,t,r){let i=(0,L.UH)(),n=`query searchIssues(
				$authored: String!
				$assigned: String!
				$mentioned: String!
			) {
				authored: search(first: 100, query: $authored, type: ISSUE) {
					nodes {
						${ee}
					}
				}
				assigned: search(first: 100, query: $assigned, type: ISSUE) {
					nodes {
						${ee}
					}
				}
				mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
					nodes {
						${ee}
					}
				}
			}`,o=r?.search?.trim()??"";if(r?.user&&(o+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";o+=`${e}${r.repos.join(e)}`}let a="type:issue is:open archived:false";try{let s=function(t,r){return{issue:(0,W.fromGitHubIssueDetailed)(t,e),reasons:r?[r]:[]}},l=await this.graphql(e,t,n,{authored:`${o} ${a} author:@me`.trim(),assigned:`${o} ${a} assignee:@me`.trim(),mentioned:`${o} ${a} mentions:@me`.trim(),baseUrl:r?.baseUrl},i);if(void 0===l)return[];return ei([...l.assigned.nodes.map(e=>s(e,"assigned")),...l.mentioned.nodes.map(e=>s(e,"mentioned")),...l.authored.nodes.map(e=>s(e,"authored"))],e=>e.issue.url)}catch(t){throw this.handleException(t,e,i)}}}function er(e){return e?.baseUrl==null||"https://api.github.com"===e.baseUrl}function ei(e,t){return(0,B.uw)(e,t,(e,t)=>(0!==t.reasons.length&&e.reasons.push(...t.reasons),e))}J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getAccountForCommit",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getAccountForEmail",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getDefaultBranch",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getIssueOrPullRequest",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getPullRequestForBranch",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getPullRequestForCommit",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"getRepositoryMetadata",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getBlame",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getBranches",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommit",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommitForFile",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommitBranches",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommitCount",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommitOnBranch",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommits",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommitRefs",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCommitTags",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getNextCommitRefs",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getContributors",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getDefaultBranchName",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getCurrentUser",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getRepositoryVisibility",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"getTags",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"resolveReference",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"searchCommits",1),J([(0,j.fF)({args:{0:"<token>"}})],et.prototype,"searchCommitShas",1),J([(0,j.fF)({args:{0:e=>e?.name,1:"<token>"}})],et.prototype,"getEnterpriseVersion",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"searchMyPullRequests",1),J([(0,j.fF)({args:{0:e=>e.name,1:"<token>"}})],et.prototype,"searchMyIssues",1)},997:(e,t,r)=>{r.r(t),r.d(t,{GitHubGitProvider:()=>J});var i,n,o=r(9496),a=r(6150),s=r(5255),l=r(3148),u=r(4575),c=r(8887),h=r(6592),m=r(7462),d=r(5367),p=r(6450),g=r(439),f=r(1719),y=r(7881),w=r(4321),v=r(3050),b=r(3646),C=r(827),$=r(9502),R=r(3961),S=r(2500),U=r(6934),D=r(5148),q=r(2061),F=r(5432),M=r(4241),E=r(3105),P=r(4336),x=r(6004),k=r(3700),T=r(7469),A=r(9701),_=r(6700);async function I(e){try{let e=o.extensions.getExtension("ms-vscode.remote-repositories")??o.extensions.getExtension("GitHub.remotehub");if(null==e)throw P.Yd.log("GitHub Repositories extension is not installed or enabled"),new u.R5("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(t){if(P.Yd.error(t,"Unable to get required api from the GitHub Repositories extension"),u.R5,e)return;throw t}}var H=((i=H||{})[i.Branch=0]="Branch",i[i.RemoteBranch=1]="RemoteBranch",i[i.Tag=2]="Tag",i[i.Commit=3]="Commit",i),B=((n=B||{})[n.Branch=0]="Branch",n[n.Tag=1]="Tag",n[n.Commit=2]="Commit",n[n.PullRequest=3]="PullRequest",n[n.Tree=4]="Tree",n),O=r(998),j=Object.defineProperty,N=Object.getOwnPropertyDescriptor,L=(e,t,r,i)=>{for(var n,o=i>1?void 0:i?N(t,r):t,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i?n(t,r,o):n(o))||o);return i&&o&&j(t,r,o),o};let G=/"/g,Y=Object.freeze([]),V=Object.freeze({values:[]}),W=Promise.resolve(void 0),z=["repo","read:user","user:email"],Q=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;class J{constructor(e){this.container=e,this._disposables.push(this.container.events.on("git:cache:reset",e=>e.data.repoPath?this.resetCache(e.data.repoPath,...e.data.caches??Y):this.resetCaches(...e.data.caches??Y),o.authentication.onDidChangeSessions(this.onAuthenticationSessionsChanged,this)))}descriptor={id:"github",name:"GitHub",virtual:!0};supportedSchemes=new Set([s.sN.Virtual,s.sN.GitHub,s.sN.PRs]);_onDidChange=new o.EventEmitter;get onDidChange(){return this._onDidChange.event}_onDidChangeRepository=new o.EventEmitter;get onDidChangeRepository(){return this._onDidChangeRepository.event}_onDidCloseRepository=new o.EventEmitter;get onDidCloseRepository(){return this._onDidCloseRepository.event}_onDidOpenRepository=new o.EventEmitter;get onDidOpenRepository(){return this._onDidOpenRepository.event}_branchesCache=new Map;_repoInfoCache=new Map;_tagsCache=new Map;_disposables=[];dispose(){this._disposables.forEach(e=>void e.dispose())}onAuthenticationSessionsChanged(e){"github"===e.provider.id&&(this._sessionPromise=void 0,this.ensureSession(!1,!0))}onRepositoryChanged(e,t){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e,t){if(!this.supportedSchemes.has(e.scheme))return[];try{let{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),i=r.getVirtualWorkspaceUri(e);if(null==i)return[];return this.openRepository(void 0,i,!0,void 0,t?.silent)}catch(t){return t.message.startsWith("No provider registered with")&&(P.Yd.error(t,"No GitHub provider registered with Remote Repositories (yet); queuing pending discovery"),this._pendingDiscovery.add(e),this.ensurePendingRepositoryDiscovery()),[]}}_pendingDiscovery=new Set;_pendingTimer;ensurePendingRepositoryDiscovery(){null==this._pendingTimer&&0!==this._pendingDiscovery.size&&(this._pendingTimer=setTimeout(async()=>{try{let e=await I();for(let t of this._pendingDiscovery){if(null==e.getProvider(t)){this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery();return}this._pendingDiscovery.delete(t)}this._pendingTimer=void 0,setTimeout(()=>this._onDidChange.fire(),1),0!==this._pendingDiscovery.size&&this.ensurePendingRepositoryDiscovery()}catch{this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery()}},250))}updateContext(){(0,q.v)("gitlens:hasVirtualFolders",this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,i,n){return[new b._j(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e??o.workspace.getWorkspaceFolder(t),t,r,i??!o.window.state.focused,n)]}async supports(e){switch(e){case c.A.Stashes:case c.A.Worktrees:case c.A.StashOnlyStaged:return!1;default:return!0}}async visibility(e){let t=await this.getRemotes(e,{sort:!0});if(0===t.length)return["local",void 0];for await(let e of(0,T.rX)(t.map(e=>this.getRemoteVisibility(e))))if("fulfilled"===e.status&&"public"===e.value[0])return["public",(0,v.Ym)(e.value[1])];return["private",(0,v.Ym)(t)]}async getRemoteVisibility(e){if(e.provider?.id==="github"){let{github:t,metadata:r,session:i}=await this.ensureRepositoryContext(e.repoPath);return[await t.getRepositoryVisibility(i.accessToken,r.repo.owner,r.repo.name)??"private",e]}return["private",e]}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(this.supportedSchemes.has(e))return"string"==typeof t?t:t.toString()}getAbsoluteUri(e,t){if("string"==typeof t){if((0,k.tE)(t))t=o.Uri.parse(t,!0);else throw o.window.showErrorMessage(`Unable to get absolute uri between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e&&!(0,k.tE)(e)){let r=(0,k.AH)(e);if(!(0,k.YP)(r))return o.Uri.joinPath(t,r)}let r=this.getRelativePath(e,t);return o.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){let r;if("string"==typeof t){if((0,k.tE)(t))t=o.Uri.parse(t,!0);else throw o.window.showErrorMessage(`Unable to get relative path between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e){if(!(0,k.tE)(e))return e=(0,k.AH)(e),(r=(0,k.YP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e).charCodeAt(0)===s.mN.Slash&&(r=r.slice(1)),r;e=o.Uri.parse(e,!0)}return(0,k.AH)((0,k.Gf)(t.path.slice(1),e.path.slice(1)))}getRevisionUri(e,t,r){let i=this.createProviderUri(e,r,t);return r===g.Ii?i.with({query:"~"}):i}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async addRemote(e,t,r,i){}async pruneRemote(e,t){}async removeRemote(e,t){}async applyChangesToWorkingFile(e,t,r){}async branchContainsCommit(e,t,r){return!1}async checkout(e,t,r){}resetCache(e,...t){(0===t.length||t.includes("branches"))&&this._branchesCache.delete(e),(0===t.length||t.includes("tags"))&&this._tagsCache.delete(e),0===t.length&&this._repoInfoCache.delete(e)}resetCaches(...e){(0===e.length||e.includes("branches"))&&this._branchesCache.clear(),(0===e.length||e.includes("tags"))&&this._tagsCache.clear(),0===e.length&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async fetch(e,t){}async pull(e,t){}async push(e,t){}async findRepositoryUri(e,t){let r=(0,x.UH)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:s.sN.Virtual})}catch(e){u.R5,P.Yd.error(e,r);return}}async getAheadBehindCommitCount(e,t,r){}async getBlame(e,t){let r=(0,x.UH)();if(t?.isDirty)return;let i="blame";null!=e.sha&&(i+=`:${e.sha}`);let n=await this.container.tracker.getOrAdd(e);if(null!=n.state){let e=n.state.getBlame(i);if(null!=e)return P.Yd.debug(r,`Cache hit: '${i}'`),e.item}P.Yd.debug(r,`Cache miss: '${i}'`),null==n.state&&(n.state=new _.p);let o=this.getBlameCore(e,n,i,r);return null!=n.state&&(P.Yd.debug(r,`Cache add: '${i}'`),n.state.setBlame(i,{item:o})),o}async getBlameCore(e,t,r,i){try{let t=await this.ensureRepositoryContext(e.repoPath);if(null==t)return;let{metadata:r,github:i,remotehub:n,session:a}=t,l=n.getVirtualUri(n.getProviderRootUri(e)),u=this.getRelativePath(e,l);if(e.scheme===s.sN.Virtual){let[t,r]=await Promise.allSettled([o.workspace.fs.stat(e),o.workspace.fs.stat(e.with({scheme:s.sN.GitHub}))]);if("fulfilled"!==t.status||"fulfilled"!==r.status||t.value.mtime!==r.value.mtime)return}let c=e.sha&&"HEAD"!==e.sha?e.sha:(await r.getRevision()).revision,h=await i.getBlame(a.accessToken,r.repo.owner,r.repo.name,c,u),m=new Map,d=new Map,g=[];for(let t of h.ranges){let r=t.commit,{viewer:i=a.account.label}=h,n=null!=i&&r.author.name===i?"You":r.author.name,o=null!=i&&r.committer.name===i?"You":r.committer.name,s=m.get(n);null==s&&(s={name:n,lineCount:0},m.set(n,s)),s.lineCount+=t.endingLine-t.startingLine+1;let c=d.get(r.oid);null==c&&(c=new p.aM(this.container,e.repoPath,r.oid,new p._j(n,r.author.email,new Date(r.author.date),r.author.avatarUrl),new p._j(o,r.committer.email,new Date(r.author.date)),r.message.split("\n",1)[0],r.parents.nodes[0]?.oid?[r.parents.nodes[0]?.oid]:[],r.message,new y.K8(l.toString(),u,y.NV.Modified),{changedFiles:r.changedFiles??0,additions:r.additions??0,deletions:r.deletions??0},[]),d.set(r.oid,c));for(let e=t.startingLine;e<=t.endingLine;e++){let t={sha:r.oid,originalLine:e,line:e};c.lines.push(t),g[e-1]=t}}let f=new Map([...m.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:e.repoPath,authors:f,commits:d,lines:g}}catch(e){if(null!=t.state&&!String(e).includes("No provider registered with")){let n=e?.toString()??"";return P.Yd.debug(i,`Cache replace (with empty promise): '${r}'`),t.state.setBlame(r,{item:W,errorMessage:n}),t.setBlameFailure(e),W}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,i){let n=(0,x.UH)();if(!r?.isDirty){if(!i?.forceSingleLine){let r=await this.getBlame(e);if(null==r)return;let i=r.lines[t];if(null==i){if(r.lines.length!==t)return;i=r.lines[t-1]}let n=r.commits.get(i.sha);if(null==n)return;return{author:{...r.authors.get(n.author.name),lineCount:n.lines.length},commit:n,line:i}}try{let r=await this.ensureRepositoryContext(e.repoPath);if(null==r)return;let{metadata:i,github:n,remotehub:o,session:a}=r,s=o.getVirtualUri(o.getProviderRootUri(e)),l=this.getRelativePath(e,s),u=e.sha&&"HEAD"!==e.sha?e.sha:(await i.getRevision()).revision,c=await n.getBlame(a.accessToken,i.repo.owner,i.repo.name,u,l),h=t+1,m=c.ranges.find(e=>e.startingLine===h);if(null==m)return;let d=m.commit,{viewer:g=a.account.label}=c,f=null!=g&&d.author.name===g?"You":d.author.name,w=null!=g&&d.committer.name===g?"You":d.committer.name,v=new p.aM(this.container,e.repoPath,d.oid,new p._j(f,d.author.email,new Date(d.author.date),d.author.avatarUrl),new p._j(w,d.committer.email,new Date(d.author.date)),d.message.split("\n",1)[0],d.parents.nodes[0]?.oid?[d.parents.nodes[0]?.oid]:[],d.message,new y.K8(s.toString(),l,y.NV.Modified),{changedFiles:d.changedFiles??0,additions:d.additions??0,deletions:d.deletions??0},[]);for(let e=m.startingLine;e<=m.endingLine;e++){let t={sha:d.oid,originalLine:e,line:e};v.lines.push(t)}return{author:{name:f,lineCount:m.endingLine-m.startingLine+1},commit:v,line:{sha:d.oid,originalLine:m.startingLine,line:m.startingLine}}}catch(e){P.Yd.error(n,e);return}}}async getBlameForLineContents(e,t,r,i){}async getBlameForRange(e,t){let r=await this.getBlame(e);if(null!=r)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){let i=await this.getBlameContents(e,r);if(null!=i)return this.getBlameRange(i,e,t)}getBlameRange(e,t,r){if(0===e.lines.length||0===r.start.line&&r.end.line===e.lines.length-1)return{allLines:e.lines,...e};let i=e.lines.slice(r.start.line,r.end.line+1),n=new Set(i.map(e=>e.sha)),o=r.start.line+1,a=r.end.line+1,s=new Map,l=new Map;for(let t of e.commits.values()){if(!n.has(t.sha))continue;let e=t.with({lines:t.lines.filter(e=>e.line>=o&&e.line<=a)});l.set(t.sha,e);let r=s.get(e.author.name);null==r&&(r={name:e.author.name,lineCount:0},s.set(r.name,r)),r.lineCount+=e.lines.length}let u=new Map([...s.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:t.repoPath,authors:u,commits:l,lines:i,allLines:e.lines}}async getBranch(e){let{values:[t]}=await this.getBranches(e,{filter:e=>e.current});return t}async getBranches(e,t){if(null==e)return V;let r=(0,x.UH)(),i=t?.cursor?void 0:this._branchesCache.get(e);null==i&&(i=(async function(){try{let{metadata:r,github:i,session:n}=await this.ensureRepositoryContext(e),o=await r.getRevision(),a=0===o.type?o.name:void 0,s=[],l=t?.cursor,u=null==l;for(;;){let t=await i.getBranches(n.accessToken,r.repo.owner,r.repo.name,{cursor:l});for(let r of t.values){let t=new Date("author-date"===D.D.get("advanced.commitOrdering")?r.target.authoredDate:r.target.committedDate),i=r.target.oid;s.push(new d.XI(this.container,e,r.name,!1,r.name===a,t,i,{name:`origin/${r.name}`,missing:!1}),new d.XI(this.container,e,`origin/${r.name}`,!0,!1,t,i))}if(!t.paging?.more||!u)return{...t,values:s};l=t.paging.cursor}}catch(t){return P.Yd.error(t,r),this._branchesCache.delete(e),V}}).call(this),t?.cursor==null&&this._branchesCache.set(e,i));let n=await i;return t?.filter!=null&&(n={...n,values:n.values.filter(t.filter)}),t?.sort!=null&&(0,d.YF)(n.values,"boolean"==typeof t.sort?void 0:t.sort),n}async getChangedFilesCount(e,t){if(!t)return;let r=await this.getCommit(e,t);if(r?.stats==null)return;let{stats:i}=r,n=(0,p.By)(i.changedFiles);return{additions:i.additions,deletions:i.deletions,changedFiles:n}}async getCommit(e,t){if(null==e)return;let r=(0,x.UH)();try{let{metadata:r,github:i,session:n}=await this.ensureRepositoryContext(e),o=await i.getCommit(n.accessToken,r.repo.owner,r.repo.name,t);if(null==o)return;let{viewer:a=n.account.label}=o,s=null!=a&&o.author.name===a?"You":o.author.name,l=null!=a&&o.committer.name===a?"You":o.committer.name;return new p.aM(this.container,e,o.oid,new p._j(s,o.author.email,new Date(o.author.date),o.author.avatarUrl),new p._j(l,o.committer.email,new Date(o.committer.date)),o.message.split("\n",1)[0],o.parents.nodes.map(e=>e.oid),o.message,o.files?.map(t=>new y.K8(e,t.filename??"",O.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0}))??[],{changedFiles:o.changedFiles??0,additions:o.additions??0,deletions:o.deletions??0},[])}catch(e){P.Yd.error(e,r);return}}async getCommitBranches(e,t,r,i){if(null==e||i?.commitDate==null)return[];let n=(0,x.UH)();try{let{metadata:n,github:o,session:a}=await this.ensureRepositoryContext(e);return r?await o.getCommitOnBranch(a.accessToken,n.repo.owner,n.repo.name,r,t,i?.commitDate):await o.getCommitBranches(a.accessToken,n.repo.owner,n.repo.name,t,i?.commitDate)}catch(e){return P.Yd.error(e,n),[]}}async getCommitCount(e,t){if(null==e)return;let r=(0,x.UH)();try{let{metadata:r,github:i,session:n}=await this.ensureRepositoryContext(e);return await i.getCommitCount(n?.accessToken,r.repo.owner,r.repo.name,t)}catch(e){P.Yd.error(e,r);return}}async getCommitForFile(e,t,r){if(null==e)return;let i=(0,x.UH)();try{let{metadata:i,github:n,remotehub:o,session:a}=await this.ensureRepositoryContext(e),s=this.getRelativePath(t,o.getProviderRootUri(t)),l=r?.ref&&"HEAD"!==r.ref?r.ref:(await i.getRevision()).revision,u=await n.getCommitForFile(a.accessToken,i.repo.owner,i.repo.name,l,s);if(null==u)return;let{viewer:c=a.account.label}=u,h=null!=c&&u.author.name===c?"You":u.author.name,m=null!=c&&u.committer.name===c?"You":u.committer.name,d=u.files?.map(t=>new y.K8(e,t.filename??"",O.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),g=d?.find(e=>e.path===s);return new p.aM(this.container,e,u.oid,new p._j(h,u.author.email,new Date(u.author.date),u.author.avatarUrl),new p._j(m,u.committer.email,new Date(u.committer.date)),u.message.split("\n",1)[0],u.parents.nodes.map(e=>e.oid),u.message,{file:g,files:d},{changedFiles:u.changedFiles??0,additions:u.additions??0,deletions:u.deletions??0},[])}catch(e){P.Yd.error(e,i);return}}async getCommitsForGraph(e,t,r){let i=r?.limit??D.D.get("graph.defaultItemLimit")??5e3,n=D.D.get("graph.commitOrdering",void 0,"date"),o=D.D.get("graph.avatars",void 0,!0),[a,s,l,u,c,h]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:n,limit:i}),this.getBranch(e),this.getBranches(e,{filter:e=>e.remote}),this.getRemotes(e),this.getTags(e),this.getCurrentUser(e)]),m=new Map,d=(0,T.Sb)(s),p=new Map,g=new Map;null!=d&&(p.set(d.name,d),null!=d.sha&&g.set(d.sha,[d.name]));let f=T.Sb(l)?.values;if(null!=f)for(let e of f){if(p.set(e.name,e),null==e.sha)continue;let t=g.get(e.sha);null==t?g.set(e.sha,[e.name]):t.push(e.name)}let y=new Set,w=(0,T.Sb)(u)[0],v=null!=w?new Map([[w.name,w]]):new Map,b=new Map,C=T.Sb(c)?.values;if(null!=C)for(let e of C){if(null==e.sha)continue;let t=b.get(e.sha);null==t?b.set(e.sha,[e.name]):t.push(e.name)}return this.getCommitsForGraphCore(e,t,(0,T.Sb)(a),d,p,g,w,v,b,(0,T.Sb)(h),m,y,{...r,useAvatars:o})}async getCommitsForGraphCore(e,t,r,i,n,o,a,s,u,c,h,m,g){let f,y,b,C,R,S,U,D,q,F;let M={...g?.include,stats:!0},P=new Map;if(null==r)return{repoPath:e,avatars:h,ids:m,includes:M,branches:n,remotes:s,downstreams:P,rows:[]};let x=(r.pagedCommits?.()??r.commits)?.values();if(null==x)return{repoPath:e,avatars:h,ids:m,includes:M,branches:n,remotes:s,downstreams:P,rows:[]};let k=[],T=!1,_=!1,I=i.upstream?.name;for(let r of x){if(m.add(r.sha),T=r.sha===i.sha){if(b={webviewItem:`gitlens:branch${T?"+current":""}${i?.upstream!=null?"+tracking":""}`,webviewItemValue:{type:"branch",ref:(0,w.xB)(i.name,e,{id:i.id,refType:"branch",name:i.name,remote:!1,upstream:i.upstream})}},R=[{id:i.id,name:i.name,isCurrentHead:!0,context:(0,A.BH)(b),upstream:null!=i.upstream?{name:i.upstream.name,id:(0,d.Vx)(e,!0,i.upstream.name)}:void 0}],null!=i.upstream){if(D=(0,d.Vx)(e,!0,i.name),f=((g?.useAvatars?a.provider?.avatarUri:void 0)??v.dM(this.container,a,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,w.xB)(i.name,e,{id:D,refType:"branch",name:i.name,remote:!0,upstream:{name:a.name,missing:!1}})}},S=[{id:D,name:i.name,owner:a.name,url:a.url,avatarUrl:f,context:(0,A.BH)(b),current:!0,hostingServiceType:a.provider?.id}],null!=I){let e=P.get(I);null==e&&(e=[],P.set(I,e)),e.push(i.name)}}else S=[]}else{R=[],S=[];let i=o.get(r.sha);if(null!=i)for(let r of i)D=(0,d.Vx)(e,!0,r),y=(0,d.S3)(r),f=((g?.useAvatars?a.provider?.avatarUri:void 0)??v.dM(this.container,a,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,w.xB)(r,e,{id:D,refType:"branch",name:r,remote:!0,upstream:{name:a.name,missing:!1}})}},S.push({id:D,name:y,owner:a.name,url:a.url,avatarUrl:f,context:(0,A.BH)(b),hostingServiceType:a.provider?.id})}U=[];let n=u.get(r.sha);if(null!=n)for(let t of n)F=(0,$.YU)(e,t),b={webviewItem:"gitlens:tag",webviewItemValue:{type:"tag",ref:(0,w.xB)(t,e,{id:F,refType:"tag",name:t})}},U.push({id:F,name:t,annotated:!0,context:(0,A.BH)(b)});if(r.author.email&&!h.has(r.author.email)){let e=r.getCachedAvatarUri();null!=e&&h.set(r.author.email,e.toString(!0))}_="You"===r.author.name,C={row:(0,A.BH)({webviewItem:`gitlens:commit${T?"+HEAD":""}+current`,webviewItemValue:{type:"commit",ref:(0,w.xB)(r.sha,e,{refType:"revision",message:r.message})}}),avatar:(0,A.BH)({webviewItem:`gitlens:contributor${_?"+current":""}`,webviewItemValue:{type:"contributor",repoPath:e,name:_&&c?.name!=null?c.name:r.author.name,email:r.author.email,current:_}})},k.push({sha:r.sha,parents:r.parents,author:r.author.name,email:r.author.email??"",date:r.committer.date.getTime(),message:(0,l.X)(r.message&&String(r.message).length?r.message:r.summary),type:r.parents.length>1?"merge-node":"commit-node",heads:R,remotes:S,tags:U,contexts:C}),null!=r.stats&&(null==q&&(q=new Map),q.set(r.sha,{files:(0,p.By)(r.stats.changedFiles),additions:r.stats.additions,deletions:r.stats.deletions}))}return g?.ref==="HEAD"?g.ref=E.Ps(r.commits.values())?.sha:g?.ref!=null&&(g.ref=void 0),{repoPath:e,avatars:h,ids:m,includes:M,branches:n,remotes:s,downstreams:P,rows:k,id:g?.ref,paging:{limit:r.limit,startingCursor:r.startingCursor,hasMore:r.hasMore},more:async l=>{let d=await r.more?.(l);return this.getCommitsForGraphCore(e,t,d,i,n,o,a,s,u,c,h,m,g)}}}async getCommitTags(e,t,r){if(null==e||r?.commitDate==null)return[];let i=(0,x.UH)();try{let{metadata:i,github:n,session:o}=await this.ensureRepositoryContext(e);return await n.getCommitTags(o.accessToken,i.repo.owner,i.repo.name,t,r?.commitDate)}catch(e){return P.Yd.error(e,i),[]}}async getContributors(e,t){if(null==e)return[];let r=(0,x.UH)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e),n=await r.getContributors(i.accessToken,t.repo.owner,t.repo.name),o=await this.getCurrentUser(e),a=[];for(let t of n)"User"===t.type&&a.push(new f.V(e,t.name,t.email,t.contributions,void 0,(0,R.o)(o,t.name,t.email,t.login),void 0,t.login,t.avatar_url,t.node_id));return a}catch(e){return P.Yd.error(e,r),[]}}async getCurrentUser(e){if(!e)return;let t=(0,x.UH)(),r=this._repoInfoCache.get(e),i=r?.user;if(null!=i)return i;if(null!==i)try{let{metadata:t,github:n,session:o}=await this.ensureRepositoryContext(e);return i=await n.getCurrentUser(o.accessToken,t.repo.owner,t.repo.name),this._repoInfoCache.set(e,{...r,user:i??null}),i}catch(i){P.Yd.error(i,t),this._repoInfoCache.set(e,{...r,user:null});return}}async getDefaultBranchName(e,t){if(null==e)return;let r=(0,x.UH)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e);return await r.getDefaultBranchName(i.accessToken,t.repo.owner,t.repo.name)}catch(e){P.Yd.error(e,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,i){}async getDiffStatus(e,t,r,i){}async getFileStatusForCommit(e,t,r){if(r===g.Ii||(0,w.l3)(r))return;let i=await this.getCommitForFile(e,t,{ref:r});if(null!=i)return i.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){if(null==e)return;let r=(0,x.UH)(),i=this.getPagingLimit(t?.limit);try{let{metadata:r,github:n,session:o}=await this.ensureRepositoryContext(e),a=t?.ref&&"HEAD"!==t.ref?t.ref:(await r.getRevision()).revision,s=await n.getCommits(o.accessToken,r.repo.owner,r.repo.name,a,{all:t?.all,authors:t?.authors,after:t?.cursor,limit:i,since:t?.since?new Date(t.since):void 0}),l=new Map,{viewer:u=o.account.label}=s;for(let t of s.values){let r=null!=u&&t.author.name===u?"You":t.author.name,i=null!=u&&t.committer.name===u?"You":t.committer.name,n=l.get(t.oid);null==n&&(n=new p.aM(this.container,e,t.oid,new p._j(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new p._j(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.K8(e,t.filename??"",O.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),l.set(t.oid,n))}let c={repoPath:e,commits:l,sha:a,range:void 0,count:l.size,limit:i,hasMore:s.paging?.more??!1,endingCursor:s.paging?.cursor,query:r=>this.getLog(e,{...t,limit:r})};return c.hasMore&&(c.more=this.getLogMoreFn(c,t)),c}catch(e){P.Yd.error(e,r);return}}async getLogRefsOnly(e,t){let r=await this.getLog(e,t);if(null!=r)return new Set([...r.commits.values()].map(e=>e.ref))}getLogMoreFn(e,t){return async r=>{let i=null!=r&&"object"==typeof r?r.until:void 0,n="number"==typeof r?r:void 0;if(i&&(0,E.G)(e.commits.values(),e=>e.ref===i))return e;n=this.getPagingLimit(n);let o=await this.getLog(e.repoPath,{...t,limit:n,cursor:e.endingCursor});if(null==o)return{...e,hasMore:!1,more:void 0};let a=new Map([...e.commits,...o.commits]),s={repoPath:e.repoPath,commits:a,sha:e.sha,range:void 0,count:a.size,limit:null==i?(e.limit??0)+n:void 0,hasMore:null!=i||o.hasMore,startingCursor:E.Z$(e.commits)?.[0],endingCursor:o.endingCursor,pagedCommits:()=>{for(let t of e.commits.keys())o.commits.delete(t);return o.commits},query:e.query};return s.hasMore&&(s.more=this.getLogMoreFn(s,t)),s}}async getLogForFile(e,t,r){if(null==e)return;let i=(0,x.UH)(),n=this.getRelativePath(t,e);if(null!=e&&e===n)throw Error(`File name cannot match the repository path; path=${n}`);(r={reverse:!1,...r}).renames=!1,r.all=!1;let o="log";null!=r.ref&&(o+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(o+=`:n${r.limit}`),r.renames&&(o+=":follow"),r.reverse&&(o+=":reverse"),r.since&&(o+=`:since=${r.since}`),r.skip&&(o+=`:skip${r.skip}`),r.cursor&&(o+=`:cursor=${r.cursor}`);let a=await this.container.tracker.getOrAdd(m.YY.fromFile(n,e,r.ref));if(!r.force&&null==r.range){if(null!=a.state){let n=a.state.getLog(o);if(null!=n)return P.Yd.debug(i,`Cache hit: '${o}'`),n.item;if(null!=r.ref||null!=r.limit){let n=a.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(null!=n){if(null==r.ref)return P.Yd.debug(i,`Cache hit: ~'${o}'`),n.item;P.Yd.debug(i,`Cache ?: '${o}'`);let a=await n.item;if(null!=a&&!a.hasMore&&a.commits.has(r.ref)){P.Yd.debug(i,`Cache hit: '${o}'`);let n=!0,s=0,l=new Map((0,E.DZ)(a.commits.entries(),([e,t])=>{if(n){if(e!==r?.ref)return;n=!1}if(s++,r?.limit==null||!(s>r.limit))return[e,t]})),u={...r};return{...a,limit:r.limit,count:l.size,commits:l,query:r=>this.getLogForFile(e,t,{...u,limit:r})}}}}}P.Yd.debug(i,`Cache miss: '${o}'`),null==a.state&&(a.state=new _.p)}let s=this.getLogForFileCore(e,n,a,o,i,r);return null!=a.state&&null==r.range&&(P.Yd.debug(i,`Cache add: '${o}'`),a.state.setLog(o,{item:s})),s}async getLogForFileCore(e,t,r,i,n,o){if(null==e)return;let a=this.getPagingLimit(o?.limit);try{let r=await this.ensureRepositoryContext(e);if(null==r)return;let{metadata:i,github:n,remotehub:s,session:l}=r,u=this.getAbsoluteUri(t,e),c=this.getRelativePath(u,s.getProviderRootUri(u)),h=o?.ref&&"HEAD"!==o.ref?o.ref:(await i.getRevision()).revision,m=await n.getCommits(l.accessToken,i.repo.owner,i.repo.name,h,{all:o?.all,after:o?.cursor,path:c,limit:a,since:o?.since?new Date(o.since):void 0}),d=new Map,{viewer:g=l.account.label}=m;for(let t of m.values){let r=null!=g&&t.author.name===g?"You":t.author.name,i=null!=g&&t.committer.name===g?"You":t.committer.name,n=d.get(t.oid);if(null==n){let o=t.files?.map(t=>new y.K8(e,t.filename??"",O.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),a=(0,k.Mh)(c)?void 0:o?.find(e=>e.path===c)??new y.K8(e,c,y.NV.Modified,void 0,void 0,1===t.changedFiles?{additions:t.additions??0,deletions:t.deletions??0,changes:0}:void 0);n=new p.aM(this.container,e,t.oid,new p._j(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new p._j(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,{file:a,files:o},{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),d.set(t.oid,n)}}let f={repoPath:e,commits:d,sha:h,range:void 0,count:d.size,limit:a,hasMore:m.paging?.more??!1,endingCursor:m.paging?.cursor,query:r=>this.getLogForFile(e,t,{...o,limit:r})};return f.hasMore&&(f.more=this.getLogForFileMoreFn(f,t,o)),f}catch(e){if(null!=r.state&&o?.range==null&&!o?.reverse){let t=e?.toString()??"";return P.Yd.debug(n,`Cache replace (with empty promise): '${i}'`),r.state.setLog(i,{item:W,errorMessage:t}),W}return}}getLogForFileMoreFn(e,t,r){return async i=>{let n=null!=i&&"object"==typeof i?i.until:void 0,o="number"==typeof i?i:void 0;if(n&&(0,E.G)(e.commits.values(),e=>e.ref===n))return e;o=this.getPagingLimit(o);let a=await this.getLogForFile(e.repoPath,t,{...r,limit:null==n?o:0,cursor:e.endingCursor});if(null==a)return{...e,hasMore:!1,more:void 0};let s=new Map([...e.commits,...a.commits]),l={repoPath:e.repoPath,commits:s,sha:e.sha,range:e.range,count:s.size,limit:null==n?(e.limit??0)+o:void 0,hasMore:null!=n||a.hasMore,endingCursor:a.endingCursor,query:e.query};return l.hasMore&&(l.more=this.getLogForFileMoreFn(l,t,r)),l}}async getMergeBase(e,t,r,i){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,i=0){if(!r)return;let n=(0,x.UH)();try{let n=await this.ensureRepositoryContext(e);if(null==n)return;let{metadata:o,github:a,remotehub:s,session:l}=n,u=this.getRelativePath(t,s.getProviderRootUri(t)),c=(await o.getRevision()).revision;"HEAD"===r&&(r=c);let h=await a.getNextCommitRefs(l.accessToken,o.repo.owner,o.repo.name,c,u,r);return{current:0===i?m.YY.fromFile(u,e,r):new m.YY(await this.getBestRevisionUri(e,u,h[i-1])),next:new m.YY(await this.getBestRevisionUri(e,u,h[i]))}}catch(e){throw P.Yd.error(e,n),e}}async getOldestUnpushedRefForFile(e,t){}async getPreviousComparisonUris(e,t,r,i=0){if(r===g.Ii)return;let n=(0,x.UH)();r===g.CL&&(r=void 0);try{let n=await this.ensureRepositoryContext(e);if(null==n)return;let{metadata:o,github:a,remotehub:s,session:l}=n,u=this.getRelativePath(t,s.getProviderRootUri(t)),c=null!=r?1:0,h=await a.getCommitRefs(l.accessToken,o.repo.owner,o.repo.name,r&&"HEAD"!==r?r:(await o.getRevision()).revision,{path:u,first:c+i+1});if(null==h)return;let d=0===i?m.YY.fromFile(u,e,r):new m.YY(await this.getBestRevisionUri(e,u,h.values[c+i-1]?.oid??g.Ii));if(null==d||d.sha===g.Ii)return;return{current:d,previous:new m.YY(await this.getBestRevisionUri(e,u,h.values[c+i]?.oid??g.Ii))}}catch(e){throw P.Yd.error(e,n),e}}async getPreviousComparisonUrisForLine(e,t,r,i,n=0){if(i===g.Ii)return;let o=(0,x.UH)();try{let o;let a=await this.ensureRepositoryContext(e);if(null==a)return;let{remotehub:s}=a,l=this.getRelativePath(t,s.getProviderRootUri(t)),u=m.YY.fromFile(l,e,i),c=r,h=r,d=r;for(let t=0;t<Math.max(0,n)+2;t++){let t=await this.getBlameForLine(o??u,d,void 0,{forceSingleLine:!0});if(null==t)break;i=t.commit.sha,l=t.commit.file?.path??t.commit.file?.originalPath??l,d=t.line.originalLine-1;let r=m.YY.fromFile(l,e,i);null==o||(u=o,c=h),o=r,h=d}if(null==u)return;return{current:u,previous:o,line:(c??r)+1}}catch(e){throw P.Yd.error(e,o),e}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(null==e)return[];let r=(0,S.v)(D.D.get("remotes",null)),[,i,n]=o.Uri.parse(e,!0).path.split("/",3),a=`https://github.com/${i}/${n}.git`,s="github.com",l=`${i}/${n}`;return[new v.ss(this.container,e,"origin","https",s,l,(0,S.B)(this.container,r)(a,s,l),[{type:"fetch",url:a},{type:"push",url:a}])]}async getRevisionContent(e,t,r){let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return o.workspace.fs.readFile(i)}async getStash(e){}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatusForRepo(e){if(null==e)return;let t=await this.ensureRepositoryContext(e);if(null==t)return;let r=await t.metadata.getRevision();if(null!=r)return new C.Hk(e,r.name,r.revision,[],{ahead:0,behind:0},r.type===H.Branch||r.type===H.RemoteBranch?`origin/${r.name}`:void 0)}async getTags(e,t){if(null==e)return V;let r=(0,x.UH)(),i=t?.cursor?void 0:this._tagsCache.get(e);null==i&&(i=(async function(){try{let r,i;let{metadata:n,github:o,session:a}=await this.ensureRepositoryContext(e),s=[],l=t?.cursor,u=null==l;for(;;){let t=await o.getTags(a.accessToken,n.repo.owner,n.repo.name,{cursor:l});for(let n of t.values)r=n.target.authoredDate??n.target.target?.authoredDate??n.target.tagger?.date,i=n.target.committedDate??n.target.target?.committedDate??n.target.tagger?.date,s.push(new $.gE(e,n.name,n.target.target?.oid??n.target.oid,n.target.message??n.target.target?.message??"",null!=r?new Date(r):void 0,null!=i?new Date(i):void 0));if(!t.paging?.more||!u)return{...t,values:s};l=t.paging.cursor}}catch(t){return P.Yd.error(t,r),this._tagsCache.delete(e),V}}).call(this),t?.cursor==null&&this._tagsCache.set(e,i));let n=await i;return t?.filter!=null&&(n={...n,values:n.values.filter(t.filter)}),t?.sort!=null&&(0,$.Pj)(n.values,"boolean"==typeof t.sort?void 0:t.sort),n}async getTreeEntryForRevision(e,t,r){if(null==e||!t)return;if("HEAD"===r){let t=await this.ensureRepositoryContext(e);if(null==t)return;let i=await t.metadata.getRevision();r=i?.revision}let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),n=await o.workspace.fs.stat(i);if(null!=n)return{path:this.getRelativePath(i,e),commitSha:r,size:n.size,type:(n.type&o.FileType.Directory)===o.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(null==e)return[];if("HEAD"===t){let r=await this.ensureRepositoryContext(e);if(null==r)return[];let i=await r.metadata.getRevision();t=i?.revision}let r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),i=await o.workspace.fs.readDirectory(r);if(null==i)return[];let n=[];for(let[e,a]of i){let i=this.getAbsoluteUri(e,r);n.push({path:this.getRelativePath(e,i),commitSha:t,size:0,type:(a&o.FileType.Directory)===o.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){let[{values:r},{values:i}]=await Promise.all([this.getBranches(e,{filter:t?.filter?.branches,sort:!1}),this.getTags(e,{filter:t?.filter?.tags,sort:!1})]);return 0!==r.length||0!==i.length}async hasCommitBeenPushed(e,t){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||null==this.container.git.getRepository(e))return!1;let t=e.with({scheme:s.sN.GitHub});return null!=await o.workspace.fs.stat(t)}async getDiffTool(e){}async openDiffTool(e,t,r){}async openDirectoryCompare(e,t,r,i){}async resolveReference(e,t,r,i){let n;if(!t||t===g.Ii||null==r&&(0,w.D3)(t)||null!=r&&(0,w.l3)(t))return t;if(null!=r)n=this.getRelativePath(r,e);else if(!(0,w.yo)(t)||t.endsWith("^3"))return t;let o=await this.ensureRepositoryContext(e);if(null==o)return t;let{metadata:a,github:s,session:l}=o,u=await s.resolveReference(l.accessToken,a.repo.owner,a.repo.name,t,n);return null!=u?u:n?g.Ii:t}async richSearchCommits(e,t,r){if(null==e)return;let i=(0,x.UH)(),n=(0,U.pD)(t),o=n.get("commit:");if(o?.size){let t=await this.getCommit(e,(0,E.Ps)(o));if(null==t)return;return{repoPath:e,commits:new Map([[t.sha,t]]),sha:t.sha,range:void 0,count:1,limit:1,hasMore:!1}}let a=await this.getQueryArgsFromSearchQuery(t,n,e);if(0===a.length)return;let s=this.getPagingLimit(r?.limit);try{let{metadata:i,github:n,session:o}=await this.ensureRepositoryContext(e),l=`repo:${i.repo.owner}/${i.repo.name}+${a.join("+").trim()}`,u=await n.searchCommits(o.accessToken,l,{cursor:r?.cursor,limit:s,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==u)return;let c=new Map,h=o.account.label;for(let t of u.values){let r=null!=h&&t.author.name===h?"You":t.author.name,i=null!=h&&t.committer.name===h?"You":t.committer.name,n=c.get(t.oid);null==n&&(n=new p.aM(this.container,e,t.oid,new p._j(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new p._j(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.K8(e,t.filename??"",O.fromCommitFileStatus(t.status)??y.NV.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),c.set(t.oid,n))}let m={repoPath:e,commits:c,sha:void 0,range:void 0,count:c.size,limit:s,hasMore:u.pageInfo?.hasNextPage??!1,endingCursor:u.pageInfo?.endCursor??void 0,query:t=>this.getLog(e,{...r,limit:t})};if(m.hasMore){let e=function(i){return async n=>{n=this.getPagingLimit(n);let o=await this.richSearchCommits(i.repoPath,t,{...r,limit:n,cursor:i.endingCursor});if(null==o)return{...i,hasMore:!1,more:void 0};let a=new Map([...i.commits,...o.commits]),s={repoPath:i.repoPath,commits:a,sha:i.sha,range:void 0,count:a.size,limit:(i.limit??0)+n,hasMore:o.hasMore,endingCursor:o.endingCursor,query:i.query};return s.hasMore&&(s.more=e.call(this,s)),s}};m.more=e.call(this,m)}return m}catch(e){P.Yd.error(e,i)}}async searchCommits(e,t,r){t={matchAll:!1,matchCase:!1,matchRegex:!0,...t};let i=(0,U.FL)(t);try{let o=new Map,a=(0,U.pD)(t),s=a.get("commit:");if(null!=s){let n=await Promise.allSettled([...(0,E.UI)(s,t=>this.getCommit(e,t.replace(G,"")))]),a=0;for(let e of n){let t=(0,T.Sb)(e);null!=t&&o.set(t.sha,{i:a++,date:Number(r?.ordering==="author-date"?t.author.date:t.committer.date)})}return{repoPath:e,query:t,comparisonKey:i,results:o}}let l=await this.getQueryArgsFromSearchQuery(t,a,e);if(0===l.length)return{repoPath:e,query:t,comparisonKey:i,results:o};let{metadata:u,github:c,session:h}=await this.ensureRepositoryContext(e),m=`repo:${u.repo.owner}/${u.repo.name}+${l.join("+").trim()}`;async function n(a,s){if(r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:o};a=this.getPagingLimit(a??D.D.get("advanced.maxSearchItems"));let l=await c.searchCommitShas(h.accessToken,m,{cursor:s,limit:a,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==l||r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:o};for(let e of l.values)o.set(e.sha,{i:o.size,date:Number(r?.ordering==="author-date"?e.authorDate:e.committerDate)});return s=l.pageInfo?.endCursor??void 0,{repoPath:e,query:t,comparisonKey:i,results:o,paging:l.pageInfo?.hasNextPage?{limit:a,hasMore:!0}:void 0,more:async e=>n.call(this,e,s)}}return n.call(this,r?.limit)}catch(e){if(e instanceof h.l0)throw e;throw new h.l0(e)}}async validateBranchOrTagName(e,t){return Q.test(e)}async validateReference(e,t){return!0}async stageFile(e,t){}async stageDirectory(e,t){}async unstageFile(e,t){}async unstageDirectory(e,t){}async ensureRepositoryContext(e,t){let r,i,n=o.Uri.parse(e,!0);if(!/^github\+?/.test(n.authority))throw new u.kX(e,u.sh.NotAGitHubRepository);if(!t){let t=this.container.git.getRepository(n);if(null==t)throw new u.kX(e,u.sh.NotAGitHubRepository);n=t.uri}let a=this._remotehub;if(null==a)try{a=await this.ensureRemoteHubApi()}catch(t){throw u.R5,new u.kX(e,u.sh.RemoteHubApiNotFound,t)}let s=await a?.getMetadata(n);if(s?.provider.id!=="github")throw new u.kX(e,u.sh.NotAGitHubRepository);try{[r,i]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(t){if(t instanceof u._7)throw new u.kX(e,t.reason===u.Jx.UserDidNotConsent?u.sh.GitHubAuthenticationDenied:u.sh.GitHubAuthenticationNotFound,t);throw new u.kX(e)}if(null==r)throw new u.kX(e);return{github:r,metadata:s,remotehub:a,session:i}}_github;async ensureGitHub(){if(null==this._github){let e=await this.container.github;null!=e&&this._disposables.push(e.onDidReauthenticate(()=>void this.ensureSession(!0))),this._github=e}return this._github}_remotehub;_remotehubPromise;async ensureRemoteHubApi(e){if(null==this._remotehubPromise&&(this._remotehubPromise=I(),this._remotehubPromise.then(e=>this._remotehub=e,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}_sessionPromise;async ensureSession(e=!1,t=!1){if(e||null==this._sessionPromise){async function r(){let i=this.container.storage.get(`provider:authentication:skip:${this.descriptor.id}`,!1);try{if(e)return i=!1,this.container.storage.delete(`provider:authentication:skip:${this.descriptor.id}`),await o.authentication.getSession("github",z,{forceNewSession:!0});if(!i&&!t)return await o.authentication.getSession("github",z,{createIfNone:!0});let r=await o.authentication.getSession("github",z,{createIfNone:!1,silent:t});if(null!=r)return r;throw Error("User did not consent")}catch(n){if(n instanceof Error&&n.message.includes("User did not consent")){if(!t&&(await this.container.storage.store(`provider:authentication:skip:${this.descriptor.id}`,!0),!i))return e||queueMicrotask(async()=>{let e="Re-enable";await o.window.showInformationMessage("GitLens has been disabled. Authentication is required for GitLens to work with remote GitHub repositories.",e)===e&&this.ensureSession(!0)}),e=!1,r.call(this);throw new u._7("github",u.Jx.UserDidNotConsent)}throw P.Yd.error(n),new u._7("github",void 0,n)}}this._sessionPromise=r.call(this)}return this._sessionPromise}createVirtualUri(e,t,r){var i;let n;if("string"==typeof t)t&&(n=(0,w.D3)(t)?{v:1,ref:{id:t,type:2}}:{v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":n={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":n={v:1,ref:{id:t.name,type:4}}}if("string"==typeof e&&(e=o.Uri.parse(e,!0)),r){let t=e.path;t.endsWith("/")&&(t=t.slice(0,-1)),r=this.getRelativePath(r,e),r=`${t}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:s.sN.Virtual,authority:(i=n,`github${null!=i?`+${(0,a.e)(JSON.stringify(i))}`:""}`),path:r??e.path})}createProviderUri(e,t,r){let i=this.createVirtualUri(e,t,r);return null==this._remotehub?i.scheme!==s.sN.Virtual?i:i.with({scheme:s.sN.GitHub}):this._remotehub.getProviderUri(i)}getPagingLimit(e){return 0===(e=Math.min(100,e??D.D.get("advanced.maxListItems")??100))&&(e=100),e}async resolveReferenceCore(e,t,r){if(null==r||"HEAD"===r)return(await t.getRevision()).revision;if((0,w.D3)(r))return r;if((0,w.yk)(r))return;let[i,n]=await Promise.allSettled([this.getBranches(e,{filter:e=>e.name===r}),this.getTags(e,{filter:e=>e.name===r})]);return r=T.Sb(i)?.values[0]?.sha??T.Sb(n)?.values[0]?.sha}async getQueryArgsFromSearchQuery(e,t,r){let i=[];for(let[n,o]of t.entries())switch(n){case"message:":i.push(...(0,E.UI)(o,e=>e.replace(/ /g,"+")));break;case"author:":{let t;for(let n of(o.has("@me")&&(t=await this.getCurrentUser(r)),o))if(n&&(n=n.replace(G,e.matchRegex?"\\b":""))){if("@me"===n){if(t?.username==null)continue;n=`@${t.username}`}(n=n.replace(/ /g,"+")).startsWith("@")?i.push(`author:${n.slice(1)}`):n.includes("@")?i.push(`author-email:${n}`):i.push(`author-name:${n}`)}}}return i}}L([(0,M.cM)()],J.prototype,"getBestRevisionUri",1),L([(0,M.cM)()],J.prototype,"getWorkingUri",1),L([(0,M.cM)()],J.prototype,"addRemote",1),L([(0,M.cM)()],J.prototype,"pruneRemote",1),L([(0,M.cM)()],J.prototype,"removeRemote",1),L([(0,M.cM)()],J.prototype,"applyChangesToWorkingFile",1),L([(0,M.cM)()],J.prototype,"branchContainsCommit",1),L([(0,M.cM)()],J.prototype,"checkout",1),L([(0,M.cM)({singleLine:!0})],J.prototype,"resetCache",1),L([(0,M.cM)({singleLine:!0})],J.prototype,"resetCaches",1),L([(0,M.cM)({args:{1:e=>e.length}})],J.prototype,"excludeIgnoredUris",1),L([(0,M.cM)()],J.prototype,"fetch",1),L([(0,M.cM)()],J.prototype,"pull",1),L([(0,M.cM)()],J.prototype,"push",1),L([(0,F.H)(),(0,M.fF)()],J.prototype,"findRepositoryUri",1),L([(0,M.cM)({args:{1:e=>e.join(",")}})],J.prototype,"getAheadBehindCommitCount",1),L([(0,F.H)((e,t)=>`${e.toString()}|${t?.isDirty}`),(0,M.cM)({args:{1:e=>e?.isDirty}})],J.prototype,"getBlame",1),L([(0,M.cM)({args:{1:"<contents>"}})],J.prototype,"getBlameContents",1),L([(0,F.H)((e,t,r,i)=>`${e.toString()}|${t}|${r?.isDirty}|${i?.forceSingleLine}`),(0,M.cM)({args:{2:e=>e?.isDirty}})],J.prototype,"getBlameForLine",1),L([(0,M.cM)({args:{2:"<contents>"}})],J.prototype,"getBlameForLineContents",1),L([(0,M.cM)()],J.prototype,"getBlameForRange",1),L([(0,M.cM)({args:{2:"<contents>"}})],J.prototype,"getBlameForRangeContents",1),L([(0,M.cM)({args:{0:"<blame>"}})],J.prototype,"getBlameRange",1),L([(0,M.cM)()],J.prototype,"getBranch",1),L([(0,M.cM)({args:{1:!1}})],J.prototype,"getBranches",1),L([(0,M.cM)()],J.prototype,"getChangedFilesCount",1),L([(0,M.cM)()],J.prototype,"getCommit",1),L([(0,M.cM)()],J.prototype,"getCommitBranches",1),L([(0,M.cM)()],J.prototype,"getCommitCount",1),L([(0,M.cM)()],J.prototype,"getCommitForFile",1),L([(0,M.cM)()],J.prototype,"getCommitsForGraph",1),L([(0,M.cM)()],J.prototype,"getCommitTags",1),L([(0,M.cM)()],J.prototype,"getContributors",1),L([(0,F.H)(),(0,M.cM)()],J.prototype,"getCurrentUser",1),L([(0,M.cM)()],J.prototype,"getDefaultBranchName",1),L([(0,M.cM)()],J.prototype,"getDiffForFile",1),L([(0,M.cM)({args:{1:e=>"<contents>"}})],J.prototype,"getDiffForFileContents",1),L([(0,M.cM)()],J.prototype,"getDiffForLine",1),L([(0,M.cM)()],J.prototype,"getDiffStatus",1),L([(0,M.cM)()],J.prototype,"getFileStatusForCommit",1),L([(0,M.cM)()],J.prototype,"getLog",1),L([(0,M.cM)()],J.prototype,"getLogRefsOnly",1),L([(0,M.cM)()],J.prototype,"getLogForFile",1),L([(0,M.cM)()],J.prototype,"getMergeBase",1),L([(0,M.cM)()],J.prototype,"getMergeStatus",1),L([(0,M.cM)()],J.prototype,"getRebaseStatus",1),L([(0,M.cM)()],J.prototype,"getNextComparisonUris",1),L([(0,M.cM)()],J.prototype,"getOldestUnpushedRefForFile",1),L([(0,M.cM)()],J.prototype,"getPreviousComparisonUris",1),L([(0,M.cM)()],J.prototype,"getPreviousComparisonUrisForLine",1),L([(0,M.cM)()],J.prototype,"getIncomingActivity",1),L([(0,M.cM)({args:{1:!1}})],J.prototype,"getRemotes",1),L([(0,M.cM)()],J.prototype,"getRevisionContent",1),L([(0,M.cM)()],J.prototype,"getStash",1),L([(0,M.cM)()],J.prototype,"getStatusForFile",1),L([(0,M.cM)()],J.prototype,"getStatusForFiles",1),L([(0,M.cM)()],J.prototype,"getStatusForRepo",1),L([(0,M.cM)({args:{1:!1}})],J.prototype,"getTags",1),L([(0,M.cM)()],J.prototype,"getTreeEntryForRevision",1),L([(0,M.cM)()],J.prototype,"getTreeForRevision",1),L([(0,M.cM)()],J.prototype,"hasBranchOrTag",1),L([(0,M.cM)()],J.prototype,"hasCommitBeenPushed",1),L([(0,M.cM)()],J.prototype,"getDiffTool",1),L([(0,M.cM)()],J.prototype,"openDiffTool",1),L([(0,M.cM)()],J.prototype,"openDirectoryCompare",1),L([(0,M.cM)()],J.prototype,"resolveReference",1),L([(0,M.cM)()],J.prototype,"richSearchCommits",1),L([(0,M.cM)()],J.prototype,"searchCommits",1),L([(0,M.cM)()],J.prototype,"validateBranchOrTagName",1),L([(0,M.cM)()],J.prototype,"validateReference",1),L([(0,M.cM)()],J.prototype,"stageFile",1),L([(0,M.cM)()],J.prototype,"stageDirectory",1),L([(0,M.cM)()],J.prototype,"unstageFile",1),L([(0,M.cM)()],J.prototype,"unstageDirectory",1),L([(0,F.H)()],J.prototype,"ensureRepositoryContext",1),L([(0,F.H)()],J.prototype,"ensureGitHub",1)},998:(e,t,r)=>{r.r(t),r.d(t,{fromCommitFileStatus:()=>g,fromGitHubIssueDetailed:()=>p,fromGitHubPullRequest:()=>a,fromGitHubPullRequestDetailed:()=>d,fromGitHubPullRequestMergeableState:()=>h,fromGitHubPullRequestReviewDecision:()=>u,fromGitHubPullRequestState:()=>s,toGitHubPullRequestMergeableState:()=>m,toGitHubPullRequestReviewDecision:()=>c,toGitHubPullRequestState:()=>l});var i=r(7881),n=r(8452),o=r(4092);function a(e,t){return new o.i7(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,s(e.state),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt))}function s(e){return"MERGED"===e?"merged":"CLOSED"===e?"closed":"opened"}function l(e){return"merged"===e?"MERGED":"closed"===e?"CLOSED":"OPEN"}function u(e){switch(e){case"APPROVED":return o.pD.Approved;case"CHANGES_REQUESTED":return o.pD.ChangesRequested;case"REVIEW_REQUIRED":return o.pD.ReviewRequired}}function c(e){switch(e){case o.pD.Approved:return"APPROVED";case o.pD.ChangesRequested:return"CHANGES_REQUESTED";case o.pD.ReviewRequired:return"REVIEW_REQUIRED"}}function h(e){switch(e){case"MERGEABLE":return o.Cz.Mergeable;case"CONFLICTING":return o.Cz.Conflicting;case"UNKNOWN":return o.Cz.Unknown}}function m(e){switch(e){case o.Cz.Mergeable:return"MERGEABLE";case o.Cz.Conflicting:return"CONFLICTING";case o.Cz.Unknown:return"UNKNOWN"}}function d(e,t){return new o.i7(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,s(e.state),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt),h(e.mergeable),{head:{exists:null!=e.headRepository,owner:e.headRepository?.owner.login,repo:e.baseRepository?.name,sha:e.headRefOid,branch:e.headRefName,url:e.headRepository?.url},base:{exists:null!=e.baseRepository,owner:e.baseRepository?.owner.login,repo:e.baseRepository?.name,sha:e.baseRefOid,branch:e.baseRefName,url:e.baseRepository?.url},isCrossRepository:e.isCrossRepository},e.isDraft,e.additions,e.deletions,e.totalCommentsCount,u(e.reviewDecision),e.reviewRequests.nodes.map(e=>({isCodeOwner:e.asCodeOwner,reviewer:{name:e.requestedReviewer.login,avatarUrl:e.requestedReviewer.avatarUrl,url:e.requestedReviewer.url}})),e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})))}function p(e,t){return new n.$9({id:t.id,name:t.name,domain:t.domain,icon:t.icon},String(e.number),e.id,e.title,e.url,new Date(e.createdAt),e.closed,s(e.state),new Date(e.updatedAt),{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},{owner:e.repository.owner.login,repo:e.repository.name},e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})),null==e.closedAt?void 0:new Date(e.closedAt),e.labels?.nodes==null?void 0:e.labels.nodes.map(e=>({color:e.color,name:e.name})),e.comments?.totalCount,e.reactions?.totalCount)}function g(e){switch(e){case"added":return i.NV.Added;case"changed":case"modified":return i.NV.Modified;case"removed":return i.NV.Deleted;case"renamed":return i.NV.Renamed;case"copied":return i.NV.Copied}}},778:(e,t,r)=>{var i=r(2479);function n(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=i(n),e.exports.strict=i(o),n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},2479:e=>{e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw TypeError("need wrapper function");return Object.keys(t).forEach(function(e){i[e]=t[e]}),i;function i(){for(var e=Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var i=t.apply(this,e),n=e[e.length-1];return"function"==typeof i&&i!==n&&Object.keys(n).forEach(function(e){i[e]=n[e]}),i}}}};