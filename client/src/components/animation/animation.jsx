import  React  from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../animation/animation.css'
function animation() {

    const particlesInit = async (main)  => {
        console.log(main);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded =(container) => {
         console.log(container);
    };

    

  return (
    <div className='anim-container'>
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
            color: {
                // value: "#040b14",
            },
        },
        fpsLimit: 600,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                // onHover: {
                //     enable: true,
                //     mode: "repulse",
                // },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 5,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            // links: {
            //     color: "#ffffff",
            //     distance: 150,
            //     enable: true,
            //     opacity: 0.5,
            //     width: 1,
            // },
            collisions: {
                enable: true,
            },
            move: {
                direction: "left",
                enable: true,
                // outModes: {
                //     default: "bounce",
                // },
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                },
                random: true,
                speed: 0.7,
                straight: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 400,
            },
            opacity: {
                value: 0.1,
            },
            shape: {
                type:"circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
    />


    </div>
  )
  
}

export default animation