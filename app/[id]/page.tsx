import DishInfo from "@/components/dish-info/DishInfo";
import {getDishById} from "@/lib/api";

const DishPage = async ({params}) => {
  const dish = await getDishById({params}) || {};

  return (
    <div>
      <DishInfo dish={dish}/>
    </div>
  )
}

export default DishPage;