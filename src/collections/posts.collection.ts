import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
  name: 'posts',
  displayName: 'Posts',
  slug: 'posts',
  description: 'Manage blog posts and articles',
  icon: '📝',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Title',
        required: true,
        maxLength: 200,
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 200,
      },
      category: {
        type: 'string',
        title: 'Category',
        required: true,
        enum: ['യാത്രകൾ', 'കഥകൾ', 'കവിതകൾ', 'കുറുംകവിതകൾ', 'ലേഖനങ്ങൾ'],
      },
      date: {
        type: 'date',
        title: 'Display Date',
      },
      imageUrl: {
        type: 'media',
        title: 'Image URL',
      },
      excerpt: {
        type: 'textarea',
        title: 'Excerpt',
      },
      content: {
        type: 'markdown',
        title: 'Content',
      },
    },
    required: ['title', 'slug', 'category'],
  },

  listFields: ['title', 'category', 'date'],
  searchFields: ['title', 'category', 'excerpt', 'content'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',

  managed: true,
  isActive: true,

  access: {
    public: ['read'],
  },

  cache: {
    enabled: true,
    ttl: 5,
  },
} satisfies CollectionConfig;
