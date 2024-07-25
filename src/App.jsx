import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <div className="fixed w-screen p-8">
        <Navbar />
      </div>
      <div className="bg-[#3376f4] h-screen flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col text-center text-white text-6xl font-bold gap-y-5 uppercase">
          <div>Find the right</div>
          <div>online <span className="text-[#6eecfc]">tutor</span> from</div>
          <div>anywhere</div>
        </div>
        <div className="italic text-gray-100 text-lg">
          Choose your online tutor and start learning anytime anywhere
        </div>
        <div className="flex gap-x-5 font-semibold">
          <button className="bg-white rounded-lg px-6 py-3">
            Hire Tutor
          </button>
          <button className="px-6 py-3 border text-white rounded-lg">
            Find Courses
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
