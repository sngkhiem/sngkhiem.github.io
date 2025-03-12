import { lex, parse as parseFence } from 'fenceparser'
import Slugger from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { escapeSvelte } from 'mdsvex'
import { join, parse } from 'node:path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkFFF from 'remark-fff'
import math from 'remark-math';
// import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehype_katex from 'rehype-katex';
import rehypeKatexSvelte from "rehype-katex-svelte";
import katex from 'katex';
import remarkFootnotes from 'remark-footnotes'
import { createShikiHighlighter, renderCodeToHTML, runTwoSlash } from 'shiki-twoslash'
import { visit } from 'unist-util-visit'

const remarkUraraFm
  = () =>
    (tree, { data, filename }) => {
      const filepath = filename ? filename.split('/src/routes')[1] : 'unknown'
      const { dir, name } = parse(filepath)
      if (!data.fm)
        data.fm = {}
      // Generate slug & path
      data.fm.slug = filepath
      data.fm.path = join(dir, `/${name}`.replace('/+page', '').replace('.svelte', ''))
      // Generate ToC
      if (data.fm.toc !== false) {
        const [slugs, toc] = [new Slugger(), []]
        visit(tree, 'heading', (node) => {
          toc.push({
            depth: node.depth,
            slug: slugs.slug(toString(node), false),
            title: toString(node),
          })
        })
        if (toc.length > 0)
          data.fm.toc = toc
        else data.fm.toc = false
      }
    }

// Better type definitions needed
const remarkUraraSpoiler = () => tree =>
  visit(tree, 'paragraph', (node) => {
    const { children } = node
    const text = children[0].value
    const re = /\|\|(.+?)\|\|/g
    if (re.test(children[0].value)) {
      children[0].type = 'html'
      children[0].value = text.replace(re, (_match, p1) => `<span class="spoiler">${p1}</span>`)
    }
    return node
  })





const correct_hast_tree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

const katex_blocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: { '\\f': '#1f(#2)' }
			});

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};
/** @type {import("mdsvex").MdsvexOptions} */
export default {
  extensions: ['.svelte.md', '.md'],
  highlight: {
    highlighter: async (code, lang, meta) => {
      let fence, twoslash
      try {
        fence = parseFence(lex([lang, meta].filter(Boolean).join(' ')))
      }
      catch (error) {
        throw new Error(`Could not parse the codefence for this code sample \n${code}`)
      }
      if (fence?.twoslash === true)
        twoslash = runTwoSlash(code, lang)
      return `{@html \`${escapeSvelte(
        renderCodeToHTML(
          code,
          lang,
          fence ?? {},
          { themeName: 'material-default' },
          await createShikiHighlighter({ theme: 'material-default' }),
          twoslash,
        ),
      )}\` }`
    },
  },
  layout: {
    _: './src/lib/components/post_layout.svelte',
  },
  
  rehypePlugins: [
		// correct_hast_tree, rehype_katex,
    [rehypeKatexSvelte, {output: 'html', throwOnError: true, colorIsTextColor: true, strict: "warn"}],
    rehypeSlug,
    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    [
      rehypeExternalLinks,
      {
        rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
        target: '_blank',
      },
    ],
  ],
  remarkPlugins: [
		math, //, katex_blocks,
    [
      remarkFFF,
      {
        autofill: {
          path: path => path.replace('/src/routes/', '/urara/'),
          provider: 'fs',
        },
        presets: [],
        strict: {
          media: {
            array: false,
            type: 'string',
          },
        },
        target: 'mdsvex',
      },
    ],
    remarkUraraFm,
    remarkUraraSpoiler,
    [remarkFootnotes, { inlineNotes: true }],
  ],
  smartypants: {
    dashes: 'oldschool',
  },

}

