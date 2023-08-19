import DishInfo from "@/components/dish-info/DishInfo";
import {getAllDishes, getDishById} from "@/lib/api";
import type {Metadata} from "next";
import {Dish} from "@/types/Dish";
import {formatTags} from "@/utils/tagsFormatting";

interface Params {
  params: {
    dishId: string
  }
}

export async function generateMetadata ({params: {dishId}}: Params): Promise<Metadata> {
  const dishData: Promise<Dish> = getDishById(dishId);
  const dish: Dish = await dishData;

  return {
    title: dish?.strMeal
  }
}

const DishPage = async ({params: {dishId}}: Params) => {
  const dishData: Promise<Dish> = getDishById(dishId);
  const dish: Dish = await dishData;
  if (dish?.strTags) {
    dish.strTags = formatTags(dish.strTags)
  }

  return (
    <div>
      <DishInfo dish={dish}/>
    </div>
  )
}

export default DishPage;

export async function generateStaticParams() {
  const allDishesData: Promise<Dish[]> = getAllDishes();
  const allDishes: Dish[] = await allDishesData;

  return allDishes.map(dish => ({
    dishId: dish.idMeal
  }))
}