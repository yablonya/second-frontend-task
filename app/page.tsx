import DishList from "@/components/dish-list/DishList";
import {getAllDishes} from "@/lib/api";

const Home = async () => {
  const allDishes = await getAllDishes();

  return (
   <div>
     <DishList allDishes={allDishes}/>
   </div>
  )
}

export default Home;
