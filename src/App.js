import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";

import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (e) {
        toast.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-auto min-h-screen bg-slate-800 ">
      <div className="py-8 bg-black w-full text-center text-white ">
        <Navbar />
      </div>
      <div className="py-8 text-center">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards cardData={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
