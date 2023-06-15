<script>
	import SideNav from '$lib/sidenav.svelte';
	import SideBar from '$lib/sidebar.svelte';
</script>

<main>
	<div class="layout">
		<SideNav />
		<SideBar />
		<slot />
		
	</div>
</main>

<style>
	:global(body) {
		font-family: 'lanear_Lane', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100%;

		outline: none;
		border: none;
		text-decoration: none;
		list-style: none;
	}

	.layout {
		display: flex;
		flex-direction: row;
		background: #f7f8fc;
		
	}
</style>
