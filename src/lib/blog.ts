import type { CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;
export type BlogLang = 'en' | 'fr';

export const blogLocales = {
	en: {
		blog: 'Blog',
		archive: 'Latest articles',
		categories: 'Categories',
		tags: 'Tags',
		allPosts: 'All articles',
		backToBlog: 'Back to blog',
		empty: 'No articles yet.',
		categoryPrefix: 'Category',
		tagPrefix: 'Tag',
		docs: 'Documentation',
		cli: 'CLI',
		home: 'Lytos',
		contact: 'Contact',
	},
	fr: {
		blog: 'Blog',
		archive: 'Derniers articles',
		categories: 'Catégories',
		tags: 'Tags',
		allPosts: 'Tous les articles',
		backToBlog: 'Retour au blog',
		empty: 'Aucun article pour le moment.',
		categoryPrefix: 'Catégorie',
		tagPrefix: 'Tag',
		docs: 'Documentation',
		cli: 'CLI',
		home: 'Lytos',
		contact: 'Contact',
	},
} satisfies Record<BlogLang, Record<string, string>>;

export function slugFromEntry(entry: BlogEntry) {
	return entry.id.split('/').pop()?.replace(/\.(md|mdx)$/, '') ?? entry.id;
}

export function slugify(value: string) {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

export function sortNewestFirst(entries: BlogEntry[]) {
	return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, lang: BlogLang) {
	return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}

export function getTerms(entries: BlogEntry[], type: 'category' | 'tag') {
	const terms = new Map<string, { label: string; slug: string; count: number }>();

	for (const entry of entries) {
		const labels = type === 'category' ? [entry.data.category] : entry.data.tags;
		for (const label of labels) {
			const slug = slugify(label);
			const previous = terms.get(slug);
			terms.set(slug, { label, slug, count: (previous?.count ?? 0) + 1 });
		}
	}

	return [...terms.values()].sort((a, b) => a.label.localeCompare(b.label));
}
