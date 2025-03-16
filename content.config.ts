// noinspection JSUnusedGlobalSymbols

import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        works: defineCollection({
            source: 'works/**.md',
            type: 'page',
            // Define custom schema for docs collection
            schema: z.object({
                tags: z.array(z.string()),
                image: z.string().optional(),
                // image: z.string(),
                // date: z.date()
            })
        }),

    }
})
