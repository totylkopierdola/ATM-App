import Keyboard from "../components/Keyboard";

const Home = ({ onNext }) => {
  return (
    <>
      <Keyboard
        onDigitPress={(digit) => console.log(digit)}
        onClearPress={() => console.log("clear")}
      />
      <button
        onClick={onNext}
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
      >
        Next
      </button>
    </>
  );
};

export default Home;
