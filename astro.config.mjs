// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
	site: 'https://lytos.org',
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['noopener', 'noreferrer'],
				},
			],
		],
	},
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
						{ label: 'Sub-agents', slug: 'method/sub-agents' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'How It Works', slug: 'guides/starter', translations: { fr: 'Comment ça marche' } },
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
						{ label: 'Trainer Kit', slug: 'philosophy/trainers', translations: { fr: 'Kit formateur' } },
						{ label: 'Dev Roles in the AI Era', slug: 'philosophy/roles', translations: { fr: 'Les métiers du dev' } },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/LytosFooter.astro',
			},
			expressiveCode: {
				themes: ['github-light', 'github-dark'],
				styleOverrides: {
					borderRadius: '2px',
					borderColor: 'rgba(21, 21, 21, 0.10)',
					frames: {
						shadowColor: 'transparent',
						frameBoxShadowCssValue: 'none',
						editorTabBarBackground: '#e7e2d4',
						editorActiveTabBackground: '#f1ede3',
						editorActiveTabForeground: '#151515',
						editorActiveTabIndicatorBottomColor: '#4a5233',
						editorTabBarBorderBottomColor: 'rgba(21, 21, 21, 0.10)',
						terminalTitlebarBackground: '#e7e2d4',
						terminalTitlebarForeground: '#5d574b',
						terminalTitlebarBorderBottomColor: 'rgba(21, 21, 21, 0.10)',
						terminalBackground: '#f1ede3',
					},
					codeBackground: '#f1ede3',
					codeForeground: '#151515',
					codeSelectionBackground: 'rgba(15, 58, 95, 0.18)',
				},
				themeCssOverrides: {
					'github-dark': {
						borderColor: 'rgba(245, 242, 236, 0.10)',
						frames: {
							editorTabBarBackground: '#1b1c21',
							editorActiveTabBackground: '#131418',
							editorActiveTabForeground: '#e9e4d8',
							editorActiveTabIndicatorBottomColor: '#8aabcf',
							editorTabBarBorderBottomColor: 'rgba(245, 242, 236, 0.10)',
							terminalTitlebarBackground: '#1b1c21',
							terminalTitlebarForeground: '#a8a294',
							terminalTitlebarBorderBottomColor: 'rgba(245, 242, 236, 0.10)',
							terminalBackground: '#131418',
						},
						codeBackground: '#131418',
						codeForeground: '#e9e4d8',
						codeSelectionBackground: 'rgba(138, 171, 207, 0.25)',
					},
				},
			},
		}),
	],
});
