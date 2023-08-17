'use client';

import styles from "@/components/dish-list/DishList.module.css";
import DishCard from "@/components/dish-card/DishCard";
import PaginationBlock from "@/components/pagination-block/PaginationBlock";
import usePagination from "@/hooks/usePagination";
import {Dish} from "@/types/Dish";
import {FC} from "react";
import { ThemeProvider, Container, createTheme, Grid} from "@mui/material";

interface DishListProps {
  allDishes: Dish[],
}

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        }
      }
    }
  }
})

const DishList:FC<DishListProps> = ({allDishes}) => {
  const {currentPage, numOfPages, pageDishes, setCurrentPage} = usePagination(allDishes);
  return (
    <Container sx={{padding: "0 25px"}}>
      <Grid container rowSpacing={2.5} columnSpacing={{sm: 3, md: 4}}>
        {pageDishes && pageDishes.map(({idMeal, strMeal, strCategory, strMealThumb, strTags}) => (
          <Grid item xs={12} sm={4} md={6} key={idMeal}>
            <DishCard
              id={idMeal}
              meal={strMeal}
              category={strCategory}
              mealThumb={strMealThumb}
              tags={strTags}
            />
          </Grid>
        ))}
      </Grid>

      {
        numOfPages > 1 ?
          <PaginationBlock
            numOfPages={numOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          :
          null
      }
    </Container>
  )
}

export default DishList;

// <Container>
//   <Grid
//     sx={{
//       justifyContent: "center",
//       marginRight: "100px",
//       marginLeft: "100px",
//     }}
//     container
//     rowSpacing={3}
//     columnSpacing={{xs: 2, sm: 3, md: 4}}
//     columns={{xs: 1, sm: 2, md: 3, lg: 2}}>
//     {pageDishes && pageDishes.map(({idMeal, strMeal, strCategory, strMealThumb, strTags}) => (
//       <Grid item md={1}>
//         <DishCard
//           key={idMeal}
//           id={idMeal}
//           meal={strMeal}
//           category={strCategory}
//           mealThumb={strMealThumb}
//           tags={strTags}
//         />
//       </Grid>
//     ))}
//   </Grid>
//   {
//     numOfPages > 1 ?
//       <PaginationBlock
//         numOfPages={numOfPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//       :
//       null
//   }
// </Container>