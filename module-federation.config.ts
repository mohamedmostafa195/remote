export const mfConfig = {
  name: "remote",
  exposes: {
    "./counter": "./src/counter.jsx"
  },
  dts: false,
  shared: ["react", "react-dom"],
};

