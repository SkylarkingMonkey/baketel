
            var scene = new THREE.Scene();

            var light = new THREE.DirectionalLight( 0xffffff, 1 );
            light.position.set( 100, 100, 100 ).normalize();
            scene.add( light );



            //var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 500 );            
            const camera = new THREE.PerspectiveCamera(70, 2, 1, 500);

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


            //var light = new THREE.PointLight( 0xff0000, 1, 100 );
            //light.position.set( 50, 50, 50 );
            //scene.add( light );  


            var renderer = new THREE.WebGLRenderer();
            renderer.gammaOutput = true;
            renderer.gammaFactor = 2.2;            

            var container = document.getElementById('viewport');
            //var screenSizeInPx = $( window ).width();

           // var sizer = Math.round(screenSizeInPx * 0.682);
           // renderer.setSize(sizer, sizer);
            container.appendChild( renderer.domElement );


            var loader = new THREE.GLTFLoader();

            //THREE.DRACOLoader.setDecoderPath();
            //loader.setDRACOLoader( new THREE.DRACOLoader() );
            //figure out how to link and use Dracoloader here: https://github.com/KhronosGroup/glTF/tree/master/extensions/

            //load a glTF resource
            loader.load(
                './libs/maze4threejsloader.gltf',
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



    

       //     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
       //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
       //     var cube = new THREE.Mesh( geometry, material );
       //     scene.add( cube );
            camera.position.z = 15;
            camera.position.x = 11;
            camera.position.y = 7;
      //      scene.rotation.z = ;
      //      scene.rotation.x = ;
      //      scene.rotation.y = ;

            function animate(time) {
                time *= 0.001;
                resizeCanvasToDisplaySize();

                //scene.rotation.x += 0.01;

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);

          /*  var animate = function () {
                requestAnimationFrame( animate );

                    scene.rotation.x += 0.01;
      //          cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            };

            animate();    */