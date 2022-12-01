

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );

camera.position.z = 10;
camera.position.y = 2;

let hlight = new THREE.AmbientLight(0x404040,100);
scene.add(hlight);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var supra, miata, skyline, silvia;

let loader = new THREE.GLTFLoader();
loader.load('resources/supra/scene.gltf', function(gltf){
  supra = gltf.scene.children[0];
  supra.scale.set(0.5,0.5,0.5);
  scene.add(supra);
  animateSupra();
});
/*
loader.load('resources/miata/scene.gltf', function(gltf){
  miata = gltf.scene.children[0];
  miata.scale.set(0.1,0.1,0.1);
  scene.add(miata);
});
loader.load('resources/skyline/scene.gltf', function(gltf){
  skyline = gltf.scene.children[0];
  skyline.scale.set(1,1,1);
  scene.add(skyline);
});
*/
loader.load('resources/silvia/scene.gltf', function(gltf){
  silvia = gltf.scene.children[0];
  silvia.scale.set(0.5,0.5,0.5);
  silvia.position.x=20;
  scene.add(silvia);
  animateSilvia();
});
function animateSupra(){
  requestAnimationFrame(animateSupra);
  supra.rotation.z += 0.02;
  renderer.render(scene,camera);
}
function animateSilvia(){
  requestAnimationFrame(animateSilvia);
  silvia.rotation.z += 0.02;
  renderer.render(scene,camera);
}

function moveCamRight(){
  if(camera.position.x>=20){
    return
  }
  camera.position.x+=20;
}
function moveCamLeft(){
  if(camera.position.x<=0){
    return
  }
  camera.position.x-=20;
}
