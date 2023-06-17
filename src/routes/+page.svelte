<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	import Homepage from './homepage.svelte';
	import Prevention from './prevention.svelte';
	import Quarantine from './quarantine.svelte';
	import Pages from './pages.svelte';
	import About from './about.svelte';
	import Help from './help.svelte';
	import { onMount } from 'svelte';

	//  let info = []
	//  onMount(async() => {
	//	info = await getInfo();
	//  });

	const getInfo = async () => {
		const res = await fetch('https://api.covidtracking.com/v1/us/daily.json');
		const data = await res.json();
		const filteredData = data.slice(0, 3);
		console.log(filteredData);
		return filteredData;
	};

	// $: console.log(info);
</script>

<Header />
<Homepage />
<Prevention />
<Quarantine />
<Pages />
<About />
<Help />
<Footer />

{#await getInfo()}
	<p>Loading...</p>
{:then data}
	{#each data as { totalTestResults, positive, negativeIncriase, death }}
		<div class="grid">
			<h2>{totalTestResults}</h2>
		</div>
	{/each}
{/await}
