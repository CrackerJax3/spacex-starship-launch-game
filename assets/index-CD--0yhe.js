var S=o=>{throw TypeError(o)};var k=(o,t,i)=>t.has(o)||S("Cannot "+i);var p=(o,t,i)=>(k(o,t,"read from private field"),i?i.call(o):t.get(o)),b=(o,t,i)=>t.has(o)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();var l,m;class F{constructor(t=[]){b(this,l,[]);b(this,m,[]);for(let i=0;i<t.length;i+=1)p(this,l).push(t[i])}addEventListener(t,i){return p(this,m).push({name:t,_callback:i,callback:i.bind(this)})}removeEventListener(t){for(let i=0;i<p(this,m).length;i+=1)if(p(this,m)[i].name===t)return p(this,m).splice(i,1),!0;return!1}dispatchEvent(t,...i){for(let s=0;s<p(this,m).length;s+=1)p(this,m)[s].name===t&&p(this,m)[s].callback(...i)}add(...t){for(let i=0;i<t.length;i+=1)p(this,l).push(t[i])}remove(t){for(let i=0;i<p(this,l).length;i+=1)if(p(this,l)[i]===t)return p(this,l).splice(i,1),!0;return!1}update(t){this.dispatchEvent("update",t);for(let i=0;i<p(this,l).length;i+=1)p(this,l)[i].update(t)}render(t,i){this.dispatchEvent("render",t,i);for(let s=0;s<p(this,l).length;s+=1)p(this,l)[s].render(t,i)}}l=new WeakMap,m=new WeakMap;const I=Math.PI/180;var y;class g{constructor(t,i,s,e){b(this,y,[]);this.x=t,this.y=i,this.rotation=s,this.image=e,this.velocity={x:0,y:0,rotation:0}}addEventListener(t,i){return p(this,y).push({name:t,_callback:i,callback:i.bind(this)})}removeEventListener(){for(let t=0;t<p(this,y).length;t+=1)if(p(this,y)[t].name)return p(this,y).splice(t,1),!0;return!1}dispatchEvent(t,...i){for(let s=0;s<p(this,y).length;s+=1)p(this,y)[s].name===t&&p(this,y)[s].callback(...i)}update(t){for(this.dispatchEvent("update",t),this.x+=this.velocity.x,this.y+=this.velocity.y,this.rotation+=this.velocity.rotation,this.rotation%=360;this.rotation<0;)this.rotation+=360;for(;this.rotation>360;)this.rotation-=360}render(t,i){this.dispatchEvent("render",t),t.translate(this.x+i.x,this.y+i.y),t.rotate(this.rotation*I),t.drawImage(this.image,-this.image.width/2,-this.image.height/2),t.setTransform(1,0,0,1,0,0)}}y=new WeakMap;const O=Math.PI/180,P=.8;class M extends g{constructor(t,i,s,e,n){super(t,i,s*O,null),this.force=e,this.colour=n,this.colour.length<4&&this.colour.push(1)}update(t){this.dispatchEvent("update",t),this.x+=Math.cos(this.rotation)*this.force*t,this.y+=Math.sin(this.rotation)*this.force*t,this.force+=this.force*P*t}render(t,i){this.dispatchEvent("render",t,i),t.translate(this.x+i.x,this.y+i.y),t.rotate(this.rotation),t.fillStyle=`rgba(${this.colour[0]},${this.colour[1]},${this.colour[2]},${this.colour[3]})`,t.fillRect(-2,-2,4,4),t.setTransform(1,0,0,1,0,0)}}const T=Math.PI/180,C=1800,K=200,D=800,L=-2e4;class j extends g{constructor(t,i,s,e,n){super(t,i,s,e),this.gravity=!0,this.game=n}thrust(t){this.velocity.x+=Math.cos(this.rotation*T)*C*t,this.velocity.y+=Math.sin(this.rotation*T)*C*t*(this.game.input.thrustAmplification||1)}rotate(t){this.velocity.rotation+=K*t*(this.game.input.rotationAmplification||1)}updateControl(t){this.game.objective.controlShip===this&&((this.game.input.KeyW||this.game.input.ArrowUp||this.game.input.Space)&&this.thrust(t),(this.game.input.KeyA||this.game.input.ArrowLeft)&&this.rotate(-t),(this.game.input.KeyD||this.game.input.ArrowRight)&&this.rotate(t),this.game.input.Escape&&(this.game.input.Escape=!1,this.game.explosion(this.x,this.y,50,500),this.game.scene.remove(this),setTimeout(()=>{this.game.reset()},1e3)),this.y>this.game.groundLevel+50&&(this.game.explosion(this.x,this.y,50,500),this.game.scene.remove(this),setTimeout(()=>{this.game.reset()},1e3)),this.game.input.KeyR&&(this.game.input.KeyR=!1,this.game.reset()))}update(t){for(this.dispatchEvent("update",t),this.x+=this.velocity.x*t,this.y+=this.velocity.y*t,this.rotation+=this.velocity.rotation*t,this.rotation%=360;this.rotation<0;)this.rotation+=360;for(;this.rotation>360;)this.rotation-=360;this.velocity.x-=this.velocity.x*.99*t,this.velocity.y-=this.velocity.y*.99*t,this.gravity&&(this.velocity.y+=D*Math.abs((Math.max(this.y,L)-L)/Math.abs(L))*t),this.velocity.rotation-=this.velocity.rotation*.9*t}land(t){this.velocity.x=this.velocity.y=this.velocity.rotation=0,this.rotation+=(270-this.rotation)*t,this.x+=-this.x*t}landBottom(t){this.land(t),this.y+=(145-this.y)*t,this.x+=(-140-this.x)*t}landTop(t){this.land(t),this.y+=(180-this.y)*t,this.x+=(160-this.x)*t,this.gravity=!1,Math.round(Math.abs(this.x))===0&&Math.abs(-98-this.y)<1&&Math.abs(270-this.rotation)<1&&(this.x=0,this.rotation=270,this.removeEventListener("update"),this.addEventListener("update",function(){this.y+=(64-this.y)*t,this.game.chopsticks.y+=(81-this.game.chopsticks.y)*t,Math.abs(64-this.y)<1&&(this.removeEventListener("update"),this.game.won=!0)}))}}const v=Math.PI/180,w=100,h=document.createElement("canvas"),a=h.getContext("2d"),r={};window.addEventListener("keydown",({code:o})=>{r[o]=!0});window.addEventListener("keyup",({code:o})=>{r[o]=!1});function A(){r.ArrowUp=!1,r.ArrowLeft=!1,r.ArrowRight=!1,r.MouseDown=!1,r.rotationAmplification=null,r.thrustAmplification=null}function B(o){o.preventDefault(),(o.type==="touchstart"||o.type==="mousedown")&&(r.MouseDown=!0),o.type==="touchstart"||o.type==="touchmove"?(r.x=o.touches[0].clientX,r.y=o.touches[0].clientY):(r.x=o.clientX,r.y=o.clientY);const t=h.width/2,i=h.height/2;r.y<i&&(r.ArrowUp=!0),r.x<t?r.ArrowLeft=!0:r.x>t&&(r.ArrowRight=!0),r.rotationAmplification=Math.abs(t-r.x)/((t+r.x)/2),r.thrustAmplification=(h.height-r.y)/h.height*1.5}window.document.addEventListener("mousedown",B);window.document.addEventListener("mouseup",A);window.document.addEventListener("touchstart",B);window.document.addEventListener("touchend",A);function f(o){const t=new Image;return t.src=o,t}const c={ship:f("./StarshipSprites/fullstack.png"),shipTop:f("./StarshipSprites/starship.png"),shipBottom:f("./StarshipSprites/booster.png"),starlink:f("./images/Starlink.png"),launchpad:f("./images/Launchpad.png"),tower:f("./StarshipSprites/Tower.png"),chopsticks:f("./StarshipSprites/Chopsticks.png"),ground:f("./images/Ground.png"),earth:f("./images/Earth.png"),arrow_white:f("./images/Arrow White.png")};class ${constructor(){this.groundLevel=w,this.input=r,this.started=!1,this.launched=!1,this.launchTime=null,this.starlinksReleased=!1,this.won=!1,this.particles=[],this.stars=[],this.objective={name:"space",text:"Get to orbit!",x:0,y:-2e4,type:"location",controlShip:null},this.Camera={x:0,y:0,smoothing:.2},this.scene=new F;const t=new g(0,220,0,c.ground);this.scene.add(t);const i=new g(0,300,0,c.launchpad);this.scene.add(i);const s=new g(0,40,0,c.tower);this.scene.add(s),this.chopsticks=new g(1,-130,0,c.chopsticks),this.scene.add(this.chopsticks),this.shipFull=new j(0,0,0,c.ship,this),this.shipTop=new j(0,0,0,c.shipTop,this),this.shipBottom=new j(0,0,0,c.shipBottom,this),this.shipFull.rotation=270,this.ship=this.shipFull,this.objective.controlShip=this.ship,this.scene.add(this.ship),this.ship.addEventListener("update",this.ship.updateControl)}explosion(t,i,s,e){const n=this,u=e/5,_=4*u;for(let x=0;x<_;x+=1){const d=new M(t+Math.random()*s-s/2,i+Math.random()*s-s/2,Math.random()*360,100,[255,165,0]);d.start_time=performance.now(),d.addEventListener("update",function(E){d.colour[3]-=E*1,performance.now()-d.start_time>1e3&&n.particles.splice(n.particles.indexOf(this),1)}),n.particles.push(d)}for(let x=0;x<u;x+=1){const d=new M(t+Math.random()*s*2-s,i+Math.random()*s*2-s,Math.random()*360,100,[255,0,0]);d.start_time=performance.now(),d.addEventListener("update",function(E){d.colour[3]-=E*1,performance.now()-d.start_time>1e3&&n.particles.splice(n.particles.indexOf(this),1)}),n.particles.push(d)}}reset(){this.shipFull.gravity=!0,this.shipFull.x=0,this.shipFull.velocity.x=this.shipFull.velocity.y=this.shipFull.velocity.rotation=0,this.shipFull.y=0,this.shipFull.rotation=270,this.shipFull.removeEventListener("update"),this.shipTop.gravity=!0,this.shipTop.x=this.shipTop.y=this.shipTop.rotation=this.shipTop.velocity.x=this.shipTop.velocity.y=this.shipTop.velocity.rotation=0,this.shipTop.removeEventListener("update"),this.shipBottom.gravity=!0,this.shipBottom.x=this.shipBottom.y=this.shipBottom.rotation=this.shipBottom.velocity.x=this.shipBottom.velocity.y=this.shipBottom.velocity.rotation=0,this.shipBottom.removeEventListener("update"),this.scene.remove(this.shipFull),this.scene.remove(this.shipTop),this.scene.remove(this.shipBottom),this.started=!1,this.launched=!1,this.launchTime=null,this.starlinksReleased=!1,this.won=!1,this.objective.name="space",this.objective.text="Get to orbit!",this.objective.x=0,this.objective.y=-2e4,this.objective.type="location",this.ship=this.shipFull,this.objective.controlShip=this.ship,this.ship.addEventListener("update",this.ship.updateControl),this.scene.add(this.ship)}Update(t){const i=this;if(this.started){if((this.launched||this.launchTime-performance.now()<=0)&&(this.launched||(this.launched=!0,this.ship.rotation=-91),this.scene.update(t)),this.objective.name==="space")this.ship.y<this.objective.y&&(this.objective.name="correct position",this.objective.text="Move into the correct position",this.objective.x=5e3,this.objective.y=-25e3);else if(this.objective.name==="correct position")Math.sqrt((this.ship.x-this.objective.x)**2+(this.ship.y-this.objective.y)**2)<1e3&&(this.objective.name="Stage separation",this.objective.text='Initiate stage separation (press "e")',this.objective.type="interact",this.objective.controlShip=null);else if(this.objective.name==="Stage separation")(this.input.KeyE||this.input.MouseDown)&&(this.input.KeyE=!1,this.input.MouseDown=!1,this.shipBottom.x=this.shipTop.x=this.ship.x,this.shipBottom.y=this.shipTop.y=this.ship.y,this.shipBottom.rotation=this.shipTop.rotation=this.ship.rotation,this.shipBottom.velocity.x=this.shipTop.velocity.x=this.shipBottom.velocity.y=this.shipTop.velocity.y=0,this.shipBottom.velocity.rotation=this.shipTop.velocity.rotation=this.ship.velocity.rotation,this.shipTop.x+=Math.cos(this.ship.rotation*v)*100,this.shipTop.y+=Math.sin(this.ship.rotation*v)*100,this.shipTop.thrust(.15),this.shipBottom.x+=Math.cos(this.ship.rotation*v)*-100,this.shipBottom.y+=Math.sin(this.ship.rotation*v)*-100,this.shipBottom.thrust(-.15),this.ship.removeEventListener("update"),this.scene.remove(this.ship),this.ship=this.shipTop,this.objective.controlShip=this.ship,this.ship.addEventListener("update",this.ship.updateControl),this.scene.add(this.ship),this.scene.add(this.shipBottom),this.objective.name="Starlink satellites",this.objective.text='Release the Starlink satellites (press "e")',this.objective.type="interact");else if(this.objective.name==="Starlink satellites"){if(this.ship.velocity.x=this.ship.velocity.y=100,this.ship.velocity.rotation=0,!this.starlinksReleased&&(this.input.KeyE||this.input.MouseDown)){this.input.KeyE=!1,this.input.MouseDown=!1;for(let s=1;s<=10;s+=1){const e=new g(0,0,0,c.starlink);e.id=s,e.addEventListener("update",function(u){this.velocity.x+=Math.cos(this.rotation*v)*15*u,this.velocity.y+=Math.sin(this.rotation*v)*15*u,(Math.abs(i.ship.x-this.x)>h.width||Math.abs(i.ship.y-this.y)>h.height)&&(i.scene.remove(this),this.id===10&&(i.objective.name="landing pad",i.objective.text='Land the booster (press "c" to catch Booster at tower arms)',i.objective.type="location",i.objective.x=0,i.objective.y=-80,i.ship.removeEventListener("update"),i.ship=i.shipBottom,i.objective.controlShip=i.ship,i.ship.addEventListener("update",i.ship.updateControl)))}),setTimeout(()=>{e.x=i.ship.x+Math.cos(i.ship.rotation*v)*-5,e.y=i.ship.y+Math.sin(i.ship.rotation*v)*-5,e.rotation=i.ship.rotation-90,i.scene.add(e)},e.id*500)}this.starlinksReleased=!0}}else this.objective.name==="landing pad"&&(this.objective.text==='Land the booster (press "c" to catch Booster at tower arms)'?(this.input.KeyC||this.input.MouseDown)&&Math.abs(this.ship.x-this.objective.x)<50&&Math.abs(this.ship.y-this.objective.y)<50&&this.ship.rotation>250&&this.ship.rotation<290&&(this.input.KeyC=!1,this.input.MouseDown=!1,this.ship.removeEventListener("update"),this.ship.addEventListener("update",this.ship.landBottom),this.ship=this.shipTop,this.objective.controlShip=this.ship,this.ship.addEventListener("update",this.ship.updateControl),this.objective.text='Land the Starship (press "c" to catch Starship at tower arms)'):this.objective.text==='Land the Starship (press "c" to catch Starship at tower arms)'&&(this.input.KeyC||this.input.MouseDown)&&Math.abs(this.ship.x-this.objective.x)<50&&Math.abs(this.ship.y-this.objective.y)<50&&this.ship.rotation>250&&this.ship.rotation<290&&(this.input.KeyC=!1,this.input.MouseDown=!1,this.ship.removeEventListener("update"),this.ship.addEventListener("update",this.ship.landTop),this.objective.text="",this.objective.controlShip=null,this.objective.type="animation"));if(this.objective.controlShip&&(this.input.KeyW||this.input.ArrowUp||this.input.Space)&&this.particles.length<100)for(let s=0;s<4;s+=1){const e=(this.ship.rotation+180)*v,n=new M(this.ship.x+Math.cos(e)*(220+Math.random()*40-20),this.ship.y+Math.sin(e)*(220+Math.ceil(Math.random()*20)),this.ship.rotation+180+Math.random()*30-15,800,[140,20,252]);n.created_at=performance.now(),n.addEventListener("update",function(){performance.now()-n.created_at>=100&&i.particles.splice(i.particles.indexOf(this),1)}),this.particles.push(n)}}else(this.input.KeyW||this.input.ArrowUp||this.input.Space)&&(this.started=!0,this.launchTime=performance.now()+5e3,this.launched=!1);for(let s=0;s<this.particles.length;s+=1)this.particles[s].update(t);if(this.ship.y<-15e3){const s=h.width*h.height/5e3;for(;i.stars.length<s;){const e=i.ship.y+Math.random()*h.height-h.height/2,n=new M(i.ship.x+Math.random()*h.width-h.width/2,e,Math.random()*360,0,[255,255,255,e>-18e3?1-(18e3+e)/3e3:1]);n.addEventListener("update",function(){(Math.abs(i.ship.x-this.x)>h.width||Math.abs(i.ship.y-this.y)>h.height)&&i.stars.splice(i.stars.indexOf(this),1)}),this.stars.push(n)}}else this.stars.splice(0,this.stars.length);for(let s=0;s<this.stars.length;s+=1)this.stars[s].update(t);if(this.Camera.x+=(h.width/2-this.ship.x-this.Camera.x)*this.Camera.smoothing,this.Camera.y+=(h.height/2-this.ship.y-this.Camera.y)*this.Camera.smoothing,this.started){const s=Math.floor(Math.abs(this.ship.velocity.x+this.ship.velocity.y)/2),e=.037;this.Camera.x+=Math.random()*s*e-s*e/2,this.Camera.y+=Math.random()*s*e-s*e/2,!this.launched&&this.objective.name==="space"&&(this.input.KeyW||this.input.ArrowUp||this.input.Space)&&(this.Camera.x+=Math.random()*100*e-100*e/2,this.Camera.y+=Math.random()*100*e-100*e/2)}}Render(){a.setTransform(1,0,0,1,0,0);let t=1-Math.abs((Math.max(this.ship.y,-2e4)+2e4)/2e4);a.fillStyle=`rgb(${116-116*t},${162-162*t}, ${255-255*t})`,a.fillRect(0,0,h.width,h.height),this.Camera.y+h.width>this.Camera.y+w+150&&(a.strokeStyle="rgb(10,142,47)",a.lineWidth=8,a.beginPath(),a.moveTo(0,this.Camera.y+w+168),a.lineTo(h.width,this.Camera.y+w+168),a.closePath(),a.stroke(),a.fillStyle="rgb(11,176,58)",a.fillRect(0,this.Camera.y+w+168,h.width,h.height-this.Camera.y+w+150));for(let s=0;s<this.stars.length;s+=1)this.stars[s].render(a,this.Camera);if(this.ship.y<-15e3){t=2-Math.min(-(this.ship.y+15e3)/7500,2);const s=Math.max((this.ship.y+15e3)/100,-200);a.drawImage(c.earth,h.width/2-h.width*t/2,h.height+s,h.width*t,h.width*t)}this.scene.render(a,this.Camera);const i=this;for(let s=0;s<i.particles.length;s+=1)i.Camera.x+i.particles[s].x>=0&&i.Camera.x+i.particles[s].x<=h.width&&i.Camera.y+this.particles[s].y>=0&&i.Camera.y+i.particles[s].y<=h.height&&i.particles[s].render(a,i.Camera);a.fillStyle="#ffffff",a.font="2em Trebuchet MS",a.textAlign="center",this.started?this.launched?this.won&&a.fillText("Mission Success!",Math.floor(h.width/2),Math.floor(h.height/4)):a.fillText(`Launch in T${((performance.now()-this.launchTime)/1e3).toFixed(2)}`,Math.floor(h.width/2),Math.floor(h.height/4)):(a.fillText("Press space or tap to start!",Math.floor(h.width/2),Math.floor(h.height/4)),a.font="1em Trebuchet MS",a.fillText("On mobile, tap higher for thrust, lower half to rotate)",Math.floor(h.width/2),Math.floor(h.height/4)+30)),a.font="1.5em Trebuchet MS",a.textAlign="left",a.fillText(this.objective.text,10,30),a.fillText(`Rotation: ${Math.round(this.ship.rotation)%360}°`,10,55),a.fillText(`Altitude: ${Math.abs(this.ship.y/200).toFixed(2)}km`,10,80),this.objective.type==="location"&&(a.translate(h.width/2,60),a.rotate(Math.atan2(this.objective.y-this.ship.y,this.objective.x-this.ship.x)+Math.PI/2),a.drawImage(c.arrow_white,-c.arrow_white.width/2,-c.arrow_white.height/2),a.setTransform(1,0,0,1,0,0),a.textAlign="center",a.fillText(`${(Math.sqrt((this.ship.x-this.objective.x)**2+(this.ship.y-this.objective.y)**2)/200).toFixed(2)}km to ${this.objective.name}`,h.width/2,130))}}window.addEventListener("load",()=>{function o(){h.width=window.innerWidth,h.height=window.innerHeight}o(),window.addEventListener("resize",o),document.body.append(h);const t=new $,i=100;let s=0;window.requestAnimationFrame(function e(n){t.Update(Math.min(n-s,i)/1e3),t.Render(),s=n,window.requestAnimationFrame(e)})});
