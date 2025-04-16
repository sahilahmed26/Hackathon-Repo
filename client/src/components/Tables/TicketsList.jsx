import React from "react";

const truncateWords = (text, wordLimit = 20) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const DataTable = ({ data }) => {
  console.log("Table Data", data);

  return (
    <div className="p-4 sm:p-6  min-h-screen">
      <div className="overflow-x-auto w-full">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden shadow rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Subcategory</th>
                  <th className="px-4 py-3">Sentiment</th>
                  <th className="px-4 py-3">Other</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((entry, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors duration-150"
                    >
                      <td className="px-4 py-3 font-medium text-gray-800 break-words max-w-[100px]">
                        {entry.ID}
                      </td>
                      <td className="px-4 py-3 break-words max-w-[250px]" title={entry.Name}>
                        {entry.Name}
                      </td>
                      <td className="px-4 py-3 break-words max-w-[300px]" title={entry.Description}>
                        {truncateWords(entry.Description, 20)}
                      </td>
                      <td className="px-4 py-3 break-words max-w-[150px]">{entry.Category}</td>
                      <td className="px-4 py-3 break-words max-w-[150px]">{entry.Subcategory}</td>
                      <td className="px-4 py-3 break-words max-w-[150px]">{entry.Sentiment}</td>
                      <td className="px-4 py-3 break-words max-w-[150px]">{entry.Other}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
