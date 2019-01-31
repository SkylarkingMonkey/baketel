       
            var player = { height:1.8, speed:5.5, turnSpeed:Math.PI*0.03 };
            var keyboard = {};

            var scene = new THREE.Scene();


            var axesHelper = new THREE.AxesHelper( 500 );
            scene.add( axesHelper );            

          //  var light = new THREE.DirectionalLight( 0xffffff, 1 );
          //  light.position.set( 100, 100, 100 ).normalize();
          //  scene.add( light );


            scene.background = new THREE.Color( 0xffffff );
            scene.fog = new THREE.Fog( 0xffffff, 0, 350 );
            var light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
            light.position.set( 0.5, 1, 0.75 );
            scene.add( light );            

            //var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 500 );  
            const camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
           // const camera = new THREE.PerspectiveCamera(70, 2, 1, 500);
            camera.lookAt(new THREE.Vector3(0, player.height, 0));

            function resizeCanvasToDisplaySize(){
                const canvas = renderer.domElement;
                const width = canvas.clientWidth;
                const height = canvas.clientHeight;

                if (canvas.width !== width || canvas.height !== height){
                    renderer.setSize(width, height, false);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                }
            }



            var renderer = new THREE.WebGLRenderer();
            renderer.gammaOutput = true;
            renderer.gammaFactor = 2.2;    
            var container = document.getElementById('viewport');
            container.appendChild( renderer.domElement );

////Joystick for Mobile/////
        /*    const circle = document.createElement("div");
            circle.style.cssText = "position:absolute; bottom:55px; width:70px; height:70px; background:rgba(126, 126, 126, 0.5); border:#fff solid medium; border-radius:50%; left:50%; transform:translateX(-50%);";
            const thumb = document.createElement("div");
            thumb.style.cssText = "position: absolute; left: 18px; top: 18px; width: 35px; height: 35px; border-radius: 50%; background: #fff;";
            circle.appendChild(thumb);
            container.appendChild(circle);            
*/

          /*  var controls = new THREE.OrbitControls( camera, renderer.domElement );
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;
            controls.enableRotate = true;

            controls.target = new THREE.Vector3(560, -7, 60);*/
            camera.position.set(580, -9.4, 60);
            camera.rotation.set(0, 1.5, 0);
         /*   controls.update();

         /*   controls.keys = {
                LEFT: 37, //left arrow
                UP: 38, // up arrow
                RIGHT: 39, // right arrow
                BOTTOM: 40 // down arrow
            } */


            


            function keyDown(event){
                keyboard[event.keyCode] = true;
            }

            function keyUp(event){
                keyboard[event.keyCode] = false;
            }

            window.addEventListener('keydown', keyDown);
            window.addEventListener('keyup', keyUp);


            var loader = new THREE.GLTFLoader();

            //THREE.DRACOLoader.setDecoderPath();
            //loader.setDRACOLoader( new THREE.DRACOLoader() );
            //figure out how to link and use Dracoloader here: https://github.com/KhronosGroup/glTF/tree/master/extensions/

            //load a glTF resource
            loader.load(
                './libs/maze/MazeScaledUp.gltf',
                function ( gltf ) {
                    scene.add( gltf.scene );
                  //  gltf.animations; // Array<THREE.AnimationClip>
                    gltf.scene; // THREE.Scene
                    gltf.scenes; // Array<THREE.Scene>
                //    gltf.cameras; // Array<THREE.Camera>
                    gltf.asset; // Object
                },
                // called while loading is progressing
                function ( xhr ) {
                    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                },
                // called when loading has errors
                function ( error ) {
                    console.log( 'An error happened' );
                }
            );

            function animate(time) {
                if(keyboard[38]){ // Up key
                    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
                    camera.position.z -= Math.cos(camera.rotation.y) * player.speed;
                }
                if(keyboard[40]){ // down key
                    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
                    camera.position.z += Math.cos(camera.rotation.y) * player.speed;
                }
                if(keyboard[65]){ // A key
                    camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
                    camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
                }
                if(keyboard[68]){ // D key
                    camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
                    camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
                }
                
                if(keyboard[39]){ // left arrow key
                    camera.rotation.y -= player.turnSpeed;
                }
                if(keyboard[37]){ // right arrow key
                    camera.rotation.y += player.turnSpeed;
                }
                
                time *= 0.001;
                resizeCanvasToDisplaySize();
                requestAnimationFrame(animate);
               /* controls.update();*/
                renderer.render(scene, camera);
            }

            animate();

   