<script>
	import HelpArticle from '$lib/help_article.svelte';

	import foto1 from '$lib/assets/blog-1.jpg';
	import foto2 from '$lib/assets/blog-2.jpg';
	import foto3 from '$lib/assets/blog-3.jpg';

	let infoList = [
		{ text: 'Can Covid-19 be caught from a person who has no symptomps?', img: foto1 },
		{ text: 'What you need to know About Novel Corona Virus Covid-19', img: foto2 },
		{ text: 'What can I do to protect myself and prevent the spread of desease?', img: foto3 }
	];
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,0,200"
/>

<div class="container-page-help">
	{#each infoList as info}
		<HelpArticle {...info} />
	{/each}
</div>

<style>
	.container-page-help {
		background-color: #171133;
		display: flex;
		flex-direction: column;
		padding: 100px;
	}
</style>
