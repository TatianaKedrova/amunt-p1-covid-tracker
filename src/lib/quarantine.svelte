<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

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

	<div class="statistics">
		<div>
			<div><span class="material-symbols-outlined" style="font-size:45px;color:#8d8999;"> lock </span></div>
			<h2>403</h2>
			<h3>Startups</h3>
		</div>
		<div>
			<div><span class="material-symbols-outlined" style="font-size:45px;color:#8d8999;"> upload </span></div>
			<h2>120+</h2>
			<h3>Member</h3>
		</div>
		<div>
			<div><span class="material-symbols-outlined" style="font-size:45px;color:#8d8999;"> star_rate </span></div>
			<h2>22M</h2>
			<h3>Revenue</h3>
		</div>
		<div>
			<div><span class="material-symbols-outlined" style="font-size:45px;color:#8d8999;"> favorite </span></div>
			<h2>5643</h2>
			<h3>Download</h3>
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
		margin-top: -19px;
	}

	.btn {
		color: white;
		background-color: #3639ae;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
		border-style: none;
		padding: 20px 55px;
		margin-top: 17px;
	}

	.container-img {
		padding-left: 377px;
	}

	.statistics {
		color: white;
		text-transform: uppercase;
		display: flex;
		justify-content: space-between;
		text-align: center;
		position: relative;
  		left: 517px;
}
	

	.statistics h2{
		font-size: 33px;
	}

	.statistics h3{
		font-size: 14px;
		margin-top: -15px;
		font-weight: 400;
	}





</style>
