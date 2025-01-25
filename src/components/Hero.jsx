import React from "react";
import { styles } from "../styles";
import { SurferCanvas, SharkCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import{ useState, useEffect } from "react";



const Hero = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
  useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640); // Check if screen width is less than 640px
      };

      handleResize();

    }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className={`w-5 h-5 rounded-full bg-[#FDFD96]`} />
          <div className={`w-1 sm:h-80 h-40 ${styles.vibrantGradient}`} style={{ background: `linear-gradient(to bottom, ${styles.leadColour}, transparent)` }} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} ${isSmallScreen ? `text-[#FDFD96]` : `text-[${styles.leadColour}]` }`}>
            <span className={`text-[${styles.leadColour}]`}>Hi, I'm Jay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            
          I do 
            <Typewriter
              options={{
                strings: ["Ai & ML", "App Development", "Robotics", "Surfing"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>

        {isSmallScreen ? <SurferCanvas/>  : <SharkCanvas/>}
      {/* <SurferCanvas /> */}
    </section>
  );
};

export default Hero;
