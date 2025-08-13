import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Landing() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            30,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Append the renderer to the DOM
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        camera.position.set(10, 0, 0);
        camera.lookAt(0, 0, 0.25);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x800080, 2);
        scene.add(ambientLight);

        const spotLight1 = new THREE.SpotLight(0x800080, 20);
        scene.add(spotLight1);
        spotLight1.position.set(5, 2, 0);
        spotLight1.rotation.z = Math.PI / 2;
        spotLight1.castShadow = true;

        // --- Mouse-controlled PointLight ---
        const pointLight = new THREE.PointLight(0x800080, 5, 100);
        pointLight.position.set(1, 0, 0); // Set a static x position
        scene.add(pointLight);

        // Function to handle mouse movement
        const onMouseMove = (event) => {
            // Normalize mouse coordinates to a range of -1 to 1
            const mouseZ = -(event.clientX / window.innerWidth) * 2 + 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            // Map normalized coordinates to the light's position
            // The scaling factor to change the movement range
            pointLight.position.z = mouseZ * 5;
            pointLight.position.y = mouseY * 5;
        };

        window.addEventListener("mousemove", onMouseMove);

        // Load the 3D model
        const loader = new GLTFLoader();
        loader.load(
            "models3d/quantumplators_text.glb",
            (gltf) => {
                scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error("Error loading model:", error);
            }
        );

        // Add backdrop
        const backdropGeometry = new THREE.PlaneGeometry(15, 15);
        const backdropMaterial = new THREE.MeshBasicMaterial({
            color: 0x0,
        });
        const backdrop = new THREE.Mesh(backdropGeometry, backdropMaterial);
        backdrop.position.x = -1;
        backdrop.rotation.y = Math.PI / 2;
        scene.add(backdrop);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resizing
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function
        return () => {
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", onMouseMove); // Remove mouse event listener
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
}

export default Landing;
