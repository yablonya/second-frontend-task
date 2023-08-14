import styles from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className={styles.card_container}>
      <img src={props.mealThumb} width="200" height="200" alt="meal" className={styles.card_picture}/>
      <div className={styles.card_text}>
        <Link href={`/${props.id}`}><h3>{props.meal}</h3></Link>
        <p>{props.category}</p>
        {props.tags !== null ? <p>{props.tags.replace(/,/g, ', ')}</p> : null}
      </div>
    </div>
  )
}