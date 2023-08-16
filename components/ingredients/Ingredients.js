import styles from "@/components/ingredients/Ingredients.module.css"

const Ingredients = ({ingredients, measures}) => {
  const ingAndMeas = [];
  for (let i = 0; i < ingredients.length; i++) {
    ingAndMeas.push([ingredients[i][1], measures[i][1]])
  }
  return (
    <div className={styles.ingredients_block}>
      <h2 style={{marginBottom: 15, display: "flex", justifyContent: "center"}}>Ingredients</h2>
      <ul>
        {ingAndMeas && ingAndMeas.map(item => (
          <li style={{marginTop: 5}}>{item[0]}  <b>{item[1]}</b></li>
        ))}
      </ul>
    </div>
  )
}

export default Ingredients;