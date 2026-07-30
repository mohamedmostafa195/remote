export const mfConfig = {
  name: "remote",
  exposes: {
    "./counter": "./src/counter.jsx"
  },
  shared: ["react", "react-dom"],
};

