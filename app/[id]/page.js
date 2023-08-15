import DishInfo from "@/components/DishInfo";
import axios from "axios";
import Head from "next/head";


export const getDishById = async ({params}) => {
  const {id} = params;
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

  return response.data.meals[0];
}

const DishPage = async ({params}) => {
  const dish = await getDishById({params});

  return (
    <>
      <Head>
        <title>{dish.strMeal}</title>
      </Head>
      <DishInfo dish={dish}/>
    </>
  )
}

export default DishPage;