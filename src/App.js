import React from 'react';

function App() {
  const url = window.location.href;
  const match = url.match(/\/c\/(\d+)\/(\d+)/);
  const [value1, value2] = match ? match.slice(1) : ["", ""];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Valores en la URL</h1>
        <div>
          <p className="text-gray-600">Valor 1: {value1}</p>
          <p className="text-gray-600">Valor 2: {value2}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
