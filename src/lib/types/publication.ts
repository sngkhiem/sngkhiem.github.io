import type { FFFAuthor } from 'fff-flavored-frontmatter'

 
export type Publication = {
    id: string,
    title: string,
    img?: string,
    authors: {
        name: string,
        url?: string,
        co?: boolean,
        me?: boolean
    }[]
    pubUrl?: string,
    conference?: string,
    tags?: string[]
    description?: string,
}


