<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header />

<div class="layout">
	<main>
		<slot />
	</main>
</div>
<Footer />

<style>
	:global(body) {
		font-family: 'lanear_Lane', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100%;
	}
</style>