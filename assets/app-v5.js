// Skybound v5: Safari-safe classic runtime. THREE is loaded by a normal <script> before this file.
(function(){
'use strict';
if(!window.THREE || !THREE.Scene){
  const st=document.getElementById('status');
  if(st) st.textContent='3D engine failed to load. Check content blockers, then refresh.';
  document.body.classList.add('renderer-failed');
  return;
}
const app=document.getElementById('app');
const scene=new THREE.Scene();
scene.background=new THREE.Color(0x91adb7);
scene.fog=new THREE.FogExp2(0x91adb7,0.00027);
const camera=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,.1,30000);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)); renderer.setSize(innerWidth,innerHeight);
renderer.outputEncoding=THREE.sRGBEncoding; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.03;
renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFShadowMap; app.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xcfe8f3,0x34482d,2.0));
const sun=new THREE.DirectionalLight(0xfff2d0,3.2); sun.position.set(-1200,1800,900); sun.castShadow=true; sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left=-900;sun.shadow.camera.right=900;sun.shadow.camera.top=900;sun.shadow.camera.bottom=-900;sun.shadow.bias=-.0005;scene.add(sun);

function canvasTexture(base='#5f6263', speckles=true){const c=document.createElement('canvas');c.width=c.height=512;const x=c.getContext('2d');x.fillStyle=base;x.fillRect(0,0,512,512);if(speckles){for(let i=0;i<1700;i++){let a=Math.random()*.10;x.fillStyle=`rgba(${Math.random()<.5?0:255},${Math.random()<.5?0:255},${Math.random()<.5?0:255},${a})`;let r=Math.random()*2.1;x.fillRect(Math.random()*512,Math.random()*512,r,r)}for(let i=0;i<9;i++){x.strokeStyle='rgba(35,38,40,.22)';x.lineWidth=1;x.beginPath();let yy=i*64;x.moveTo(0,yy);x.lineTo(512,yy);x.stroke();x.beginPath();x.moveTo(yy,0);x.lineTo(yy,512);x.stroke()}}const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.encoding=THREE.sRGBEncoding;return t}
const concreteTex=canvasTexture('#777b7c');concreteTex.repeat.set(20,35);const asphaltTex=canvasTexture('#25292b');asphaltTex.repeat.set(6,45);
const grassTex=canvasTexture('#48673b');grassTex.repeat.set(45,45);

function mesh(g,m,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.receiveShadow=true;o.castShadow=true;scene.add(o);return o}
const island=mesh(new THREE.CircleGeometry(6200,96),new THREE.MeshStandardMaterial({map:grassTex,roughness:1}),0,-3,0); island.rotation.x=-Math.PI/2; island.scale.set(1.45,1,1);
const apron=mesh(new THREE.PlaneGeometry(2100,3400),new THREE.MeshStandardMaterial({map:concreteTex,roughness:.96}),620,.03,0);apron.rotation.x=-Math.PI/2;
const runway=mesh(new THREE.PlaneGeometry(76,4100),new THREE.MeshStandardMaterial({map:asphaltTex,roughness:.9}),-330,.08,0);runway.rotation.x=-Math.PI/2;
const taxiMat=new THREE.MeshStandardMaterial({color:0x454a4b,roughness:.95});
for(const x of[-170,30,230]){const t=mesh(new THREE.PlaneGeometry(38,3500),taxiMat,x,.06,0);t.rotation.x=-Math.PI/2}

// runway/taxi paint
const white=new THREE.MeshBasicMaterial({color:0xf4f5ef}), yellow=new THREE.MeshBasicMaterial({color:0xf0c941});
function stripe(x,z,w,d,mat=white){const q=mesh(new THREE.PlaneGeometry(w,d),mat,x,.12,z);q.rotation.x=-Math.PI/2;return q}
for(let z=-1880;z<1900;z+=110)stripe(-330,z,2.2,58);
for(const side of[-1,1])for(let z=-1960;z<1960;z+=46)stripe(-330+side*36,z,1.2,22);
for(const x of[-170,30,230])for(let z=-1710;z<1720;z+=24)stripe(x,z,1.05,12,yellow);
for(const z of[-1810,1810])for(let i=-3;i<=3;i++)stripe(-330+i*8,z,5,42);
for(const z of[-1200,-1040,1040,1200])for(const x of[-345,-330,-315])stripe(x,z,7,42);

// approach lights
for(const sign of[-1,1])for(let i=0;i<12;i++){const light=new THREE.PointLight(i<3?0xff3333:0xffffff,5,100,2);light.position.set(-330,.9,sign*(2050+i*42));scene.add(light);const bulb=mesh(new THREE.SphereGeometry(.5,7,7),new THREE.MeshBasicMaterial({color:i<3?0xff3333:0xffffff}),-330,.7,sign*(2050+i*42));bulb.castShadow=false}

// Terminal: curved roof + glass curtain wall, not plain blocks
const terminal=new THREE.Group(); terminal.position.set(1080,0,0); scene.add(terminal);
const glassMat=new THREE.MeshPhysicalMaterial({color:0x365563,metalness:.15,roughness:.08,transparent:true,opacity:.72,transmission:.18});
const frameMat=new THREE.MeshStandardMaterial({color:0x273237,metalness:.55,roughness:.35});
const roofMat=new THREE.MeshStandardMaterial({color:0xc5c9c5,metalness:.25,roughness:.5});
const floorMat=new THREE.MeshStandardMaterial({color:0x6e7375,roughness:.9});
for(const z of[-920,0,920]){
  const floor=new THREE.Mesh(new THREE.BoxGeometry(650,4,360),floorMat);floor.position.set(0,2,z);terminal.add(floor);
  const front=new THREE.Mesh(new THREE.BoxGeometry(650,42,4),glassMat);front.position.set(-180,25,z-180);terminal.add(front);
  const back=front.clone();back.position.z=z+180;terminal.add(back);
  for(let xx=-480;xx<160;xx+=28){for(const zz of[z-182,z+182]){const mull=new THREE.Mesh(new THREE.BoxGeometry(1.6,44,2),frameMat);mull.position.set(xx,25,zz);terminal.add(mull)}}
  const roof=new THREE.Mesh(new THREE.CylinderGeometry(205,205,650,40,1,false,0,Math.PI),roofMat);roof.rotation.z=Math.PI/2;roof.rotation.y=Math.PI/2;roof.position.set(-180,45,z);roof.scale.y=.32;terminal.add(roof);
  const spine=new THREE.Mesh(new THREE.BoxGeometry(120,30,380),new THREE.MeshStandardMaterial({color:0x92999a,roughness:.62}));spine.position.set(190,20,z);terminal.add(spine);
}
// terminal central connector
const connector=new THREE.Mesh(new THREE.BoxGeometry(420,34,1400),glassMat);connector.position.set(190,23,0);terminal.add(connector);
terminal.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});

let loader=null; const mixers=[]; let loaderPromise=null;
function getLoader(){
  if(loader) return Promise.resolve(loader);
  if(loaderPromise) return loaderPromise;
  loaderPromise=new Promise((resolve,reject)=>{
    if(THREE.GLTFLoader){loader=new THREE.GLTFLoader();resolve(loader);return;}
    const urls=[
      'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js',
      'https://unpkg.com/three@0.128.0/examples/js/loaders/GLTFLoader.js'
    ];
    let i=0;
    const tryNext=()=>{
      if(i>=urls.length){reject(new Error('GLTFLoader unavailable'));return;}
      const s=document.createElement('script');
      s.src=urls[i++];s.async=true;s.crossOrigin='anonymous';
      s.onload=()=>{if(THREE.GLTFLoader){loader=new THREE.GLTFLoader();resolve(loader)}else tryNext()};
      s.onerror=tryNext;document.head.appendChild(s);
    };
    tryNext();
  });
  return loaderPromise;
}
const loadbar=document.getElementById('loadbar'),loadtext=document.getElementById('loadtext');
let visualLoads=0;
function progress(label){visualLoads++; if(loadbar) loadbar.style.width=Math.min(100,18+visualLoads*16)+'%'; if(loadtext) loadtext.textContent=label; const st=document.getElementById('status'); if(st&&document.getElementById('menu')?.style.display!=='none') st.textContent=label+' · you can already start flying';}
function dismissLoading(){const el=document.getElementById('loading');if(!el)return;el.style.opacity='0';setTimeout(()=>el.remove(),260)}
// Never block the game on remote art. Show the playable scene almost immediately.
setTimeout(dismissLoading,30);
async function loadGLB(url,{pos=[0,0,0],rot=0,scale=1,parent=scene,onLoad}={}){let l;try{l=await getLoader()}catch(e){console.warn('GLB loader unavailable',e);return null}return new Promise(resolve=>l.load(url,g=>{const o=g.scene;o.position.set(...pos);o.rotation.y=rot;o.scale.setScalar(scale);o.traverse(x=>{if(x.isMesh){x.castShadow=true;x.receiveShadow=true}});parent.add(o);onLoad?.(o,g);resolve(o)},undefined,e=>{console.warn('asset load failed',url,e);resolve(null)}))}

// Player aircraft appears instantly as a lightweight fallback, then swaps to the real A320.
const aircraftRoot=new THREE.Group();scene.add(aircraftRoot);let playerVisual=null;
const fallbackPlane=new THREE.Group(); aircraftRoot.add(fallbackPlane);
const fbWhite=new THREE.MeshStandardMaterial({color:0xe7ecec,metalness:.15,roughness:.48});
const fbDark=new THREE.MeshStandardMaterial({color:0x26353d,metalness:.2,roughness:.35});
const body=new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.2,28,24),fbWhite);body.rotation.x=Math.PI/2;fallbackPlane.add(body);const nose=new THREE.Mesh(new THREE.SphereGeometry(2.2,20,12),fbWhite);nose.position.z=-14;fallbackPlane.add(nose);const tailcap=nose.clone();tailcap.position.z=14;fallbackPlane.add(tailcap);
const wing=new THREE.Mesh(new THREE.BoxGeometry(29,.38,6.6),fbWhite);wing.position.z=1.5;fallbackPlane.add(wing);
const tail=new THREE.Mesh(new THREE.BoxGeometry(11,.28,4.5),fbWhite);tail.position.z=12;fallbackPlane.add(tail);
const fin=new THREE.Mesh(new THREE.BoxGeometry(.45,6,4.2),fbDark);fin.position.set(0,3,12);fallbackPlane.add(fin);
for(const x of[-6.3,6.3]){const eng=new THREE.Mesh(new THREE.CylinderGeometry(1.45,1.6,4.5,18),fbDark);eng.rotation.x=Math.PI/2;eng.position.set(x,-1.5,1);fallbackPlane.add(eng)}
fallbackPlane.position.y=2.7;fallbackPlane.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
function normalizeAircraft(o,targetLength=37){const box=new THREE.Box3().setFromObject(o);const size=box.getSize(new THREE.Vector3());let long=Math.max(size.x,size.z),s=targetLength/long;o.scale.multiplyScalar(s);if(size.x>size.z)o.rotation.y=-Math.PI/2;const box2=new THREE.Box3().setFromObject(o),center=box2.getCenter(new THREE.Vector3());o.position.sub(center);o.position.y+=-box2.min.y}
let hdStarted=false;
function startHDAssets(){
  if(hdStarted)return;hdStarted=true;
  if('requestIdleCallback' in window){
    requestIdleCallback(()=>loadGLB('https://raw.githubusercontent.com/amvlab/aircraft-models/main/models/A320_nologo.glb',{parent:aircraftRoot,onLoad:o=>{normalizeAircraft(o,37);playerVisual=o;fallbackPlane.visible=false}}).then(o=>o&&progress('High-detail A320 ready')),{timeout:3500});
  }else setTimeout(()=>loadGLB('https://raw.githubusercontent.com/amvlab/aircraft-models/main/models/A320_nologo.glb',{parent:aircraftRoot,onLoad:o=>{normalizeAircraft(o,37);playerVisual=o;fallbackPlane.visible=false}}).then(o=>o&&progress('High-detail A320 ready')),1800);
  setTimeout(()=>loadGLB('https://cdn.3dassets.dev/assets/26087/v1/model.glb',{pos:[580,0,-540],scale:3.0,rot:-.15}).then(o=>o&&progress('Control tower ready')),4500);
  setTimeout(()=>loadGLB('https://cdn.3dassets.dev/assets/26073/v1/model.glb',{pos:[700,0,0],scale:2.2,rot:-Math.PI/2}).then(o=>o&&progress('Main jet bridge ready')),6500);
}
// The HTML/menu is usable immediately. HD assets are requested only after the first frame settles.
setTimeout(startHDAssets,1200);

// AI traffic is lazy: no network cost until the player actually starts.
const ai=[];let trafficStarted=false;
async function addAI(url,x,z,heading,length=36){const root=new THREE.Group();root.position.set(x,0,z);root.rotation.y=heading;scene.add(root);const o=await loadGLB(url,{parent:root,onLoad:q=>normalizeAircraft(q,length)});if(o)ai.push({root,phase:Math.random()*10,speed:7+Math.random()*2});else scene.remove(root);return o}
function startTraffic(){if(trafficStarted)return;trafficStarted=true;setTimeout(()=>addAI('https://raw.githubusercontent.com/amvlab/aircraft-models/main/models/B737_nologo.glb',30,780,Math.PI,39),1400)}

// Physics — responsive conventional jet, no exaggerated stubbornness
const state={x:-330,y:2.8,z:1450,heading:Math.PI,pitch:0,bank:0,speed:0,vs:0,throttle:.35,grounded:true};
const keys={};addEventListener('keydown',e=>{keys[e.key.toLowerCase()]=true;if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(e.key.toLowerCase()))e.preventDefault()});addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);
function smooth(v,target,rate,dt){return THREE.MathUtils.lerp(v,target,1-Math.exp(-rate*dt))}
function updateFlight(dt){
  if(keys.w)state.throttle=Math.min(1,state.throttle+dt*.32); if(keys.s)state.throttle=Math.max(0,state.throttle-dt*.32);
  const rollInput=(keys.arrowleft?1:0)-(keys.arrowright?1:0), pitchInput=(keys.arrowup?1:0)-(keys.arrowdown?1:0), rudder=(keys.a?1:0)-(keys.d?1:0);
  const speedFactor=THREE.MathUtils.clamp(state.speed/55,.25,1);
  const targetBank=rollInput*THREE.MathUtils.degToRad(30)*speedFactor;
  state.bank=smooth(state.bank,targetBank,rollInput?4.2:3.4,dt); // quick in, naturally levels when released
  const targetPitch=pitchInput*THREE.MathUtils.degToRad(10);
  state.pitch=smooth(state.pitch,targetPitch,pitchInput?3.0:2.2,dt);
  const drag=.20+.00011*state.speed*state.speed;
  const thrust=state.throttle*6.4;
  state.speed=Math.max(0,state.speed+(thrust-drag-(state.grounded?.28:0))*dt);
  const turnRate=(9.81*Math.tan(state.bank)/Math.max(state.speed,38))+rudder*.018;
  state.heading+=turnRate*dt;
  const stall=61; const lift=Math.max(-7,(state.speed-stall)*.115+Math.sin(state.pitch)*state.speed*.44);
  if(state.grounded){state.y=2.8;state.vs=0;if(state.speed>67&&state.pitch>.035)state.grounded=false}else{state.vs=smooth(state.vs,lift,1.5,dt);state.y+=state.vs*dt;if(state.y<2.8){state.y=2.8;state.vs=0;state.grounded=true;state.pitch=0}}
  const forward=state.speed*dt;state.x+=Math.sin(state.heading)*forward;state.z-=Math.cos(state.heading)*forward;
  aircraftRoot.position.set(state.x,state.y,state.z);aircraftRoot.rotation.set(state.pitch,-state.heading,-state.bank,'YXZ');
}

// Camera orbit controls around player
let camMode=0,yaw=.55,pitch=.28,zoom=1,drag=false,px=0,py=0;
renderer.domElement.addEventListener('pointerdown',e=>{drag=true;px=e.clientX;py=e.clientY;renderer.domElement.setPointerCapture?.(e.pointerId)});
renderer.domElement.addEventListener('pointermove',e=>{if(!drag)return;yaw-=(e.clientX-px)*.006;pitch=THREE.MathUtils.clamp(pitch+(e.clientY-py)*.004,-.15,1.05);px=e.clientX;py=e.clientY});
renderer.domElement.addEventListener('pointerup',()=>drag=false);renderer.domElement.addEventListener('pointercancel',()=>drag=false);
renderer.domElement.addEventListener('wheel',e=>zoom=THREE.MathUtils.clamp(zoom*(1+e.deltaY*.0008),.45,2.3),{passive:true});
renderer.domElement.addEventListener('dblclick',()=>{yaw=.55;pitch=.28;zoom=1});
document.getElementById('cameraBtn').onclick=()=>{camMode=(camMode+1)%3;document.getElementById('cameraBtn').textContent=['CAMERA · CHASE','CAMERA · ORBIT','CAMERA · TOWER'][camMode]};
document.getElementById('resetBtn').onclick=()=>location.reload();
document.getElementById('flyBtn').onclick=()=>{document.getElementById('menu').style.display='none';state.speed=55;state.throttle=.65;startTraffic();document.getElementById('status').textContent='Arrow keys pitch/bank · A/D rudder · W/S throttle · drag camera · wheel zoom'};
function updateCamera(){const target=new THREE.Vector3(state.x,state.y+5,state.z);if(camMode===2){camera.position.set(560,82,-530);camera.lookAt(target);return}const dist=(camMode===0?76:125)*zoom;const elev=(camMode===0?24:48)*zoom;const ang=-state.heading+yaw+(camMode===0?Math.PI:0);camera.position.set(target.x+Math.sin(ang)*dist,target.y+elev+Math.sin(pitch)*45,target.z+Math.cos(ang)*dist);camera.lookAt(target.x,target.y+8,target.z)}

// HUD
const sp=document.getElementById('speed'),al=document.getElementById('alt'),hg=document.getElementById('hdg'),vs=document.getElementById('vs'),th=document.getElementById('thr');
function updateHUD(){sp.textContent=Math.round(state.speed*1.94384).toString().padStart(3,'0');al.textContent=Math.max(0,Math.round((state.y-2.8)*3.28084)).toString().padStart(4,'0');hg.textContent=((Math.round(THREE.MathUtils.radToDeg(state.heading))%360+360)%360||360).toString().padStart(3,'0');vs.textContent=Math.round(state.vs*196.85);th.textContent=Math.round(state.throttle*100)}

const clock=new THREE.Clock();
function loop(){requestAnimationFrame(loop);const dt=Math.min(clock.getDelta(),.033);updateFlight(dt);updateCamera();updateHUD();for(const a of ai){a.phase+=dt;a.root.position.z+=Math.cos(a.root.rotation.y)*a.speed*dt;a.root.position.x-=Math.sin(a.root.rotation.y)*a.speed*dt;if(Math.abs(a.root.position.z)>1800)a.root.position.z*=-.95}for(const m of mixers)m.update(dt);renderer.render(scene,camera)}loop();
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});

})();
