import { recipes } from '@/data/recipes'
import { RecipeCard } from '@/components/RecipeCard'

export function Home() {
  return (
    <ul>
      {recipes.map(recipe => (
        <span key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </span>
      ))}
    </ul>
  )
}
