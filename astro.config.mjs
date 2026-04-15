// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://lytos.org',
	integrations: [
		starlight({
			title: 'Lytos',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
			},
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				fr: { label: 'Français', lang: 'fr' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/getlytos/lytos-method' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/fred' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { fr: 'Démarrer' },
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction', translations: { fr: 'Introduction' } },
						{ label: 'Quick Start', slug: 'getting-started/quickstart', translations: { fr: 'Démarrage rapide' } },
						{ label: 'Installation', slug: 'getting-started/installation' },
					],
				},
				{
					label: 'The Method',
					translations: { fr: 'La Méthode' },
					items: [
						{ label: 'Manifest', slug: 'method/manifest', translations: { fr: 'Manifest' } },
						{ label: 'Skills', slug: 'method/skills' },
						{ label: 'Rules', slug: 'method/rules', translations: { fr: 'Rules' } },
						{ label: 'Memory', slug: 'method/memory', translations: { fr: 'Memory' } },
						{ label: 'Issue Board', slug: 'method/issue-board' },
						{ label: 'Orchestrator', slug: 'method/orchestrator', translations: { fr: 'Orchestrateur' } },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Your First Session', slug: 'guides/starter', translations: { fr: 'Ta Première Session' } },
						{ label: 'Developer', slug: 'guides/developer', translations: { fr: 'Développeur' } },
						{ label: 'Lead Developer', slug: 'guides/lead', translations: { fr: 'Lead Développeur' } },
					],
				},
				{
					label: 'CLI',
					items: [
						{ label: 'Overview', slug: 'cli/overview', translations: { fr: 'Vue d\'ensemble' } },
						{ label: 'lytos init', slug: 'cli/init' },
						{ label: 'lytos board', slug: 'cli/board' },
					],
				},
				{
					label: 'Philosophy',
					translations: { fr: 'Philosophie' },
					items: [
						{ label: 'Manifesto', slug: 'philosophy/manifesto', translations: { fr: 'Manifeste' } },
						{ label: 'Sovereignty', slug: 'philosophy/sovereignty', translations: { fr: 'Souveraineté' } },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
