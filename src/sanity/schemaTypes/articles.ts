import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

       defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'photo',
      title: 'Main Photo',
      type: 'image',
    }),

    defineField({
      name: 'photo2',
      title: 'Second Photo',
      type: 'image',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
