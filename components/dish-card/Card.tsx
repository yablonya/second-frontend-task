import styles from "@/components/dish-card/Card.module.css";
import Link from "next/link";
import {FC} from "react";

interface CardProps {
    id: string,
    meal: string,
    category: string,
    mealThumb: string,
    tags: string,
}

const Card:FC<CardProps> = ({id, meal, category, mealThumb, tags}) => {
  return (
    <div className={styles.card_container}>
      <img src={mealThumb} width="200" height="200" alt="meal" className={styles.card_picture}/>
      <div className={styles.card_text}>
        <h2 className={styles.text}>{meal}</h2>
        <p><b>Category:</b> {category}</p>
        {tags !== null ? <p><b>Tags:</b> {tags.replace(/,/g, ', ')}</p> : null}
        <Link href={`/${id}`} className={styles.recipe_link}>Recipe</Link>
      </div>
    </div>
  )
}

export default Card;