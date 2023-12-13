exports.id=449,exports.ids=[449],exports.modules={661:(e,t,r)=>{r.r(t),r.d(t,{GitLabApi:()=>y});var a=r(9496),s=r(1177),o=r(7338),i=r(4575),n=r(4092),l=r(7925),d=r(5148),u=r(4241),c=r(4336),h=r(6004),p=r(6398),g=r(4627),f=r(6259),m=Object.defineProperty,w=Object.getOwnPropertyDescriptor,b=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?w(t,r):t,i=e.length-1;i>=0;i--)(s=e[i])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&m(t,r,o),o};class y{_disposable;_projectIds=new Map;constructor(e){this._disposable=d.D.onDidChangeAny(e=>{(d.D.changedAny(e,["http.proxy","http.proxyStrictSSL"])||d.D.changed(e,["proxy","remotes"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._projectIds.clear(),this._proxyAgents.clear()}_proxyAgents=new Map;getProxyAgent(e){if(o.$L)return;let t=this._proxyAgents.get(e.id);if(void 0===t){let r=e.getIgnoreSSLErrors();t=(0,s.Nx)(!0!==r&&"force"!==r&&void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}async getAccountForCommit(e,t,r,s,o,n,l){let d=(0,h.UH)(),u=await this.getProjectId(e,t,r,s,n?.baseUrl,l);if(u)try{let r;let s=await this.request(e,t,n?.baseUrl,`v4/projects/${u}/repository/commits/${o}?stats=false`,{method:"GET"},l,d);for(let a of(await this.findUser(e,t,s.author_name,n)))if(a.name===s.author_name||a.publicEmail&&a.publicEmail===s.author_email){if(r=a,"active"===a.state)break}else((0,g.qq)(a.name,s.author_name)||a.publicEmail&&(0,g.qq)(a.publicEmail,s.author_email))&&(r=a);if(null==r)return;return r.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(r.avatarUrl)&&(r.avatarUrl=a.Uri.joinPath(a.Uri.parse(r.webUrl),"..",r.avatarUrl).toString()),{provider:e,name:r.name||void 0,email:s.author_email||void 0,avatarUrl:r.avatarUrl||void 0}}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,d)}}async getAccountForEmail(e,t,r,a,s,o){let n=(0,h.UH)();try{let[r]=await this.findUser(e,t,s,o);if(null==r)return;return{provider:e,name:r.name||void 0,email:r.publicEmail||void 0,avatarUrl:r.avatarUrl||void 0}}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,n)}}async getDefaultBranch(e,t,r,a,s,o){let n=(0,h.UH)();try{let i=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,l=await this.graphql(e,t,s?.baseUrl,i,{fullPath:`${r}/${a}`},o,n),d=l?.data?.project?.repository?.rootRef??void 0;if(null==d)return;return{provider:e,name:d}}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,n)}}async getIssueOrPullRequest(e,t,r,a,s,o,n){let l=(0,h.UH)();try{let i=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,d=await this.graphql(e,t,o?.baseUrl,i,{fullPath:`${r}/${a}`,iid:String(s)},n,l);if(d?.data?.project?.issue!=null){let t=d.data.project.issue;return{provider:e,type:"issue",id:t.iid,nodeId:void 0,date:new Date(t.createdAt),title:t.title,closed:"closed"===t.state,closedDate:null==t.closedAt?void 0:new Date(t.closedAt),url:t.webUrl,state:"locked"===t.state?"closed":t.state}}if(d?.data?.project?.mergeRequest!=null){let t=d.data.project.mergeRequest;return{provider:e,type:"pullrequest",id:t.iid,nodeId:void 0,date:new Date(t.createdAt),title:t.title,closed:"closed"===t.state,closedDate:"closed"===t.state?new Date(t.updatedAt):void 0,url:t.webUrl,state:"locked"===t.state?"closed":t.state}}return}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,l)}}async getPullRequestForBranch(e,t,r,a,s,o,l){let d=(0,h.UH)();try{let i;let u=`
			nodes {
				iid
				author {
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,c=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${o?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
		${o?.include?.includes("opened")?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
		${o?.include?.includes("merged")?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
		${o?.include?.includes("closed")?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
	}
}`,h=await this.graphql(e,t,o?.baseUrl,c,{fullPath:`${r}/${a}`,branches:[s],state:o?.include},l,d);if(o?.include==null)i=h?.data?.project?.mergeRequests?.nodes?.[0];else for(let e of o.include){let t;"opened"===e?t=h?.data?.project?.opened?.nodes?.[0]:"merged"===e?t=h?.data?.project?.merged?.nodes?.[0]:"closed"===e&&(t=h?.data?.project?.closed?.nodes?.[0]),null!=t&&(null==i||new Date(t.updatedAt)>new Date(i.updatedAt))&&(i=t)}if(null==i)return;return new n.i7(e,{name:i.author?.name??"Unknown",avatarUrl:i.author?.avatarUrl??"",url:i.author?.webUrl??""},String(i.iid),void 0,i.title,i.webUrl,(0,f.fromGitLabMergeRequestState)(i.state),new Date(i.updatedAt),"closed"!==i.state?void 0:new Date(i.updatedAt),null==i.mergedAt?void 0:new Date(i.mergedAt))}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,d)}}async getPullRequestForCommit(e,t,r,a,s,o,n){let l=(0,h.UH)(),d=await this.getProjectId(e,t,r,a,o?.baseUrl,n);if(d)try{let r=await this.request(e,t,o?.baseUrl,`v4/projects/${d}/repository/commits/${s}/merge_requests`,{method:"GET"},n,l);if(null==r||0===r.length)return;return r.length>1&&r.sort((e,t)=>("opened"===e.state?-1:1)-("opened"===t.state?-1:1)||new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()),(0,f.fromGitLabMergeRequestREST)(r[0],e)}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,l)}}async getRepositoryMetadata(e,t,r,a,s,o){let n=(0,h.UH)(),l=await this.getProjectId(e,t,r,a,s?.baseUrl,o);if(l)try{let r=await this.request(e,t,s?.baseUrl,`v4/projects/${l}`,{method:"GET"},o,n);if(null==r)return;return{provider:e,owner:r.namespace.full_path,name:r.path,isFork:null!=r.forked_from_project,parent:null!=r.forked_from_project?{owner:r.forked_from_project.namespace.full_path,name:r.forked_from_project.path}:void 0}}catch(t){if(t instanceof i.Ww)return;throw this.handleException(t,e,n)}}async findUser(e,t,r,a,s){let o=(0,h.UH)();try{let i=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,n=await this.graphql(e,t,a?.baseUrl,i,{search:r},s,o),l=n?.data?.users?.nodes;if(null==l||0===l.length)return[];let d=[];for(let e of l){let t=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(e.id);null!=t&&d.push({id:parseInt(t[1],10),name:e.name,username:e.username,publicEmail:e.publicEmail||void 0,state:e.state,avatarUrl:e.avatarUrl,webUrl:e.webUrl})}return d}catch(t){if(t instanceof i.Ww)return[];return this.handleException(t,e,o),[]}}getProjectId(e,t,r,a,s,o){let i=`${t}|${r}/${a}`,n=this._projectIds.get(i);return null==n&&(n=this.getProjectIdCore(e,t,r,a,s,o),this._projectIds.set(i,n)),n}async getProjectIdCore(e,t,r,a,s,o){let n=(0,h.UH)();try{let i=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,l=await this.graphql(e,t,s,i,{fullPath:`${r}/${a}`},o,n),d=l?.data?.project?.id;if(null==d)return;let u=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(d);if(null==u)return;let c=u[1];return(0,h.lH)(n,` \u2022 projectId=${c}`),c}catch(t){if(t instanceof i.Ww)return;this.handleException(t,e,n);return}}async graphql(e,t,r,o,n,l,d){let u;try{let a=(0,p.k)(`[GITLAB] POST ${r}`,{log:!1}),d=this.getProxyAgent(e);try{let a;if(null!=l){if(l.isCancellationRequested)throw new i.FU;a=new AbortController,l.onCancellationRequested(()=>a.abort())}if((u=await (0,s.a_)(e.getIgnoreSSLErrors(),()=>(0,s.he)(`${r??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:d,signal:a?.signal,body:JSON.stringify({query:o,variables:n})}))).ok){let e=await u.json();if("errors"in e)throw new i.Xq("GitLab",u,e.errors);return e}throw new i.Xq("GitLab",u)}finally{let e=/(^[^({\n]+)/.exec(o),t=` ${e?.[1].trim()??o}`;a?.stop({message:t})}}catch(r){throw r instanceof i.Xq||"AbortError"===r.name?this.handleRequestError(e,t,r,d):c.Yd.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}async request(e,t,r,o,n,l,d){let u;let h=`${r??"https://gitlab.com/api"}/${o}`;try{let r=(0,p.k)(`[GITLAB] ${n?.method??"GET"} ${h}`,{log:!1}),a=this.getProxyAgent(e);try{let r;if(null!=l){if(l.isCancellationRequested)throw new i.FU;r=new AbortController,l.onCancellationRequested(()=>r.abort())}if((u=await (0,s.a_)(e.getIgnoreSSLErrors(),()=>(0,s.he)(h,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:a,signal:r?.signal,...n}))).ok)return await u.json();throw new i.Xq("GitLab",u)}finally{r?.stop()}}catch(r){throw r instanceof i.Xq||"AbortError"===r.name?this.handleRequestError(e,t,r,d):c.Yd.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}handleRequestError(e,t,r,s){if("AbortError"===r.name||!(r instanceof i.Xq))throw new i.FU(r);switch(r.status){case 404:case 410:case 422:throw new i.Ww(r);case 401:throw new i._7("gitlab",i.Jx.Unauthorized,r);case 403:if(r.message.includes("rate limit exceeded")){let e;let a=r.response?.headers?.get("x-ratelimit-reset");throw null!=a&&Number.isNaN(e=parseInt(a,10))&&(e=void 0),new i.yx(r,t,e)}throw new i._7("gitlab",i.Jx.Forbidden,r);case 500:c.Yd.error(r,s),null!=r.response&&(e?.trackRequestException(),(0,l.vF)(`${e?.name??"GitLab"} failed to respond and might be experiencing issues.${null==e||"gitlab"===e.id?" Please visit the [GitLab status page](https://status.gitlab.com) for more information.":""}`));return;case 502:if(c.Yd.error(r,s),r.message.includes("timeout")){e?.trackRequestException(),(0,l.s$)(e?.name??"GitLab");return}break;default:if(r.status>=400&&r.status<500)throw new i.Bn(r)}c.Yd.error(r,s),c.Yd.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return c.Yd.error(e,r),e instanceof i._7&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===i.Jx.Unauthorized||e.reason===i.Jx.Forbidden){let r="Reauthenticate";await a.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===i.Jx.Forbidden?" to provide additional access":""}?`,r)===r&&(await t.reauthenticate(),this.resetCaches())}else a.window.showErrorMessage(e.message)}}b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getAccountForCommit",1),b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getAccountForEmail",1),b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getDefaultBranch",1),b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getIssueOrPullRequest",1),b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getPullRequestForBranch",1),b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getPullRequestForCommit",1),b([(0,u.fF)({args:{0:e=>e.name,1:"<token>"}})],y.prototype,"getRepositoryMetadata",1)},6259:(e,t,r)=>{r.r(t),r.d(t,{fromGitLabMergeRequestREST:()=>i,fromGitLabMergeRequestState:()=>s,toGitLabMergeRequestState:()=>o});var a=r(4092);function s(e){return"locked"===e?"closed":e}function o(e){return e}function i(e,t){return new a.i7(t,{name:e.author?.name??"Unknown",avatarUrl:e.author?.avatar_url??"",url:e.author?.web_url??""},String(e.iid),void 0,e.title,e.web_url,s(e.state),new Date(e.updated_at),null==e.closed_at?void 0:new Date(e.closed_at),null==e.merged_at?void 0:new Date(e.merged_at))}}};