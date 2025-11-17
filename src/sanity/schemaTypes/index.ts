import { type SchemaTypeDefinition } from 'sanity'
import article from './articles'
import project from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, project]  // <-- wszystkie schematy w jednej tablicy
}
