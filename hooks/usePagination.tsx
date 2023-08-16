import {useState} from "react";

const usePagination = (allDishes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit: number = 10;
  const lastIndex: number = currentPage * limit;
  const  firstIndex: number = lastIndex - limit;

  return {
    currentPage,
    numOfPages: Math.ceil(allDishes.length / 10),
    pageDishes: allDishes.slice(firstIndex, lastIndex),
    setCurrentPage,
  };
}

export default usePagination;