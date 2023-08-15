import styles from "@/styles/DishInfo.module.css";
import spoon from "@/public/spoon.png"
import IngredientsCard from "@/components/IngredientsCard";
import Recipe from "@/components/Recipe";
import Image from "next/image";


const DishInfo = ({dish}) => {
  const { strMeal, strCategory, strTags, strArea, strInstructions} = dish || {};

  const ingredientsArr = Object.entries(dish).filter(item => item[0].includes("Ingredient") && item[1]);
  const measuresArr = Object.entries(dish).filter(item => item[0].includes("Measure") && item[1]);

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

        <div style={{maxWidth: 600, marginLeft: 100}}>
          <h1>{strMeal}</h1>
          <h3>Category: {strCategory}</h3>
          {strTags !== null ? <h3><b>Tags:</b> {strTags.replace(/,/g, ', ')}</h3> : null}
          {strArea !== null ? <h3><b>Area:</b> {strArea}</h3> : null}
        </div>

        {/*<img src={spoon} width={200} height={200} alt="meal"/>*/}
      </div>

      <div className={styles.recipe_ingredients_block}>
        <IngredientsCard ingredients={ingredientsArr} measures={measuresArr}/>
        <Recipe recipe={strInstructions}/>
      </div>
    </div>
  )
}

export default DishInfo;