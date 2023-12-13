exports.id=521,exports.ids=[521],exports.modules={1629:(e,t,i)=>{i.d(t,{FocusWebviewProvider:()=>E});var s=i(9496),r=i(5255),n=i(8887),o=i(4155),a=i(8834),l=i(5367),h=i(8452),u=i(4092),c=i(4321),d=i(3646),p=i(2674),f=i(4794),m=i(9529),g=i(4241),R=i(4336),w=i(6004),y=i(5116),b=i(7469),_=i(5798);let I=new _.ke("focus/pr/openWorktree"),q=new _.ke("focus/pr/openBranch"),S=new _.ke("focus/pr/switchToBranch"),C=new _.ke("focus/pr/snooze"),k=new _.ke("focus/pr/pin"),v=new _.ke("focus/issue/snooze"),P=new _.ke("focus/issue/pin"),A=new _.jH("focus/didChange",!0);var D=Object.defineProperty,x=Object.getOwnPropertyDescriptor,B=(e,t,i,s)=>{for(var r,n=s>1?void 0:s?x(t,i):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(s?r(t,i,n):r(n))||n);return s&&n&&D(t,i,n),n};class E{constructor(e,t){this.container=e,this.host=t,this._disposable=s.Disposable.from(this.container.subscription.onDidChange(this.onSubscriptionChanged,this),this.container.git.onDidChangeRepositories(async()=>{this._etag!==this.container.git.etag&&(null==this._discovering||(this._etag=await this._discovering,this._etag!==this.container.git.etag))&&this.host.refresh(!0)}))}_pullRequests=[];_issues=[];_discovering;_disposable;_etag;_etagSubscription;_repositoryEventsDisposable;_repos;_enrichedItems;dispose(){null!=this.enrichmentExpirationTimeout&&(clearTimeout(this.enrichmentExpirationTimeout),this.enrichmentExpirationTimeout=void 0),this._disposable.dispose()}onMessageReceived(e){switch(e.method){case q.method:(0,_.mq)(q,e,e=>this.onOpenBranch(e));break;case S.method:(0,_.mq)(S,e,e=>this.onSwitchBranch(e));break;case I.method:(0,_.mq)(I,e,e=>this.onOpenWorktree(e));break;case C.method:(0,_.mq)(C,e,e=>this.onSnoozePr(e));break;case k.method:(0,_.mq)(k,e,e=>this.onPinPr(e));break;case v.method:(0,_.mq)(v,e,e=>this.onSnoozeIssue(e));break;case P.method:(0,_.mq)(P,e,e=>this.onPinIssue(e))}}async onPinIssue({issue:e,pin:t}){let i=this._issues?.find(t=>t.issue.nodeId===e.nodeId);if(null!=i){if(t)await this.container.focus.unpinItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),i.enriched=i.enriched?.filter(e=>e.id!==t);else{let e={type:"issue",id:i.issue.nodeId,remote:i.repoAndRemote.remote,url:i.issue.url},t=await this.container.focus.pinItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==i.enriched&&(i.enriched=[]),i.enriched.push(t)}this.notifyDidChangeState()}}async onSnoozeIssue({issue:e,snooze:t,expiresAt:i}){let s=this._issues?.find(t=>t.issue.nodeId===e.nodeId);if(null!=s){if(t)await this.container.focus.unsnoozeItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),s.enriched=s.enriched?.filter(e=>e.id!==t);else{let e={type:"issue",id:s.issue.nodeId,remote:s.repoAndRemote.remote,url:s.issue.url};null!=i&&(e.expiresAt=i);let t=await this.container.focus.snoozeItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==s.enriched&&(s.enriched=[]),s.enriched.push(t)}this.notifyDidChangeState()}}async onPinPr({pullRequest:e,pin:t}){let i=this._pullRequests?.find(t=>t.pullRequest.nodeId===e.nodeId);if(null!=i){if(t)await this.container.focus.unpinItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),i.enriched=i.enriched?.filter(e=>e.id!==t);else{let e={type:"pr",id:i.pullRequest.nodeId,remote:i.repoAndRemote.remote,url:i.pullRequest.url},t=await this.container.focus.pinItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==i.enriched&&(i.enriched=[]),i.enriched.push(t)}this.notifyDidChangeState()}}async onSnoozePr({pullRequest:e,snooze:t,expiresAt:i}){let s=this._pullRequests?.find(t=>t.pullRequest.nodeId===e.nodeId);if(null!=s){if(t)await this.container.focus.unsnoozeItem(t),this._enrichedItems=this._enrichedItems?.filter(e=>e.id!==t),s.enriched=s.enriched?.filter(e=>e.id!==t);else{let e={type:"pr",id:s.pullRequest.nodeId,remote:s.repoAndRemote.remote,url:s.pullRequest.url};null!=i&&(e.expiresAt=i);let t=await this.container.focus.snoozeItem(e);if(null==t)return;null==this._enrichedItems&&(this._enrichedItems=[]),this._enrichedItems.push(t),null==s.enriched&&(s.enriched=[]),s.enriched.push(t)}this.notifyDidChangeState()}}findSearchedPullRequest(e){return this._pullRequests?.find(t=>t.pullRequest.id===e.id)}async getRemoteBranch(e){let t,i;let r=e.pullRequest,n=e.repoAndRemote,a=n.repo.uri,l=await n.repo.getMainRepository();if(null==l){s.window.showWarningMessage(`Unable to find main repository(${a.toString()}) for PR #${r.id}`);return}let h=r.refs.base.owner,u=s.Uri.parse(r.refs.base.url),d=r.refs.head.branch,p=s.Uri.parse(r.refs.head.url),m=p.toString(),[,g,R]=(0,f.Sk)(m);if([t]=await l.getRemotes({filter:e=>e.matches(g,R)}),null!=t)i=`${t.name}/${d}`,await this.container.git.fetch(l.path,{remote:t.name});else{let e=await s.window.showInformationMessage(`Unable to find a remote for '${m}'. Would you like to add a new remote?`,{modal:!0},{title:"Yes"},{title:"No",isCloseAffordance:!0});if(e?.title!=="Yes")return;let n=r.refs.head.owner;if(await (0,o.IH)(l,n,m,{confirm:!1,fetch:!0,reveal:!1}),[t]=await l.getRemotes({filter:e=>e.url===m}),null==t)return;i=`${t.name}/${d}`;let a=r.refs.base.repo,c=`pr/${u.toString()===p.toString()?d:i}`;this.container.git.setConfig(l.path,`branch.${c}.github-pr-owner-number`,`${h}#${a}#${r.id}`)}return{remote:t,reference:(0,c.xB)(i,l.path,{refType:"branch",name:i,remote:!0})}}async onOpenBranch({pullRequest:e}){let t=this.findSearchedPullRequest(e);if(null==t)return;let i=await this.getRemoteBranch(t);if(null==i){s.window.showErrorMessage(`Unable to find remote branch for '${t.pullRequest.refs?.head.owner}:${t.pullRequest.refs?.head.branch}'`);return}(0,m.P0)(r.Gh.ShowInCommitGraph,{ref:i.reference})}async onSwitchBranch({pullRequest:e}){let t=this.findSearchedPullRequest(e);if(null==t||t.isCurrentBranch)return;if(null!=t.branch)return a.gu(t.branch.repoPath,t.branch);let i=await this.getRemoteBranch(t);if(null==i){s.window.showErrorMessage(`Unable to find remote branch for '${t.pullRequest.refs?.head.owner}:${t.pullRequest.refs?.head.branch}'`);return}return a.gu(i.remote.repoPath,i.reference)}async onOpenWorktree({pullRequest:e}){let t=this.findSearchedPullRequest(e);if(t?.repoAndRemote==null)return;let i=s.Uri.parse(e.refs.base.url),n=t.repoAndRemote.repo.uri;return(0,m.P0)(r.Gh.OpenOrCreateWorktreeForGHPR,{base:{repositoryCloneUrl:{repositoryName:e.refs.base.repo,owner:e.refs.base.owner,url:i}},githubRepository:{rootUri:n},head:{ref:e.refs.head.branch,sha:e.refs.head.sha,repositoryCloneUrl:{repositoryName:e.refs.head.repo,owner:e.refs.head.owner,url:s.Uri.parse(e.refs.head.url)}},item:{number:parseInt(e.id,10)}})}onSubscriptionChanged(e){e.etag!==this._etagSubscription&&(this._etagSubscription=e.etag,this._access=void 0,this.notifyDidChangeState())}_access;async getAccess(e){return(e||null==this._access)&&(this._access=await this.container.git.access(n.x.Focus)),this._access}enrichmentExpirationTimeout;ensureEnrichmentExpirationCore(e){let t;if(null!=this.enrichmentExpirationTimeout&&(clearTimeout(this.enrichmentExpirationTimeout),this.enrichmentExpirationTimeout=void 0),null==e||0===e.length)return;let i=Date.now();for(let s of e){if(null==s.expiresAt)continue;let e=new Date(s.expiresAt).getTime();(null==t||e>i&&e<t)&&(t=e)}if(null==t)return;let s=t+9e5;for(let i of e){if(null==i.expiresAt)continue;let e=new Date(i.expiresAt).getTime();e>t&&e<s&&(t=e)}let r=t-i+6e4;this.enrichmentExpirationTimeout=setTimeout(()=>{this.notifyDidChangeState(!0)},r)}async getState(e,t){let i=this.host.baseWebviewState;this._etag=this.container.git.etag,this.container.git.isDiscoveringRepositories&&(this._discovering=this.container.git.isDiscoveringRepositories.then(e=>(this._discovering=void 0,e)),this._etag=await this._discovering);let s=await this.getAccess(e);if(!0!==s.allowed)return{...i,access:s};let r=(await this.getRichRepos(e)).filter(e=>e.isGitHub),n=r.filter(e=>e.isConnected&&e.isGitHub);if(!(n.length>0))return{...i,access:s,repos:r.map(e=>F(e))};let o=n.map(e=>F(e)),a=Promise.allSettled([this.getMyPullRequests(n,e),this.getMyIssues(n,e),this.getEnrichedItems(e)]),l=async()=>{let[e,t,r]=await a,n=[],l=b.Sb(e)?.map(e=>{let t=$(e,b.Sb(r));return null!=t&&n.push(...t),{pullRequest:u.l1(e.pullRequest),reasons:e.reasons,isCurrentBranch:e.isCurrentBranch??!1,isCurrentWorktree:e.isCurrentWorktree??!1,hasWorktree:e.hasWorktree??!1,hasLocalBranch:e.hasLocalBranch??!1,enriched:T(t),rank:e.rank}}),c=b.Sb(t)?.map(e=>{let t=$(e,b.Sb(r));return null!=t&&n.push(...t),{issue:h.y$(e.issue),reasons:e.reasons,enriched:T(t),rank:e.rank}});return this.ensureEnrichmentExpirationCore(n),{...i,access:s,repos:o,pullRequests:l,issues:c}};return t?(queueMicrotask(async()=>{let e=await l();this.host.notify(A,{state:e})}),{...i,access:s,repos:o}):await l()}async includeBootstrap(){return this.getState(!0,!0)}async getRichRepos(e){if(e||null==this._repos){let e=[],t=[];for(let i of this.container.git.openRepositories){let s=await i.getRichRemote();if(null==s||e.findIndex(e=>e.remote===s)>-1)continue;t.push(i.onDidChange(this.onRepositoryChanged,this));let r=this.container.integrations.getByRemote(s);e.push({repo:i,remote:s,isConnected:r?.maybeConnected??await r?.isConnected()??!1,isGitHub:"github"===s.provider.id})}this._repositoryEventsDisposable&&(this._repositoryEventsDisposable.dispose(),this._repositoryEventsDisposable=void 0),this._repositoryEventsDisposable=s.Disposable.from(...t),this._repos=e}return this._repos}onRepositoryChanged(e){e.changed(d.I6.RemoteProviders,d.du.Any)&&this.notifyDidChangeState(!0)}async getMyPullRequests(e,t){let i=(0,w.UH)();if(t||null==this._pullRequests){let t=[],s=new Map,r=new Map;for(let[n,o]of e.map(e=>[e,this.container.integrations.getMyPullRequests(e.remote)])){let e;try{e=await o}catch(e){R.Yd.error(e,i,`Failed to get prs for '${n.remote.url}'`)}if(null!=e)for(let i of e){if(0===i.reasons.length)continue;let e={...i,repoAndRemote:n,isCurrentWorktree:!1,isCurrentBranch:!1,rank:function(e){let t=0;return e.reasons.includes("authored")?t+=1e3:e.reasons.includes("assigned")?t+=900:e.reasons.includes("review-requested")?t+=800:e.reasons.includes("mentioned")&&(t+=700),e.pullRequest.reviewDecision===u.pD.Approved?e.pullRequest.mergeableState===u.Cz.Mergeable?t+=100:e.pullRequest.mergeableState===u.Cz.Conflicting?t+=90:t+=80:e.pullRequest.reviewDecision===u.pD.ChangesRequested&&(t+=70),t}(i)},o=`${e.pullRequest.refs.head.owner}/${e.pullRequest.refs.head.branch}`,a=s.get(e.repoAndRemote.repo);null==a&&(a=new y.X(t=>e.repoAndRemote.repo.getBranches(null!=t?{paging:t}:void 0)),s.set(e.repoAndRemote.repo,a));let h=r.get(e.repoAndRemote.repo);null==h&&(h=await e.repoAndRemote.repo.getWorktrees(),r.set(e.repoAndRemote.repo,h));let c=await (0,p.K)(e.repoAndRemote.repo,e.pullRequest.refs.head.branch,o,h,a);e.hasWorktree=null!=c,e.isCurrentWorktree=c?.opened===!0;let d=await (0,l.eK)(n.repo,o,a);d&&(e.branch=d,e.hasLocalBranch=!0,e.isCurrentBranch=d.current),t.push(e)}}this._pullRequests=t.sort((e,t)=>{let i=e.rank,s=t.rank;return i===s?e.pullRequest.date.getTime()-t.pullRequest.date.getTime():(s??0)-(i??0)})}return this._pullRequests}async getMyIssues(e,t){let i=(0,w.UH)();if(t||null==this._pullRequests){let t=[];for(let[s,r]of e.map(e=>[e,this.container.integrations.getMyIssues(e.remote)])){let e;try{e=await r}catch(e){R.Yd.error(e,i,`Failed to get issues for '${s.remote.url}'`)}if(null!=e)for(let i of e)0!==i.reasons.length&&t.push({...i,repoAndRemote:s,rank:0})}this._issues=t.sort((e,t)=>t.issue.updatedDate.getTime()-e.issue.updatedDate.getTime())}return this._issues}async getEnrichedItems(e){if(e||null==this._enrichedItems){let e=await this.container.focus.get();this._enrichedItems=e}return this._enrichedItems}async notifyDidChangeState(e,t){this.host.notify(A,{state:await this.getState(e,t)})}}function $(e,t){let i;if(null==t||0===t.length){e.enriched=void 0;return}if(0!==(i=null!=e.pullRequest?t.filter(t=>t.entityUrl===e.pullRequest.url):t.filter(t=>t.entityUrl===e.issue.url)).length)return e.enriched=i,i}function T(e){if(null!=e&&0!==e.length)return e.map(e=>({id:e.id,type:e.type,expiresAt:e.expiresAt}))}function F(e){return{repo:e.repo.path,isGitHub:e.isGitHub,isConnected:e.isConnected}}B([(0,g.fF)({args:!1})],E.prototype,"onPinIssue",1),B([(0,g.fF)({args:!1})],E.prototype,"onSnoozeIssue",1),B([(0,g.fF)({args:!1})],E.prototype,"onPinPr",1),B([(0,g.fF)({args:!1})],E.prototype,"onSnoozePr",1),B([(0,g.fF)({args:!1})],E.prototype,"onOpenBranch",1),B([(0,g.fF)({args:!1})],E.prototype,"onSwitchBranch",1),B([(0,g.fF)({args:!1})],E.prototype,"onOpenWorktree",1),B([(0,g.fF)()],E.prototype,"getAccess",1),B([(0,g.fF)()],E.prototype,"getState",1),B([(0,g.fF)()],E.prototype,"getRichRepos",1),B([(0,g.fF)({args:{0:!1}})],E.prototype,"getMyPullRequests",1),B([(0,g.fF)({args:{0:!1}})],E.prototype,"getMyIssues",1),B([(0,g.fF)()],E.prototype,"getEnrichedItems",1)}};