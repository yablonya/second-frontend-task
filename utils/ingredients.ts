import {Dish} from "@/types/Dish";

export const getListOfParams = (dish: Dish, keyWord: string) => {
	if (dish) {
		const arrFromObj = Object.entries(dish);
		return arrFromObj.filter(item => item[0].includes(keyWord) && item[1]);
	}
}