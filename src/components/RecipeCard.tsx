import genColor from './../assets/General-Recipe.png'
import type { Recipe } from '@/data/recipes'

type Props = {
  recipe: Recipe
}

export function RecipeCard({recipe}: Props){
    return (
    <article>
      <img src={genColor} alt="" width={200} />
      <h2>{recipe.title}</h2>
    </article>
    )
}