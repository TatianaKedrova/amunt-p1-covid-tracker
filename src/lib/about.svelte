<section class="container-page-about" id="about">
	<div class="container-gradient">
		<div class="text">
			<h1>Get the simple app<br />for latest news</h1>
			<p>
				Human coronaviruses are common and are typically associated<br />
				with mild illnesses, similar to the common cold.
			</p>
			<div class="btn-container">
				<button class="btn">Download now</button>
			</div>
		</div>
		<div class="container-img">
			<img src="images/phone-1.png" alt="Phone Mockup" />
		</div>
	</div>
</section>

<style>
	.container-page-about {
		width: 100%;
		background-color: #171133;
		display: flex;
		justify-content: center;
		
	}

	.container-gradient {
		background-image: linear-gradient(to right, #1d119f, #06cbeb);
		width: 1315px;
		border-radius: 10px;
        padding: 57px;
        margin-top: 150px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.text {
		padding-left: 93px;
        padding-top: 35px;
        color: white;
	}

	.text h1 {
		font-size: 60px;
        width: 643px;
	}

	.text p {
		margin-top: -22px;
	}

	.container-img {
		margin-top: -158px;
		padding-left: 185px;
	}

    .container-img > img {
        width: 314px;
	}

    .btn {
		color: black;
		background-color: #ffffff;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
		border-style: none;
		padding: 20px 55px;
		margin-top: 17px;
		cursor: pointer;
	}
</style>
