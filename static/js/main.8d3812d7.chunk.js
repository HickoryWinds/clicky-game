(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","guessed":"false"},{"id":2,"image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","guessed":"false"},{"id":3,"image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","guessed":"false"},{"id":4,"image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","guessed":"false"},{"id":5,"image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","guessed":"false"},{"id":6,"image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","guessed":"false"},{"id":7,"image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","guessed":"false"},{"id":8,"image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","guessed":"false"},{"id":9,"image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","guessed":"false"},{"id":10,"image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","guessed":"false"},{"id":11,"image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","guessed":"false"},{"id":12,"image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","guessed":"false"}]')},,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(2),r=a.n(i),o=(a(14),a(3)),c=a(4),l=a(7),g=a(5),m=a(8);a(15);var u=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})),n.a.createElement("span",{onClick:function(){return e.removeFriend(e.id,e.guessed)},className:"remove"},"x"))};a(16);var d=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(17);var f=function(e){return n.a.createElement("h3",{className:"title"},e.children)};a(18);var h=function(e){return n.a.createElement("h3",{className:"currentScore"},e.children)};a(19);var p=function(e){return n.a.createElement("h3",{className:"topScore"},e.children)};a(20);var v=function(e){return n.a.createElement("h3",{className:"message"},e.children)},k=a(6),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={friends:k,cscore:0,tscore:0,message:"Let the game begin!"},a.reorderFriends=function(e){var t=Math.floor(12*Math.random()),s=e[t];e.splice(t,1),e.unshift(s);var n=Math.floor(12*Math.random()),i=e[n];e.splice(n,1),e.unshift(i);var r=Math.floor(12*Math.random()),o=e[r];e.splice(r,1),e.unshift(o),a.setState(e)},a.removeFriend=function(e,t){a.setState({message:"Good Luck!"});var s=a.state.friends;if("true"===t&&a.state.cscore<11){a.setState({message:"Game Over"}),a.setState({cscore:0});for(var n=0;n<s.length;n++)s[n].guessed="false"}else if(function(e,t){for(var a=0;a<t.length;a++)t[a].id===e&&(t[a].guessed="true")}(e,s),a.setState({cscore:a.state.cscore+1}),a.state.cscore>=a.state.tscore&&(a.setState({tscore:a.state.cscore+1}),a.setState({message:"New High Score!"})),11!==a.state.cscore)a.setState({friends:s}),a.reorderFriends(s);else{a.setState({message:"You Win!"}),a.setState({cscore:0});for(var i=0;i<s.length;i++)s[i].guessed="false"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement(f,null,"Clicky Game"),n.a.createElement(h,null,"Current Score: ",this.state.cscore),n.a.createElement(p,null,"Top Score: ",this.state.tscore),n.a.createElement(v,null,this.state.message),this.state.friends.map((function(t){return n.a.createElement(u,{removeFriend:e.removeFriend,image:t.image,key:t.id,id:t.id,guessed:t.guessed})})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8d3812d7.chunk.js.map