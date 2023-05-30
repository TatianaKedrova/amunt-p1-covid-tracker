<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />



<script>
</script>

<section>
	<div class="text">
		<h3>App Feature</h3>
		<h1>Basic Feature You Will Get<br />When You Use</h1>
	</div>

	<div class="row">
		<div class="card card1">
            <div class="icon icon1"><span class="material-symbols-outlined">settings_input_component</span></div>
			<h2>Cough</h2>
			<p>
				Coughing is another key symptom, but its not just any cough, said Shaffner. It should be a
				dry cought that ypou feel in your chest.
			</p>
		</div>

		<div class="card card2">
            <div class="icon icon2"><span class="material-symbols-outlined">deployed_code</span></div>
			<h2>Difficulty breathing</h2>
			<p>
				Shortness of breath can be a third--and very serious--manifistacion of Covid-19, and it can
				occur on its own, without a cough.
			</p>
		</div>
		<div class="card card3">
            <div class="icon icon3"><span class="material-symbols-outlined">lock</span></div>
			<h2>Fever</h2>
			<p>
				Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a
				fever untill your temperature reaches at least 100.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		background-color: #171133;
	}

	.text {
		color: white;
		padding-top: 100px;
		text-align: center;
		position: relative;
	}

	.text h1 {
		font-size: 60px;
		position: absolute;
		top: 110px;
		right: 600px;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;

		height: 800px;
		margin-left: 400px;
	}

	.card {
		background-color: #ffffff;
		display: inline-block;
		width: 400px;
		height: 300px;
		border-radius: 10px;

		box-sizing: border-box;
		cursor: pointer;
		margin: 10px 15px;
		padding: 15px 25px;
	}

    h2{
        color: #17165c;
    }

    p{
        color: #70709a;
    }

    .icon{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        
    }

    .icon1{
        background-color: #fa4c9a;
    }

    .icon2{
        background-color: #ecbf24;
    }

    .icon3{
        background-color: #35bfe7;
    }


</style>
