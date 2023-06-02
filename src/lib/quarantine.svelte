<section class="container">
	<div class="container-img">
		<img src="images/mobiles.png" alt="Phone Mockup" />
	</div>

	<div class="text">
		<h1>Stay Home, And<br />Prayer for Victim</h1>
		<p>
			Human coronaviruses are common and are typically <br />
			associated with mild illnesses, similar to the common cold.<br /><br />

			Shortness of breath can be a third --and very sirious--<br />
			manifestation of Covid-19, and it can occur on its own,<br />
			without a cough.
		</p>
		<div class="btn-container">
			<button class="btn">Download Now</button>
		</div>
	</div>
</section>

<style>
	.container {
		background-color: #171133;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 4em;
		padding-top: 100px;
		padding-bottom: 100px;
	}

	.text {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.text h1 {
		color: white;
		font-weight: bold;
		font-size: 60px;
	}

	.text p {
		color: whitesmoke;
		font-weight: normal;
		font-size: 20px;
		padding-top: 200px;
		position: absolute;
	}

	.btn-container {
		padding-top: 180px;
		position: relative;
	}

	.btn {
		color: white;
		background-color: #3639ae;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
		border-style: none;
		padding: 20px 55px;

		position: absolute;
	}

	.container-img {
		padding-left: 377px;
	}
</style>
