import DishList from "@/components/dish-list/DishList";
import {getAllDishes} from "@/lib/api";
import type {Metadata} from "next";
import {Dish} from "@/types/Dish";
import {formatTags} from "@/utils/tagsFormatting";

export const metadata: Metadata = {
  title: "Home page",
}

const Home = async () => {
  const allDishesData: Promise<Dish[]> = getAllDishes();
  const allDishes: Dish[] = await allDishesData;
  allDishes.forEach((dish) => dish.strTags && (dish.strTags = formatTags(dish.strTags)));

  return (
   <div>
     <DishList allDishes={allDishes}/>
   </div>
  )
}

export default Home;
