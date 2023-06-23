<script>
import { onMount } from 'svelte'; 

	//  let info = []
	//  onMount(async() => {
	//	info = await getInfo();
	//  });

	 const getInfo = async () => {
	 	const res = await fetch('https://api.covidtracking.com/v1/states/daily.json');
	 	const data = await res.json();
	 	const filteredData = data.slice(0, 1);
	 	console.log(filteredData);
	 	return filteredData;
	 };

	// $: console.log(info);

</script>

<section>
	<div class="cases">
		<div>
			<h1>Covid-19 Tracker</h1>
		</div>
		{#await getInfo()}
			<p>Loading...</p>
		{:then data}
			{#each data as { totalTestResults, positive, negativeIncriase, death }}
				<div class="card card-1">
					<h3>Total Case</h3>
					<h2>{totalTestResults}</h2>
				</div>
				<div class="card card-2">
					<h3>Active Case</h3>
					<h2>{positive}</h2>
				</div>
				<div class="card card-3">
					<h3>Recovered Case</h3>
					<h2>{negativeIncriase}</h2>
				</div>
				<div class="card card-4">
					<h3>Death Case</h3>
					<h2>{death}</h2>
				</div>
			{/each}
		{/await}

		<div class="countries">
			<div>
				<h1>Top 10 Country</h1>
			</div>
			<div class="card-country">
				<p>&#x1F1FA;&#x1F1F8;</p>
				<h4>USA</h4>
				<h5>336373745</h5>
			</div>
			<div class="card-country">
				<p>&#x1F1EE;&#x1F1F9;</p>
				<h4>Italy</h4>
				<h5>3536836357</h5>
			</div>
			<div class="card-country">
				<p>&#x1F1EC;&#x1F1E7;</p>
				<h4>United Kingdom</h4>
				<h5>322532467</h5>
			</div>
			<div class="card-country">
				<p>&#x1F1EA;&#x1F1F8;</p>
				<h4>Spain</h4>
				<h5>3653745886</h5>
			</div>
			<div class="card-country">
				<p>&#x1F1E6;&#x1F1EB;</p>
				<h4>Afghanistan</h4>
				<h5>162111</h5>
			</div>
			<div class="card-country">
				<p>&#x1F1E6;&#x1F1F1;</p>
				<h4>Albania</h4>
				<h5>436246246</h5>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		border-right: solid #ebe4e4 2px;
		width: 447px;
		height: 110vh;
		top: 0;
		bottom: 0;
		background-color: white;
	}

	.cases {
		margin: 20px 20px;
	}

	h1 {
		font-size: 30px;
		font-weight: bold;
	}

	h3 {
		color: #212578;
		font-size: 16px;
	}

	.card {
		width: 400px;
		height: 70px;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20px 0;
		padding: 0px 20px;
	}

	.card-1 {
		background-color: #fff2f2;
	}

	.card-1 h2 {
		color: #ff2c3e;
	}

	.card-2 {
		background-color: #fff9f1;
	}

	.card-2 h2 {
		color: #ff7b4a;
	}

	.card-3 {
		background-color: #edffec;
	}

	.card-3 h2 {
		color: #92cd48;
	}

	.card-4 {
		background-color: #eefbff;
	}

	.card-4 h2 {
		color: #393bae;
	}

	.countries {
		margin: 20px 20px;
	}

	.countries h1 {
		color: #1b204e;
		font-size: 20px;
		font-weight: bold;
	}

	.countries h4 {
		color: black;
		font-size: 16px;
		font-weight: 300;
	}

	.countries h5 {
		color: #39356c;
		font-size: 16px;
		font-weight: bold;
	}

	.card-country {
		width: 400px;
		height: 61px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 15px 0;
		padding: 0 20px;
		border: solid #ebe4e4 2px;
		box-shadow: 0 0.2rem 0.5rem #e6edef;
		align-items: center;
	}

	p {
		font-size: 37px;
	}
</style>
