const App = () => {
  return (
    <main className="flex flex-col h-screen justify-center bg-offWhite font-poppins">
      <div className="m-auto bg-white p-14 rounded-xl rounded-br-4xl w-5/12">
        {/* Input fields */}
        <div className="flex border-b pb-8">
          <div className="flex uppercase">
            <div className="flex-col flex">
              <label className="text-smokeGrey mb-2 tracking-widest text-sm">
                Day
              </label>
              <input
                placeholder=""
                className="border p-4 w-3/4 rounded-md text-2xl"
              ></input>
            </div>
            <div className="flex-col flex">
              <label className="text-smokeGrey mb-2 tracking-widest text-sm">
                Month
              </label>
              <input
                placeholder=""
                className="border p-4 w-3/4 rounded-md text-2xl"
              ></input>
            </div>
            <div className="flex-col flex">
              <label className="text-smokeGrey mb-2 tracking-widest text-sm">
                Year
              </label>
              <input
                placeholder=""
                className="border p-4 w-3/4 rounded-md text-2xl"
              ></input>
            </div>
          </div>
          <div className="-mb-10">
            <img
              src="./icon-arrow.svg"
              className="bg-purple rounded-full w-36 h-auto p-5 mt-24 -mb-28"
            ></img>
          </div>
        </div>
        <div className="flex flex-col mt-10 text-7xl italic font-extrabold">
          <p>
            <span className="text-purple">38</span> years
          </p>
          <p>
            <span className="text-purple">3</span> months
          </p>
          <p>
            <span className="text-purple">26</span> days
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
