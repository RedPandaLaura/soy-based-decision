export interface Recipe {
  id: string
  title: string
  ingredients: string[]
  steps: string[]
  note: string[]
}

import data from './recipes.json'

export const recipes: Recipe[] = data
