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
  const wasmMemory = wasm.instance.exports.mem;
  const unit8Array = new Uint8Array(wasmMemory.buffer, 0, 2);

  const hiText = new TextDecoder().decode(unit8Array);
  console.log(hiText)
  // const result = sumfunction(10, 50);
  // console.log(result);
}
init();
