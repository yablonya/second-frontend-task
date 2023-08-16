import DishInfo from "@/components/dish-info/DishInfo";
import {getDishById} from "@/lib/api";

const DishPage = async ({params}) => {
  const dish = await getDishById({params});

  return (
    <>
      <DishInfo dish={dish}/>
    </>
  )
}

export default DishPage;