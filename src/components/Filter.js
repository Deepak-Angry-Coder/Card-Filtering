export default function Filter(props) {
  const filterData = props.filterData;
  const category = props.category;
  const setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div>
      {filterData.map((data) => {
        return (
          <button
            onClick={() => filterHandler(data.title)}
            key={data.id}
            className={`text-lg px-5 mr-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 filterBtn
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }
            
            `}>
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
