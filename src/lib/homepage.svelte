<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<section class="home-page">
	<div class="home-text">
		<h1>Download the covid<br />app for get latest<br />update</h1>
		<p class="text-paragraf1">
			Human coronaviruses are common and are typically associated with<br />
			mild illnesses, similar to the common cold. The corona viris Covid-19 is<br />
			affecting 210 countries & territories around the world and 2<br />
			international conveyances.
		</p>
		<div class="text-button">
			<button class="btn-home">How to protect</button>
		</div>

		<div class="icon-buttons">
			<div>
				<a class="btn btn-icon1" href="#forward" ><span class="material-symbols-outlined">
					forward</span></a>
			</div>
			<div>
				<a class="btn btn-icon2" href="#headphones"><span class="material-symbols-outlined">
					headphones</span></a>
			</div>
			<div>
				<a class="btn btn-icon3" href="#shopping_basket"><span class="material-symbols-outlined">
					shopping_basket</span></a>
			</div>	
		</div>
	</div>

	<div class="home-img">
		<img src="images/phones.png" alt="Phone Mockup" />
	</div>

	<div class="home-companies-img">
		<img src="images/b-2.png" alt="company1" />
		<img src="images/b-3.png" alt="company1" />
		<img src="images/b-4.png" alt="company1" />
		<img src="images/b-5.png" alt="company1" />
		<img src="images/b-6.png" alt="company1" />
		<img src="images/b-2.png" alt="company1" />
	</div>
</section>


<style>
	.home-page {
		background-color: #172462;
		background-image: linear-gradient(#3990b7, #172462);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 4em;
	}

	.home-text {
		display: flex;
		flex-direction: column;
		padding-left: 150px;
		padding-top: 50px;
		position: relative;
	}

	.home-text h1 {
		color: white;
		font-weight: bold;
		font-size: 60px;
	}

	.home-text .text-paragraf1 {
		padding-top: 280px;
		position: absolute;
		color: whitesmoke;
		font-weight: normal;
		font-size: 20px;
	}

	.text-button {
		padding-top: 120px;
		position: relative;
	}

	.btn-home {
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

	.icon-buttons{
		position: relative;
	}

	.btn{
		color: white;

		border: none;
		border-radius: 50%;

		text-align: center;
  		text-decoration: none;
	
		padding: 14px 14px;
		
  		cursor: pointer;
	}

	.btn-icon1{
		background-color: #fe6550;
	}

	.btn-icon2{
		background-color: #25c5de;
	}

	.btn-icon3{
		background-color: #98c764;
	}

	.home-img {
		padding-top: 60px;
		padding-left: 100px;
		margin-bottom: 100px;
	}

	.home-companies-img{
		background-color: #ffffff;
	}
</style>
