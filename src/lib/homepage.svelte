<script>
	import HomepageIconButtons from '$lib/homepage_icon_buttons.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<section class="homepage">
	<div class="text">
		<h1>Download the covid<br />app for get latest<br />update</h1>
		<p>
			Human coronaviruses are common and are typically associated with<br />
			mild illnesses, similar to the common cold. The corona viris Covid-19 is<br />
			affecting 210 countries & territories around the world and 2<br />
			international conveyances.
		</p>
		<div class="btn-container">
			<button class="btn">How to protect</button>
		</div>

		<HomepageIconButtons />
	</div>

	<div class="container-img">
		<img src="images/phones.png" alt="Phone Mockup" />
	</div>

	<div class="container-companies-img">
		<img src="images/b-2.png" alt="company1" />
		<img src="images/b-3.png" alt="company1" />
		<img src="images/b-4.png" alt="company1" />
		<img src="images/b-5.png" alt="company1" />
		<img src="images/b-6.png" alt="company1" />
		<img src="images/b-2.png" alt="company1" />
	</div>
</section>

<style>
	.homepage {
		background-color: #172462;
		background-image: linear-gradient(#3990b7, #172462);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 4em;
	}

	.text {
		display: flex;
		flex-direction: column;
		padding-left: 150px;
		padding-top: 50px;
		position: relative;
	}

	.text h1 {
		color: white;
		font-weight: bold;
		font-size: 60px;
	}

	.text p {
		padding-top: 280px;
		position: absolute;
		color: whitesmoke;
		font-weight: normal;
		font-size: 20px;
	}

	.btn-container {
		padding-top: 120px;
		position: relative;
	}

	.btn{
		color: white;
		background-color: #121158;
		border-color: #2b3799;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 30px;
		border-style: solid;
		padding: 20px 55px;

		position: absolute;
	}

	.container-img {
		padding-top: 60px;
		padding-left: 100px;
		margin-bottom: 100px;
	}

	.container-companies-img {
		background-color: #ffffff;
		width: 1600px;
        height: 100px;
		display: flex;
        justify-content: space-between;
        align-content: center;
        border-radius: 10px;
        position: absolute;
        top: 730px;
        right: 330px;
    
	}

	.container-companies-img > img {
        margin: 10px 50px;
	}
</style>
