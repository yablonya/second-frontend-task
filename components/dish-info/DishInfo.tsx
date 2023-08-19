import styles from "@/components/dish-info/DishInfo.module.css";
import Ingredients from "@/components/ingredients/Ingredients";
import Recipe from "@/components/recipe/Recipe";
import {getListOfParams} from "@/utils/ingredients";
import {Dish} from "@/types/Dish";
import {FC} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";

interface DishInfoProps {
    dish: Dish,
}

const DishInfo:FC<DishInfoProps> = ({dish}) => {
  const { strMeal, strCategory, strTags, strArea, strInstructions} = dish || {};
  const ingredientsArr: [string, string | unknown][] = getListOfParams(dish, "Ingredient");
  const measuresArr: [string, string | unknown][] = getListOfParams(dish, "Measure");

  return (
    <Container sx={{color: "black"}}>
      <Grid container rowSpacing={4} columnSpacing={{md: 3, lg: 6}}>
        <Grid item sm={12} md={12} lg={4} className={styles.introduce_block} >
          <Box>
            <Typography variant="h4">{strMeal}</Typography>
            <Typography variant="h6">Category: {strCategory}</Typography>
            {strTags && <Typography variant="h6"><b>Tags:</b> {strTags}</Typography>}
            {strArea && <Typography variant="h6"><b>Area:</b> {strArea}</Typography>}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={8} className={styles.video}>
          <iframe
            width={600}
            height={340}
            src="https://www.youtube.com/embed/gtQSr18yQz0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={4} className={styles.ingredients}>
          <Ingredients ingredients={ingredientsArr} measures={measuresArr}/>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Recipe recipe={strInstructions}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DishInfo;