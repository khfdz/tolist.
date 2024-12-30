import React from "react";
import data from "../data/data.json"; // Mengimpor file JSON

const Content1 = ({ onCardClick }) => {
  return (
    <div className="p-4 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Content 1</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 border border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => onCardClick(item)} // Klik untuk mengirim detail ke Content2
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">
              {item.description.length > 100
                ? `${item.description.slice(0, 100)}...`
                : item.description}
            </p>
            <p className="text-sm text-gray-500 mt-4">{item.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content1;
