export default function DishInfo({dish}) {
  return (
    <div>
      <h3>{dish.strMeal}</h3>
      <p>{dish.strCategory}</p>
      {dish.strTags !== null ? <p>{dish.strTags.replace(/,/g, ', ')}</p> : null}
    </div>
  )
}