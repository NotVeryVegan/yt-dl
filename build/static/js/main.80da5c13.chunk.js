(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),c=(a(23),a(2)),s=a(3),l=a(4),u=a(5),d=a(6),m=a(17),h=a.n(m),p=(a(41),a(42),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"download",value:function(){window.location.replace("http://ytdl-download.herokuapp.com/api/download/"+this.props.id)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Video"},o.a.createElement("img",{src:this.props.image,alt:this.props.title,className:"Image"}),o.a.createElement("h3",{className:"Title"},this.props.title),o.a.createElement("h4",{className:"Author"},this.props.author),o.a.createElement("button",{onClick:function(){return e.download()},className:"Download"},"Download"))}}]),a}(o.a.Component)),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={videos:[],query:""},n.load=n.load.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"load",value:function(){var e=this;h.a.post("api/search/",{query:this.state.query},{headers:{"Content-Type":"application/json"}}).then((function(t){return e.setState({videos:t.data.videos})})).catch((function(e){return console.error(e.response)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Search"},o.a.createElement("h1",null,"YTDL"),o.a.createElement("div",{className:"Bar"},o.a.createElement("input",{type:"text",onChange:function(t){return e.setState({query:t.target.value})}}),o.a.createElement("button",{onClick:function(){return e.load()},className:"Load"},"Search"))),o.a.createElement("div",{className:"Videos"},this.state.videos.map((function(e){return o.a.createElement(p,{title:e.title,author:e.author.name,url:e.url,image:e.image,id:e.videoId,key:e.videoId})}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.80da5c13.chunk.js.map