       
            var player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };

            var scene = new THREE.Scene();

          //  var light = new THREE.DirectionalLight( 0xffffff, 1 );
          //  light.position.set( 100, 100, 100 ).normalize();
          //  scene.add( light );


            scene.background = new THREE.Color( 0xffffff );
            scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
            var light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
            light.position.set( 0.5, 1, 0.75 );
            scene.add( light );            

            //var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 500 );  
            const camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
           // const camera = new THREE.PerspectiveCamera(70, 2, 1, 500);
            camera.lookAt(new THREE.Vector3(0,player.height,0));
         
            controls = new THREE.PointerLockControls( camera );
            //skipped a bunch of blocker instructions bs
            scene.add( controls.getObject() );
            var onKeyDown = function ( event ) {
                switch ( event.keyCode ) {
                    case 38:
                    case 87:
                        moveForward = true;
                        break;
                    case 37:
                    case 65:
                        turnLeft = true;
                        break;
                    case 40:
                    case 83:
                        moveBackward = true;
                        break;
                    case 39:
                    case 68:
                        turnRight = true;
                        break;
                    case 32: 
                        if (canJump === true ) velocity.y += 350;
                        canJump = false;
                        break;

                }
            };
            var onKeyUp = function ( event ) {
                switch ( event.keyCode ) {
                    case 38:
                    case 87:
                        moveForward = false;
                        break;
                    case 37:
                    case 65:
                        turnLeft = false;
                        break;
                    case 40:
                    case 83:
                        moveBackward = false;
                    case 39:
                    case 68:
                        turnRight = false;
                        break;

                }
            };
            document.addEventListener( 'keydown', onKeyDown, false );
            document.addEventListener( 'keyup', onKeyUp, false );
            raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -1, 0), 0, 1 );             


           
            //scene.rotation.set(  );
       //     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
       //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
       //     var cube = new THREE.Mesh( geometry, material );
       //     scene.add( cube );

      //      scene.rotation.z = ;
      //      scene.rotation.x = ;
      //      scene.rotation.y = ;

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


            const circle = document.createElement("div");
            circle.style.cssText = "position:absolute; bottom:55px; width:70px; height:70px; background:rgba(126, 126, 126, 0.5); border:#fff solid medium; border-radius:50%; left:50%; transform:translateX(-50%);";
            const thumb = document.createElement("div");
            thumb.style.cssText = "position: absolute; left: 18px; top: 18px; width: 35px; height: 35px; border-radius: 50%; background: #fff;";
            circle.appendChild(thumb);
            container.appendChild(circle);            


            var controls = new THREE.OrbitControls( camera, renderer.domElement );
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;
            controls.enableRotate = true;
            camera.position.set(561, -8, 55);            
            camera.rotation.set(-2.8, 1.5, 2.5);
            controls.target = new THREE.Vector3(-20, 0, 0);
            controls.update();



//cam pos x -7 y 13 z -7

            controls.keys = {
                LEFT: 37, //left arrow
                UP: 38, // up arrow
                RIGHT: 39, // right arrow
                BOTTOM: 40 // down arrow
            } 


            var loader = new THREE.GLTFLoader();

            //THREE.DRACOLoader.setDecoderPath();
            //loader.setDRACOLoader( new THREE.DRACOLoader() );
            //figure out how to link and use Dracoloader here: https://github.com/KhronosGroup/glTF/tree/master/extensions/

            //load a glTF resource
            loader.load(
                './libs/MazeScaledUp.gltf',
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
                time *= 0.001;
                resizeCanvasToDisplaySize();

                //scene.rotation.x += 0.01;

                
                requestAnimationFrame(animate);
                
                renderer.render(scene, camera);

                controls.update();
            }

            requestAnimationFrame(animate);

          /*  var animate = function () {
                requestAnimationFrame( animate );

                    scene.rotation.x += 0.01;
      //          cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            };

            animate();    */