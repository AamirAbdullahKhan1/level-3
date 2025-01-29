import React, { useState } from "react";

const Team6 = () => {
  const [numbers, setNumbers] = useState(["", "", ""]);
  const [notification, setNotification] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [points, setPoints] = useState(0);

  // Predefined correct set of numbers
  const correctNumbers = [5, 3, 3]; // Replace this with your actual correct set

  const handleInputChange = (index, value) => {
    if (!hasSubmitted) {
      const newNumbers = [...numbers];
      newNumbers[index] = value;
      setNumbers(newNumbers);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasSubmitted) {
      setNotification("You can only submit once. Refresh to play again.");
      return;
    }

    // Check if all inputs are filled and are numbers
    if (numbers.every((num) => num !== "" && !isNaN(num))) {
      // Check if the entered numbers match the predefined correct set
      if (numbers.every((num, index) => parseInt(num) === correctNumbers[index])) {
        setPoints(points + 5); // Player wins +5 points
        setNotification("Correct! You win +5 points.");
      } else {
        setPoints(points - 2); // Player loses -2 points
        setNotification("Incorrect! You lose -2 points.");
      }
      setHasSubmitted(true);
    } else {
      setNotification("Please enter valid numbers in all boxes before submitting.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Number Matching Game</h1>
        <p className="text-center mb-4">Enter the correct number in all three boxes!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between">
            {numbers.map((num, index) => (
              <input
                key={index}
                type="number"
                value={num}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className={`w-24 p-2 border border-gray-300 rounded-md text-center ${
                  hasSubmitted ? "bg-gray-100" : ""
                }`}
                placeholder="Enter #"
                disabled={hasSubmitted}
              />
            ))}
          </div>
          <button
            type="submit"
            className={`w-full p-2 rounded-md transition duration-300 ${
              hasSubmitted ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={hasSubmitted}
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-xl">Points: {points}</p>
        </div>
        {notification && (
          <div
            className={`mt-4 p-2 rounded-md text-center ${
              notification.includes("Correct") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team6;
