import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const bmicalculator = () => {
    if (weight === "" || height === "" || height <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const bmiValue = Number((weight / (height * height)).toFixed(2));
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue < 24.9) {
      setMessage("You are healthy");
    } else if (bmiValue <= 29.9) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          BMI CALCULATOR
        </h1>

        <div className="mt-6 flex flex-col">
          <label className="text-lg sm:text-2xl mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-gray-800 rounded-md px-4 py-2 sm:py-3 text-white outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <label className="text-lg sm:text-2xl mb-2">Height (meters)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="bg-gray-800 rounded-md px-4 py-2 sm:py-3 text-white outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          onClick={bmicalculator}
          className="bg-blue-700 mt-6 w-full text-lg sm:text-xl py-2 sm:py-3 rounded-md hover:bg-blue-800 transition"
        >
          Calculate
        </button>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-lg sm:text-xl">
              Your BMI: <b>{bmi}</b>
            </p>
            <p className="text-base sm:text-lg text-green-400 mt-1">
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
