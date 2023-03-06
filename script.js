// const Three = require("three");
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "https://unpkg.com/three/build/three.module.js";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry1 = new BoxGeometry(2, 2, 2);
const geometry2 = new BoxGeometry(3, 3, 1);
const geometry3 = new BoxGeometry(1, 1, 1);

const material1 = new MeshBasicMaterial({ color: 0xcc0000 });
const material2 = new MeshBasicMaterial({ color: 0x0000ff });
const material3 = new MeshBasicMaterial({ color: 0x00ff00 });

const cube1 = new Mesh(geometry1, material1);
cube1.position.set(4, 0, 4);
const cube2 = new Mesh(geometry2, material2);
cube2.position.set(2, 0, 4);
const cube3 = new Mesh(geometry3, material3);
cube3.position.set(0, 0, 4);
cube3.rotation.x = Math.PI / 4;
cube3.rotation.y = Math.PI / 4;

scene.add(cube1);
scene.add(cube2);
scene.add(cube3);
camera.position.z = 10;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;
}
animate();
