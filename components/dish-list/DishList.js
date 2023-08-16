'use client';

import styles from "@/components/dish-list/DishList.module.css";
import Card from "@/components/dish-card/Card";
import PaginationBlock from "@/components/pagination-block/PaginationBlock";
import usePagination from "@/hooks/usePagination";

const DishList = ({allDishes}) => {
  const {currentPage, numOfPages, pageDishes, setCurrentPage} = usePagination(allDishes);

  return (
    <div className={styles.wrapper}>
      {pageDishes && pageDishes.map(({idMeal, strMeal, strCategory, strMealThumb, strTags}) => (
        <Card key={idMeal} id={idMeal} meal={strMeal} category={strCategory} mealThumb={strMealThumb} tags={strTags}/>
      ))}
      {
        numOfPages > 1 ?
        <PaginationBlock numOfPages={numOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        :
        null
      }
    </div>
  )
}

export default DishList;