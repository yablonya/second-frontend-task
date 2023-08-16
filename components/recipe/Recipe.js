import styles from "@/components/recipe/Recipe.module.css"

const Recipe = ({recipe}) => {
  return (
    <div className={styles.recipe_block}>
      <h2 style={{marginBottom: 10}}>Recipe</h2>
      <p>{recipe}</p>
    </div>
  )
}

export default Recipe;