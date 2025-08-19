import './App.css';
import InputBox from "./InputBox";
import BackgroundImage from "./assets/BackgroundImage.webp";
function App() {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 bg-white/80 shadow-md">
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* From input */}
          <div className="w-full mb-1">
            <InputBox label="From" />
          </div>

          {/* Swap button */}
          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-lg shadow"
            >
              Swap
            </button>
          </div>

          {/* To input */}
          <div className="w-full mt-1 mb-4">
            <InputBox label="To" />
          </div>

          {/* Convert button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
