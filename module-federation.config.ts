export const mfConfig = {
  name: "remote",
  exposes: {
    "./counter": "./src/counter.jsx"
  },
  dts: false,
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};


