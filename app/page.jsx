import styles from '@/styles/Main.module.css'
import Card from "@/components/Card";
import axios from "axios";

export const getAllDishes = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');

  return response.data.meals;
}

const Home = async () => {
  const dishes = await getAllDishes();

  return (
    <main className={styles.wrapper}>
      {dishes && dishes.map(({idMeal, strMeal, strCategory, strMealThumb, strTags}) => (
        <Card key={idMeal} id={idMeal} meal={strMeal} category={strCategory} mealThumb={strMealThumb} tags={strTags}/>
      ))}
    </main>
  )
}

export default Home;
