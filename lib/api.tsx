import axios from "axios";

export const getAllDishes = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');

  if (response.data.meals !== null) {
    return response.data.meals;
  }
}

export const getDishById = async ({params}) => {
  const {id} = params;
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

  if (response.data.meals !== null) {
    return response.data.meals[0];
  }
}

export const getListOfParams = (dish, keyWord: string) => {
  const arrFromObj = Object.entries(dish);
  return arrFromObj.filter(item => item[0].includes(keyWord) && item[1]);
}