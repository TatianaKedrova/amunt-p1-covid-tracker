<script lang="ts">
	 import { base } from '$app/paths';

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<nav>
	<ul>
		<li><a href="{base}/"><li><img src="images/logo.png" alt="Logo" /></li></a></li>
		<li><a href="{base}/">Home</a></li>
		<li><a href="#prevention" on:click|preventDefault={scrollIntoView}>Prevention</a></li>
		<li><a href="#qurantine" on:click|preventDefault={scrollIntoView}>Qurantine</a></li>
		<li><a href="#pages" on:click|preventDefault={scrollIntoView}>Pages</a></li>
		<li><a href="#about" on:click|preventDefault={scrollIntoView}>About</a></li>
		<li><a href="#help" on:click|preventDefault={scrollIntoView}>Help</a></li>
		<li id="tracker"><a href="{base}/tracker">Tracker</a></li>
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		background-color: white;
		text-align: right;
		padding: 20px 10px;
		overflow: hidden;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	nav li {
		display: inline;
		padding-left: 10px;
	}

	nav li a {
		text-decoration: none;
		font-size: 16px;
		color: #8d8daf;
		padding: 12px;
		transition: 0.3s ease;
	}

	nav li a:hover {
		color: royalblue;
	}

	nav ul #tracker a {
		color: white;
		background-color: #3639ae;
		border-radius: 30px;
		float: right;
		position: relative;
		margin-right: 50px;
		margin-top: -10px;

		padding-left: 40px;
		padding-right: 40px;

		transition: 0.3s ease;
	}

	nav ul #tracker a:hover {
		background-color: #293090;
	}

	nav li img {
		width: 180px;
		float: left;
		margin-top: -5px;
	}
</style>
