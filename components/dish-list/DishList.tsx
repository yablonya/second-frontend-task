'use client';

import DishCard from "@/components/dish-card/DishCard";
import PaginationBlock from "@/components/pagination-block/PaginationBlock";
import usePagination from "@/hooks/usePagination";
import {Dish} from "@/types/Dish";
import {FC} from "react";
import {Container, Grid} from "@mui/material";

interface DishListProps {
	allDishes: Dish[],
}

const DishList: FC<DishListProps> = ({allDishes}) => {
	const {currentPage, numOfPages, pageDishes, setCurrentPage} = usePagination(allDishes);

	return (
		<Container>
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

			{numOfPages > 1 && <PaginationBlock
				numOfPages={numOfPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}/>}
		</Container>
	)
}

export default DishList;