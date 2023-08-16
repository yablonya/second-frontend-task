import styles from "@/components/dish-card/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className={styles.card_container}>
      <img src={props.mealThumb} width="200" height="200" alt="meal" className={styles.card_picture}/>
      <div className={styles.card_text}>
        <h3>{props.meal}</h3>
        <p><b>Category:</b> {props.category}</p>
        {props.tags !== null ? <p><b>Tags:</b> {props.tags.replace(/,/g, ', ')}</p> : null}
        <Link href={`/${props.id}`} className={styles.recipe_link}>Recipe</Link>
      </div>
    </div>
  )
}