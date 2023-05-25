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


