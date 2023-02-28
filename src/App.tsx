import { server$ } from "@tanstack/bling";

const serverFn = server$(async () => {
  // do something
  console.log("i am on the server");
  return "result";
});

function App() {
  return (
    <div className='App'>
      <button
        onClick={() =>
          serverFn(undefined)
            .then((res) => console.log({ res }))
            .catch((err) => console.error({ err }))
        }
      >
        bling
      </button>
    </div>
  );
}

export default App;
