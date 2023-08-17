'use client'

import styles from "@/components/dish-card/DishCard.module.css";
import React, {FC} from "react";
import {Card, CardContent, CardMedia, Typography, Link} from "@mui/material";

interface CardProps {
    id: string,
    meal: string,
    category: string,
    mealThumb: string,
    tags: string,
}

const DishCard:FC<CardProps> = ({id, meal, category, mealThumb, tags}) => {
  return (
    <Card raised className={styles.dish_card_container}>
      <CardMedia
        component="img"
        src={mealThumb}
        alt={meal}
        className={styles.dish_image}
      />

      <CardContent className={styles.dish_card_text}>
        <Typography className={styles.card_header}>{meal}</Typography>
        <Typography><b>Category:</b> {category}</Typography>
        {tags !== null ?
          <Typography><b>Tags:</b> {tags.replace(/,/g, ', ')}</Typography>
          : null}
        <Link href={`/${id}`} className={styles.recipe_link}>To recipe</Link>
      </CardContent>
    </Card>

  )
}

export default DishCard;


// <ThemeProvider theme={theme}>
//   <Card elevation={8} sx={{
//     backgroundColor: "#35a064",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }} className={styles.dish_card_container}>
//
//     <CardMedia component="img" src={mealThumb} alt={meal} className={styles.dish_image}/>
//
//     <CardContent sx={{ ":last-child": { paddingBottom: 1 }}} className={styles.dish_card_text}>
//       <Typography variant="h2">{meal}</Typography>
//       <Typography><b>Category:</b> {category}</Typography>
//       {tags !== null ? <Typography><b>Tags:</b> {tags.replace(/,/g, ', ')}</Typography> : null}
//       <Link href={`/${id}`} className={styles.recipe_link}>To recipe</Link>
//     </CardContent>
//
//   </Card>
// </ThemeProvider>