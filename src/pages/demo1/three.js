import * as THREE from 'three'

// 选择器
export default function renderThree (selector) {

  let dom = document.querySelector(selector)
  console.log("rd ~ file: three.js:7 ~ renderThree ~ dom:", dom.offsetWidth)
  if (!dom) return
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, dom.offsetWidth / dom.offsetHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( dom.offsetWidth, dom.offsetHeight );

  dom.appendChild( renderer.domElement );

  

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  }
  animate();
}