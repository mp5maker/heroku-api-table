(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t){e.exports=React},10:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_POST_SUCCESS="GET_POST_SUCCESS",t.GET_POST_ERROR="GET_POST_ERROR",t.GET_SELECTED_ITEM="GET_SELECTED_ITEM",t.FILTER_ITEMS="FILTER_ITEMS"},15:function(e,t){e.exports=ReactDOM},155:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(156);t.isValidRoute=({page:e,sort:t,order:s,check:n})=>{switch(n){case a.PAGE:return!!Number.isInteger(parseInt(e));case a.SORT:return!![a.ID,a.NAME,a.DESIGNATION,a.JOINING_DATE,a.DEPARTMENT].includes(t);case a.ORDER:return"asc"==s||"desc"==s;default:return!1}}},156:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ID="id",t.NAME="name",t.DESIGNATION="designation",t.JOINING_DATE="joining_date",t.DEPARTMENT="department",t.PAGE="page",t.SORT="sort",t.ORDER="order"},162:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1),n=s(15),r=s(17),l=s(14),i=s(167),c=s(168),o=s(27),d=s(212);s(217);const u=l.createStore(d.RootReducer,l.applyMiddleware(i.default));n.render(a.createElement(r.Provider,{store:u},c.Routes?a.createElement(c.Routes,null):a.createElement(o.Loading,null)),document.getElementById("root"))},168:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1),n=s(169),r=s(175),l=()=>a.createElement(n.BrowserRouter,null,a.createElement(n.Switch,null,a.createElement(n.Route,{path:"/:sort/:order/:page",component:r.default}),a.createElement(n.Route,{path:"/:page",component:r.default}),a.createElement(n.Route,{path:"/",component:r.default}),a.createElement(n.Route,{component:r.default})));t.Routes=l,t.default=l},175:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1),n=s(17),r=s(176),l=s(199),i=s(201),c=s(27),o=s(203),d=s(155),u=s(206);s(211);class p extends a.Component{constructor(e){super(e),this.state={posts:[],currentPage:1,showAll:!1},this.onClickPagination=this.onClickPagination.bind(this),this.onClickShowAll=this.onClickShowAll.bind(this)}onClickShowAll(){this.setState({showAll:!this.state.showAll})}onClickPagination({event:e,page:t}){const{sort:s,order:a,pageSize:n}=this.props.filter,r={_page:t,_limit:n,_sort:s,_order:a};this.props.GetPostAction(r),this.setState({currentPage:t}),this.props.history.push(`/${s}/${a}/${t}/`)}componentDidMount(){const{currentPage:e}=this.state,{match:t}=this.props,{sort:s,order:a,pageSize:n}=this.props.filter,r={_page:d.isValidRoute(Object.assign({},t.params,{check:"page"}))?t.params.page:e,_limit:n,_sort:d.isValidRoute(Object.assign({},t.params,{check:"sort"}))?t.params.sort:s,_order:d.isValidRoute(Object.assign({},t.params,{check:"order"}))?t.params.order:a};this.props.GetPostAction(r)}componentDidUpdate(e){if(e.filter!==this.props.filter){const{sort:e,order:t,pageSize:s}=this.props.filter,{page:a}=this.props.match.params,n={_page:a,_limit:s,_sort:e,_order:t};this.setState({currentPage:a}),this.props.GetPostAction(n)}}render(){const{posts:e,selected:t}=this.props,{loading:s}=e,n=this.props.posts&&this.props.posts.data&&this.props.posts.data.data?Object.keys(this.props.posts.data.data[0]):[],r=this.props.posts&&this.props.posts.data&&this.props.posts.data.data?this.props.posts.data.data:[],d=Object.keys(t.selected).length>0,{data:p}=e,m=!!p&&Object.keys(p).length>0,{previous:j,next:h,previous_page_number:g,next_page_number:f,current:E,total:b,count:_}=p,{showAll:O}=this.state;return s?a.createElement(c.Loading,null):a.createElement(a.Fragment,null,a.createElement(i.Navbar,null),a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row common-header-container"},a.createElement("div",{className:"col"},a.createElement("div",{className:"common-header"},a.createElement("div",{className:"selected-item"},d?a.createElement(o.PersonInfo,{selected:t}):a.createElement("div",null,"You did not select any item")),a.createElement("div",{className:"pagination-container"},a.createElement("ul",{className:"pagination"},j&&m?a.createElement("li",{className:`page-item  ${O?"d-none":""}`,onClick:e=>this.onClickPagination({event:e,page:g})},a.createElement("a",{className:"page-link"},"Previous")):a.createElement("li",{className:`page-item disabled ${O?"d-none":""}`},a.createElement("a",{className:"page-link"},"Previous")),[E,E+1,E+2].map((e,t)=>a.createElement("li",{className:`page-item ${0==t?"active":""} ${O?"d-none":""}`,key:t,onClick:t=>this.onClickPagination({event:t,page:e})},a.createElement("a",{className:"page-link"},e))),h&&m?a.createElement("li",{className:`page-item ${O?"d-none":""}`,onClick:e=>this.onClickPagination({event:e,page:f})},a.createElement("a",{className:"page-link"},"Next")):a.createElement(a.Fragment,null),a.createElement("li",{className:"page-item",onClick:this.onClickShowAll},a.createElement("a",{className:"page-link"},O?"Pagination":"Scrolling")),a.createElement("li",{className:"page-item"},a.createElement("a",{className:"page-link"},_," / ",b))))))),a.createElement("div",{className:"row mb-4"},a.createElement("div",{className:"col"},a.createElement("div",{className:"table-container"},r.length>0?a.createElement(u.default,Object.assign({tableHead:n,tableData:r},this.props)):a.createElement(c.Loading,null))))),a.createElement(l.Footer,null))}}t.App=p;const m={GetPostAction:r.GetPostAction};t.default=n.connect(({posts:e,selected:t,filter:s})=>({posts:e,selected:t,filter:s}),m)(p)},176:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(10),n=s(177);t.GetPostAction=(e={})=>t=>{const s=e=>{if(e.headers.link){const{next:s,previous:n}=e.headers.link.split(",").reduce((e,t)=>t.indexOf('rel="prev"')>-1?Object.assign({},e,{previous:t.trim().replace('>; rel="prev"',"").replace("<","")}):t.indexOf('rel="next"')>-1?Object.assign({},e,{next:t.trim().replace('>; rel="next"',"").replace("<","")}):e,{next:null,previous:null}),r=e.config.params._limit?parseInt(e.config.params._limit):20,l=e.config.params._page?parseInt(e.config.params._page):1,i=l?l*r:r,c=e.headers["x-total-count"];t({type:a.GET_POST_SUCCESS,data:Object.assign({},e,{next:s,previous:n,current:l,count:i,total:c,limit:r,next_page_number:s?l+1:null,previous_page_number:n?l-1:null}),loading:!1,status:"success"})}else t({type:a.GET_POST_SUCCESS,data:Object.assign({},e,{total:e.data.length,count:e.data.length}),loading:!1,status:"success"})},r=e=>{t({type:a.GET_POST_ERROR,data:e.response,loading:!1,status:"error"})};Object.keys(e).length>0?n.ApiHelper.posts(e).then(s).catch(r):n.ApiHelper.posts({_sort:"id",_order:"asc"}).then(s).catch(r)}},177:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(178);t.URL="https://heroku-fake-rest-api.herokuapp.com/";const n=({url:e,params:s={}})=>{const{_page:n,_limit:r}=s,l=(e=>t.URL+e)(e);return n&&r?a.default.get(l,{params:s}):a.default.get(l)};t.ApiHelper={posts:e=>n({url:"posts/",params:e})}},178:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(179);a.default.defaults.xsrfHeaderName="X-CSRFToken",a.default.defaults.xsrfCookieName="csrftoken",a.default.defaults.withCredentials=!0,t.default=a.default},199:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1);s(200),t.Footer=()=>a.createElement("footer",null,a.createElement("div",null,"© ",(new Date).getFullYear()," All Rights Reserved, Photon Development"))},201:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1),n=()=>a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top"},a.createElement("a",{className:"navbar-brand"},"Api Table"));t.Navbar=n,t.default=n},203:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1),n=s(0),r=({selected:e})=>a.createElement("div",{className:"selected"},a.createElement("span",null,"Selected Item:  "),a.createElement("span",null,e.selected.name,"  "),a.createElement("span",null,e.selected.designation,"  "),a.createElement("span",null,n(e.selected.joining_date.substring(0,10)).format("MMMM Do YYYY"),"  "),a.createElement("span",null,e.selected.department));t.PersonInfo=r,t.default=r},205:function(e,t,s){var a={"./af":28,"./af.js":28,"./ar":29,"./ar-dz":30,"./ar-dz.js":30,"./ar-kw":31,"./ar-kw.js":31,"./ar-ly":32,"./ar-ly.js":32,"./ar-ma":33,"./ar-ma.js":33,"./ar-sa":34,"./ar-sa.js":34,"./ar-tn":35,"./ar-tn.js":35,"./ar.js":29,"./az":36,"./az.js":36,"./be":37,"./be.js":37,"./bg":38,"./bg.js":38,"./bm":39,"./bm.js":39,"./bn":40,"./bn.js":40,"./bo":41,"./bo.js":41,"./br":42,"./br.js":42,"./bs":43,"./bs.js":43,"./ca":44,"./ca.js":44,"./cs":45,"./cs.js":45,"./cv":46,"./cv.js":46,"./cy":47,"./cy.js":47,"./da":48,"./da.js":48,"./de":49,"./de-at":50,"./de-at.js":50,"./de-ch":51,"./de-ch.js":51,"./de.js":49,"./dv":52,"./dv.js":52,"./el":53,"./el.js":53,"./en-SG":54,"./en-SG.js":54,"./en-au":55,"./en-au.js":55,"./en-ca":56,"./en-ca.js":56,"./en-gb":57,"./en-gb.js":57,"./en-ie":58,"./en-ie.js":58,"./en-il":59,"./en-il.js":59,"./en-nz":60,"./en-nz.js":60,"./eo":61,"./eo.js":61,"./es":62,"./es-do":63,"./es-do.js":63,"./es-us":64,"./es-us.js":64,"./es.js":62,"./et":65,"./et.js":65,"./eu":66,"./eu.js":66,"./fa":67,"./fa.js":67,"./fi":68,"./fi.js":68,"./fo":69,"./fo.js":69,"./fr":70,"./fr-ca":71,"./fr-ca.js":71,"./fr-ch":72,"./fr-ch.js":72,"./fr.js":70,"./fy":73,"./fy.js":73,"./ga":74,"./ga.js":74,"./gd":75,"./gd.js":75,"./gl":76,"./gl.js":76,"./gom-latn":77,"./gom-latn.js":77,"./gu":78,"./gu.js":78,"./he":79,"./he.js":79,"./hi":80,"./hi.js":80,"./hr":81,"./hr.js":81,"./hu":82,"./hu.js":82,"./hy-am":83,"./hy-am.js":83,"./id":84,"./id.js":84,"./is":85,"./is.js":85,"./it":86,"./it-ch":87,"./it-ch.js":87,"./it.js":86,"./ja":88,"./ja.js":88,"./jv":89,"./jv.js":89,"./ka":90,"./ka.js":90,"./kk":91,"./kk.js":91,"./km":92,"./km.js":92,"./kn":93,"./kn.js":93,"./ko":94,"./ko.js":94,"./ku":95,"./ku.js":95,"./ky":96,"./ky.js":96,"./lb":97,"./lb.js":97,"./lo":98,"./lo.js":98,"./lt":99,"./lt.js":99,"./lv":100,"./lv.js":100,"./me":101,"./me.js":101,"./mi":102,"./mi.js":102,"./mk":103,"./mk.js":103,"./ml":104,"./ml.js":104,"./mn":105,"./mn.js":105,"./mr":106,"./mr.js":106,"./ms":107,"./ms-my":108,"./ms-my.js":108,"./ms.js":107,"./mt":109,"./mt.js":109,"./my":110,"./my.js":110,"./nb":111,"./nb.js":111,"./ne":112,"./ne.js":112,"./nl":113,"./nl-be":114,"./nl-be.js":114,"./nl.js":113,"./nn":115,"./nn.js":115,"./pa-in":116,"./pa-in.js":116,"./pl":117,"./pl.js":117,"./pt":118,"./pt-br":119,"./pt-br.js":119,"./pt.js":118,"./ro":120,"./ro.js":120,"./ru":121,"./ru.js":121,"./sd":122,"./sd.js":122,"./se":123,"./se.js":123,"./si":124,"./si.js":124,"./sk":125,"./sk.js":125,"./sl":126,"./sl.js":126,"./sq":127,"./sq.js":127,"./sr":128,"./sr-cyrl":129,"./sr-cyrl.js":129,"./sr.js":128,"./ss":130,"./ss.js":130,"./sv":131,"./sv.js":131,"./sw":132,"./sw.js":132,"./ta":133,"./ta.js":133,"./te":134,"./te.js":134,"./tet":135,"./tet.js":135,"./tg":136,"./tg.js":136,"./th":137,"./th.js":137,"./tl-ph":138,"./tl-ph.js":138,"./tlh":139,"./tlh.js":139,"./tr":140,"./tr.js":140,"./tzl":141,"./tzl.js":141,"./tzm":142,"./tzm-latn":143,"./tzm-latn.js":143,"./tzm.js":142,"./ug-cn":144,"./ug-cn.js":144,"./uk":145,"./uk.js":145,"./ur":146,"./ur.js":146,"./uz":147,"./uz-latn":148,"./uz-latn.js":148,"./uz.js":147,"./vi":149,"./vi.js":149,"./x-pseudo":150,"./x-pseudo.js":150,"./yo":151,"./yo.js":151,"./zh-cn":152,"./zh-cn.js":152,"./zh-hk":153,"./zh-hk.js":153,"./zh-tw":154,"./zh-tw.js":154};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=205},206:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1),n=s(17),r=s(207),l=s(208),i=s(209),c=s(210),o=s(156),d=s(155),u={id:"asc",name:"asc",designation:"asc",joining_date:"asc",department:"asc"};class p extends a.Component{constructor(e){super(e),this.state={selected:{},filtering:Object.assign({},u)},this.onClickTableRow=this.onClickTableRow.bind(this),this.onDblClickOutsideTable=this.onDblClickOutsideTable.bind(this),this.onClickSortOrder=this.onClickSortOrder.bind(this),this.performFiltering=this.performFiltering.bind(this)}performFiltering(e){const{filter:t}=this.props,{filtering:s}=this.state,{params:a}=this.props.match;this.setState({filtering:Object.assign({},u,{[e]:"asc"==s[e]?"desc":"asc"})}),this.props.FilterAction(Object.assign({},t,{sort:e,order:"asc"==s[e]?"desc":"asc"}));const n=`/${e}/${"asc"==s[e]?"desc":"asc"}/${d.isValidRoute(Object.assign({},a,{check:"page"}))?a.page:1}/`;this.props.history.push(n)}onClickSortOrder({event:e,tableHeadName:t}){switch(t){case o.ID:return this.performFiltering(o.ID);case o.NAME:return this.performFiltering(o.NAME);case o.DESIGNATION:return this.performFiltering(o.DESIGNATION);case o.JOINING_DATE:return this.performFiltering(o.JOINING_DATE);case o.DEPARTMENT:return this.performFiltering(o.DEPARTMENT)}}onClickTableRow({event:e,selected:t}){this.props.GetSelectedItem({selected:t}),localStorage.setItem("selected",JSON.stringify(t)),this.setState({selected:t})}onDblClickOutsideTable(e){e.target.closest(".navbar")&&(this.props.GetSelectedItem({selected:""}),localStorage.setItem("selected",JSON.stringify({})),this.setState({selected:{}}))}componentDidMount(){const e=localStorage.getItem("selected"),{sort:t,order:s}=this.props.match.params,a={id:t==o.ID?s:"asc",name:t==o.NAME?s:"asc",designation:t==o.DESIGNATION?s:"asc",joining_date:t==o.JOINING_DATE?s:"asc",department:t==o.DEPARTMENT?s:"asc"};e&&(this.setState({selected:JSON.parse(e),filtering:a}),this.props.GetSelectedItem({selected:JSON.parse(e)})),e||this.setState(Object.assign({},this.state,{filtering:a})),window.addEventListener("dblclick",this.onDblClickOutsideTable)}componentWillUnmount(){window.removeEventListener("dblclick",this.onDblClickOutsideTable)}render(){const{selected:e,filtering:t}=this.state,{tableHead:s,tableData:n}=this.props,r=s.map(e=>c.Capitalize(e)),l=Object.keys(e).length>0;return a.createElement(a.Fragment,null,a.createElement("table",{className:"table hover"},a.createElement("thead",null,a.createElement("tr",null,s.map((e,n)=>a.createElement("th",{key:n},a.createElement("span",{onClick:e=>this.onClickSortOrder({event:e,tableHeadName:s[n]})},r[n],"  ","asc"==t[s[n]]?a.createElement("small",null,a.createElement("i",{className:"fas fa-arrow-up"})):a.createElement("small",null,a.createElement("i",{className:"fas fa-arrow-down"}))))))),a.createElement("tbody",null,n.map(t=>a.createElement("tr",{onClick:e=>this.onClickTableRow({event:e,selected:t}),key:t.id,className:`table-data-${t.id} ${e.id==t.id&&l?"active":""}`},Object.keys(t).map((e,s)=>a.createElement("td",{key:s,className:`${e}`},i.DateTimeConversion(t[e]))))))))}}t.Table=p;const m={GetSelectedItem:l.GetSelectedItem,FilterAction:r.FilterAction};t.default=n.connect(({selected:e,filter:t})=>({selected:e,filter:t}),m)(p)},207:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(10);t.FilterAction=(e={})=>t=>{const{sort:s,order:n,pageSize:r}=e;t({type:a.FILTER_ITEMS,sort:s,order:n,pageSize:r})}},208:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(10);t.GetSelectedItem=(e={})=>t=>{const{selected:s}=e;t({type:a.GET_SELECTED_ITEM,selected:s})}},209:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(0),n=e=>{const t=/\d{4}-\d{2}-\d{2}/;return t.test(e)?a(e.substring(0,10)).format("MMMM Do YYYY"):t.test(e)?void 0:e};t.DateTimeConversion=n,t.default=n},210:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Capitalize=e=>e.replace(/[ ]+/g,"_").split("_").map(e=>e[0].toUpperCase()+e.slice(1)).join(" ")},212:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(14),n=s(213),r=s(215),l=s(216);t.RootReducer=a.combineReducers({posts:n.PostReducer,selected:r.SelectedReducer,filter:l.FilterReducer})},213:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(10),n=s(214);t.PostReducer=(e=n.DefaultState,t)=>{switch(t.type){case a.GET_POST_SUCCESS:case a.GET_POST_ERROR:return Object.assign({},e,t);default:return e}}},214:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultState={type:null,data:{},loading:!0,status:null}},215:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(10),n={type:"",selected:""};t.SelectedReducer=(e=n,t)=>{switch(t.type){case a.GET_SELECTED_ITEM:return Object.assign({},e,t);default:return e}}},216:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(10),n={type:"",sort:"id",order:"asc",pageSize:20};t.FilterReducer=(e=n,t)=>{switch(t.type){case a.FILTER_ITEMS:return Object.assign({},e,t);default:return e}}},27:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=s(1);s(202);const n=()=>a.createElement("div",{className:"loading"},a.createElement("div",{className:"loading-container"},a.createElement("span",{className:"loading-circle"})));t.Loading=n,t.default=n}},[[162,24,10,1,14,25,2,12,15,23,3,4,13,20,5,6,7,8,9,11,16,18,17,19,21,22]]]);