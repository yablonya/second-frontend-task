import styles from "@/components/ingredients/Ingredients.module.css"
import {FC} from "react";

interface IngredientsProps {
    ingredients: [string, string | unknown][],
    measures: [string, string | unknown][],
}

const Ingredients:FC<IngredientsProps> = ({ingredients, measures}) => {
  const ingAndMeas = [];

  for (let i = 0; i < ingredients.length; i++) {
    ingAndMeas.push([ingredients[i][1], measures[i][1]])
  }

  return (
    <div className={styles.ingredients_block}>
      <h2 style={{marginBottom: 15, display: "flex", justifyContent: "center"}}>Ingredients</h2>
      <ul>
        {ingAndMeas && ingAndMeas.map(item => (
          <li key={ingAndMeas.indexOf(item)} style={{marginTop: 5}}>{item[0]}  <b>{item[1]}</b></li>
        ))}
      </ul>
    </div>
  )
}

export default Ingredients;