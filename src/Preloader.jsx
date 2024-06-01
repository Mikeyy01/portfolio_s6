import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';
import "@fontsource/inter";

const Preloader = ({ onEnd }) => {
    //array of the different hellos that will be displayed
    const [hellos, setMessages] = useState(["Hello!", "أهلا", "Γειά σου!", "Здравейте!", "Hallo!"]);
    //references to directly access the preloader and hello elements
    const helloRef = useRef(null);
    const preloaderRef = useRef(null);

    useEffect(() => {
        let helloIndex = 0;

        const cycleHellos = () => {
            if (helloIndex < hellos.length) {
                gsap.to(helloRef.current, { opacity: 0, duration: 0.2, onComplete: () => {
                        helloRef.current.innerHTML = hellos[helloIndex];
                        gsap.to(helloRef.current, { opacity: 1, duration: 0.2 });
                        helloIndex++;
                        setTimeout(cycleHellos, 550); // Change message every second
                    }});
            } else {
                gsap.to(preloaderRef.current, { y: '100%', duration: 1, ease: 'power3.inOut', onComplete: onEnd });
            }
        };

        //start hello cycling process
        cycleHellos();
    }, [hellos, onEnd]);

    return (
        <div ref={preloaderRef} className="preloader">
            <div ref={helloRef} className="message">{hellos[0]}</div>
        </div>
    );
};

export default Preloader;
