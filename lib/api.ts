import axios from "axios";

export const getAllDishes = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    return response.data.meals;
  } catch (message) {
    console.error('An error occurred while receiving data about dishes:', message)
  }
}

export const getDishById = async (dishId: string) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`);
    return response.data.meals[0];
  } catch (message) {
    console.error(`An error occurred while retrieving data about a dish with an id: ${dishId}:`, message)
  }
}