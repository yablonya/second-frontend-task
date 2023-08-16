import styles from "@/components/dish-info/DishInfo.module.css";
import spoon from "@/public/spoon.png"
import Ingredients from "@/components/ingredients/Ingredients";
import Recipe from "@/components/recipe/Recipe";
import {getListOfParams} from "@/lib/api";
import {Dish} from "@/types/Dish";
import {FC} from "react";

interface DishInfoProps {
    dish: Dish,
}

const DishInfo:FC<DishInfoProps> = ({dish}) => {
  const { strMeal, strCategory, strTags, strArea, strInstructions} = dish || {};
  const ingredientsArr: [string, string | unknown][] = getListOfParams(dish, "Ingredient");
  const measuresArr: [string, string | unknown][] = getListOfParams(dish, "Measure");

  return (
    <div className={styles.wrapper}>
      <div className={styles.introduce_block}>
        <iframe
          width={600}
          height={340}
          src="https://www.youtube.com/embed/gtQSr18yQz0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div style={{maxWidth: 500, marginLeft: 100}}>
          <h1>{strMeal}</h1>
          <h3>Category: {strCategory}</h3>
          {strTags !== null ? <h3><b>Tags:</b> {strTags.replace(/,/g, ', ')}</h3> : null}
          {strArea !== null ? <h3><b>Area:</b> {strArea}</h3> : null}
        </div>

        {/*<img src={spoon} width={200} height={200} alt="meal"/>*/}
      </div>

      <div className={styles.recipe_ingredients_block}>
        <Ingredients ingredients={ingredientsArr} measures={measuresArr}/>
        <Recipe recipe={strInstructions}/>
      </div>
    </div>
  )
}

export default DishInfo;