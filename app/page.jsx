'use client'

import styles from '@/styles/Main.module.css'
import Card from "@/components/Card";
import {useEffect, useState} from "react";
import axios from "axios";
const Home = () => {
  const [dishes, setDishes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
      setDishes(response.data.meals)
    }
    fetchData()
  }, [])

  return (
    <main className={styles.wrapper}>
      {dishes && dishes.map(({idMeal, strMeal, strCategory, strMealThumb, strTags}) => (
        <Card key={idMeal} meal={strMeal} category={strCategory} mealThumb={strMealThumb} tags={strTags}/>
      ))}
    </main>
  )
}

export default Home;
