import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 
window.innerHeight, 0.1, 1000 ); //sets up the camera attributes in order (FOV, Aspect Ratio, Near Clipping Plane, Far Clipping Plane)

const renderer = new THREE.WebGLRenderer(); //creates the render instance
renderer.setSize( window.innerWidth, window.innerHeight ); //Sets the size in the browser window
document.body.appendChild( renderer.domElement ); //Creates a canvas element in index.html to render the JS work

const geometry = new THREE.BoxGeometry( 1, 1, 1); //creates vertices, and fill faces a cube object
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //Creates a basic mesh to color the cube object, use hex colors
const cube = new THREE.Mesh( geometry, material ); //This is a mesh object that takes a geometry and applies a material to it
scene.add( cube ); //adds the object to the scene at coordinates (0,0,0)

camera.position.z = 5; //moves the camera on the z axis by 5 so it doesn't clip with the default coordinates and the cube object

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
} //this function tells the renderer(canvas html object) to render the scene which includes the cube and to render the camera. This is essentially a master function for the app.
//additional functions can be called here instead of having a massive 100+ line animate function

renderer.setAnimationLoop( animate ); //Creates an animation loop to draw the scene again whenever the screen is refreshed