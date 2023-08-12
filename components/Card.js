import styles from "@/styles/Card.module.css";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className={styles.card_container}>
      <img src={props.mealThumb} width="150" height="150" alt="meal" className={styles.card_picture}/>
      <div className={styles.card_text}>
        <h3>{props.meal}</h3>
        <p>{props.category}</p>
        {props.tags !== null ? <p>{props.tags.replace(/,/g, ', ')}</p> : null}
      </div>
    </div>
  )
}