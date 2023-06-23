<script>
	import HomepageIconButtons from '$lib/homepage_icon_buttons.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<section class="homepage">
	<div class="text">
		<HomepageIconButtons />
		<h1>Download the covid app for get latest update</h1>
		<p>
			Human coronaviruses are common and are typically associated with mild illnesses, similar to
			the common cold. The corona viris Covid-19 is affecting 210 countries & territories around the
			world and 2 international conveyances.
		</p>
		<div class="btn-container">
			<button class="btn">How to protect</button>
		</div>
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
		padding: 50px;
	}

	.text {
		display: flex;
		flex-direction: column;
		padding-left: 300px;
	}
	.text h1 {
		color: whitesmoke;
		font-weight: bold;
		font-size: 60px;
	}

	.text p {
		color: whitesmoke;
		font-weight: normal;
		font-size: 20px;
		margin-top: -19px;
		line-height: 33px;
	}

	.btn-container {
		margin-top: 2%;
	}

	.btn {
		color: white;
		background-color: #121158;
		border-color: #2b3799;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 70px;
		border-style: solid;
		padding: 25px 72px;
		cursor: pointer;
	}

	.container-img {
		padding-left: 152px;
		margin-bottom: 100px;
	}

	.container-companies-img {
		background-color: #ffffff;
		width: 1533px;
		height: 135px;
		display: flex;
		justify-content: space-evenly;
		align-content: center;
		border-radius: 10px;
		position: absolute;
		top: 769px;
		right: 142px;
	}

	.container-companies-img > img {
		margin: 10px 50px;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
	}
</style>
