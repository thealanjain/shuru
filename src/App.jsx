import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div className="flex justify-center m-4">
          <h1 className="text-4xl font-extrabold text-blue-600 underline">
            Shuru Tech
          </h1>
        </div>
      </section>
    </>
  );
}

export default App;
