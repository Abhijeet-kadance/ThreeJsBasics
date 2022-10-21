import * as THREE from "https://unpkg.com/three@0.145.0/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()


renderer.setSize(window.innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0x00FF00})
const mesh = new THREE.Mesh(boxGeometry,material)


// scene.add(mesh)
camera.position.z = 5

const planeGeometry = new THREE.PlaneGeometry(5,5,10,10)
const planematerial = new THREE.MeshPhongMaterial({color:0xff0000,side:THREE.DoubleSide})
const planemesh = new THREE.Mesh(planeGeometry,planematerial)
scene.add(planemesh)
const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0, 0, 1)
scene.add(light)
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
  // planemesh.rotation.x += 0.02
}
renderer.render(scene,camera)
animate()