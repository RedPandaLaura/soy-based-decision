export interface Recipe {
  id: string
  title: string
  ingredients: string[]
  steps: string[]
}

const modules = import.meta.glob<Recipe>('./recipes/*.json', { eager: true, import: 'default' })

export const recipes: Recipe[] = Object.values(modules)
