import React, { useState } from "react";

const ProgressBar = () => {
  const [progress] = useState(50); // Initial progress value

  return (
    <div className="p-6 w-[100%] mx-auto flex justify-center items-center gap-1">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
        <div
          className="bg-blue-600 h-1 rounded-full"
          style={{ width: `${progress}% ` }}
        ></div>
      </div>

      {/* Display the percentage */}
      <p className="text-center font-semibold mb-4 text-xs">{progress}%</p>
    </div>
  );
};

export default ProgressBar;
