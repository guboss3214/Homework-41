import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Fetch Data using Axios
      </h1>
      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {error && (
        <div className="text-center text-red-500">Error: {error.message}</div>
      )}
      {data && (
        <ul className="space-y-4">
          {data.map((item) => (
            <li key={item.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-700">{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
