import styles from "@/components/recipe/Recipe.module.css"
import {FC} from "react";

interface RecipeProps {
    recipe: string
}

const Recipe:FC<RecipeProps> = ({recipe}) => {
  return (
    <div className={styles.recipe_block}>
      <h2 style={{marginBottom: 10}}>Recipe</h2>
      <p>{recipe}</p>
    </div>
  )
}

export default Recipe;