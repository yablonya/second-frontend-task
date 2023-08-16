import {useState} from "react";

const usePagination = (dishes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const lastIndex = currentPage * limit;
  const  firstIndex = lastIndex - limit;

  return {
    currentPage,
    numOfPages: Math.ceil(dishes.length / 10),
    pageDishes: dishes.slice(firstIndex, lastIndex),
    setCurrentPage,
  };
}

export default usePagination;