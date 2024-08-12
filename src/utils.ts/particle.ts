import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export const options: ISourceOptions = {
  background: {
    color: {
      value: "#1d1d1d",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
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
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 150,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const snowOptions = {
    background: {
      color: {
        value: "#1d1d1d",
      },
    },
    interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 150,
            duration: 0.1,
          },
        },
      },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      move: {
        direction: "bottom",
        enable: true,
        speed: 2,
      },
      number: {
        value: 200,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 5 },
      },
    },
    detectRetina: true,
  };
  
  export const confettiOptions = {
    background: {
      color: {
        value: "#1d1d1d",
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 150,
          duration: 0.1,
        },
      },
    },
    particles: {
      color: {
        value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
      },
      move: {
        direction: "bottom",
        enable: true,
        speed: 5,
      },
      number: {
        value: 100,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: ["circle", "triangle", "star"],
      },
      size: {
        value: { min: 5, max: 10 },
      },
    },
    detectRetina: true,
  };
  
  export const bubbleOptions = {
    background: {
      color: {
        value: "#1d1d1d",
      },
    },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      move: {
        direction: "top",
        enable: true,
        speed: 1,
      },
      number: {
        value: 100,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 10, max: 20 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 2,
          size: 0,
          opacity: 0.8,
        },
      },
    },
    detectRetina: true,
  };
  