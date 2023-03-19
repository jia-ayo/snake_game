async function init() {
  const importObject = {
    console: {
      log: () => {
        console.log("just logging something");
      },
      error: () => {
        console.log("i am just an error");
      },
    },
  };

  const response = await fetch("sum.wasm");
  const buffer = await response.arrayBuffer();

  const wasm = await WebAssembly.instantiate(buffer, importObject);
  const sumfunction = wasm.instance.exports.sum;
  const result = sumfunction(10, 50);
  console.log(result);
}
init();
