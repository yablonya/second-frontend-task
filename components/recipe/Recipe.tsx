import styles from "@/components/recipe/Recipe.module.css"
import {FC} from "react";
import {Paper, Typography} from "@mui/material";

interface RecipeProps {
    recipe: string
}

const Recipe:FC<RecipeProps> = ({recipe}) => {
  return (
    <Paper elevation={0} className={styles.recipe_block}>
      <Typography variant="h5" sx={{marginBottom: "10px"}}>Recipe</Typography>
      <Typography>{recipe}</Typography>
    </Paper>
  )
}

export default Recipe;