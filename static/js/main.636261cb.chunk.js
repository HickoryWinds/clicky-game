(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","guessed":"false"},{"id":2,"image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","guessed":"false"},{"id":3,"image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","guessed":"false"},{"id":4,"image":"https://static.tvtropes.org/pmwiki/pub/images/daggett.png","guessed":"false"},{"id":5,"image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","guessed":"false"},{"id":6,"image":"https://static.tvtropes.org/pmwiki/pub/images/crow_2018.png","guessed":"false"},{"id":7,"image":"https://static.tvtropes.org/pmwiki/pub/images/13860358235050_3319.jpg","guessed":"false"},{"id":8,"image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","guessed":"false"},{"id":9,"image":"https://static.tvtropes.org/pmwiki/pub/images/p185307_n514094_cc_v3_aa_6423.jpg","guessed":"false"},{"id":10,"image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","guessed":"false"},{"id":11,"image":"https://static.tvtropes.org/pmwiki/pub/images/oblina.png","guessed":"false"},{"id":12,"image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","guessed":"false"}]')},,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(3),r=a.n(i),o=(a(15),a(4)),c=a(5),l=a(9),u=a(6),g=a(1),m=a(8);a(16);var d=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.removeFriend(e.id,e.guessed)},className:"remove"})))};a(17);var p=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(18);var f=function(e){return n.a.createElement("h3",{className:"title"},e.children)};a(19);var h=function(e){return n.a.createElement("h3",{className:"instructions"},"Test your memory.",n.a.createElement("br",null),"You win by clicking on each of the images only once.",n.a.createElement("br",null),"Your Current Score increases by one for each click.",n.a.createElement("br",null)," If you click on an image twice you lose.",n.a.createElement("br",null)," You can start a new game by clicking on an image.",n.a.createElement("br",null),"Your Top Score is displayed until the page is exited of refreshed.")};a(20);var v=function(e){return n.a.createElement("h3",{className:"currentScore"},e.children)};a(21);var b=function(e){return n.a.createElement("h3",{className:"topScore"},e.children)};a(22);var k=function(e){return n.a.createElement("h3",{className:"message"},e.children)},w=a(7),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={friends:w,cscore:0,tscore:0,initial:!0,message:"Let the game begin!"},a.reorderFriends=function(e){var t=Math.floor(12*Math.random()),s=e[t];e.splice(t,1),e.unshift(s);var n=Math.floor(12*Math.random()),i=e[n];e.splice(n,1),e.unshift(i);var r=Math.floor(12*Math.random()),o=e[r];e.splice(r,1),e.unshift(o),a.setState(e)},a.removeFriend=function(e,t){a.state.initial;a.setState({message:"Good Luck!"});var s=a.state.friends;if("true"===t&&a.state.cscore<11){a.setState({message:"Game Over"}),setTimeout(function(){this.setState({cscore:0})}.bind(Object(g.a)(a)),3e3);for(var n=0;n<s.length;n++)s[n].guessed="false"}else if(function(e,t){for(var a=0;a<t.length;a++)t[a].id===e&&(t[a].guessed="true")}(e,s),a.setState({cscore:a.state.cscore+1}),a.state.cscore>=a.state.tscore&&(a.setState({tscore:a.state.cscore+1}),a.setState({message:"New High Score!"})),11!==a.state.cscore)a.setState({friends:s}),a.reorderFriends(s);else{a.setState({message:"You Win!"}),setTimeout(function(){this.setState({cscore:0})}.bind(Object(g.a)(a)),3e3);for(var i=0;i<s.length;i++)s[i].guessed="false"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p,null,n.a.createElement(f,null,"Clicky Game"),n.a.createElement(h,null,"Instructions"),n.a.createElement(v,null,"Current Score: ",this.state.cscore),n.a.createElement(b,null,"Top Score: ",this.state.tscore),n.a.createElement(k,null,this.state.message),this.state.friends.map((function(t){return n.a.createElement(d,{removeFriend:e.removeFriend,image:t.image,key:t.id,id:t.id,guessed:t.guessed})})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.636261cb.chunk.js.map