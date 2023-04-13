const App = () => {
  return (
    <main className="flex flex-col h-screen justify-center bg-offWhite font-poppins">
      <div className="m-auto bg-white p-28 rounded-xl rounded-br-4xl">
        {/* Input fields */}
        <div className="flex">
          <div className="flex-col flex">
            <label className="text-smokeGrey">Day</label>
            <input
              placeholder=""
              className="border p-2 w-1/2 rounded-md"
            ></input>
          </div>
          <div className="flex-col">
            <label>Month</label>
            <input placeholder=""></input>
          </div>
          <div className="flex-col">
            <label>Year</label>
            <input placeholder=""></input>
          </div>
        </div>
        <h1 className="text-5xl m-auto">Hello</h1>
      </div>
    </main>
  );
};

export default App;
