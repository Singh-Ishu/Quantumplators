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
            renderer.dispose();
        };
    }, []); // The empty dependency array ensures this effect runs only once

    return <div ref={mountRef} />;
}

export default Landing;
