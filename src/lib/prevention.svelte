
<script>
	import PreventionCard from '$lib/prevention_card.svelte';
</script>


<section>
	<div class="text">
		<h3>App Feature</h3>
		<h1>Basic Feature You Will Get<br />When You Use</h1>
	</div>

	<div class="row">
		<PreventionCard
			title="Cough"
			description="Coughing is another key symptom, but its not just any cough, said Shaffner. It should be a dry
		cought that ypou feel in your chest."
			styleVariant=1
		/>

		<PreventionCard
			title="Difficulty breathing"
			description="Shortness of breath can be a third--and very serious--manifistacion of Covid-19, and it can
			occur on its own, without a cough."
			styleVariant=2
		/>

		<PreventionCard
			title="Fever"
			description="Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a
			fever untill your temperature reaches at least 100."
			styleVariant=3
		/>
	</div>
</section>

<style>
	section {
		background-color: #171133;
		padding-top: 50px;
	}

	.text {
		color: white;
		padding-top: 100px;
		text-align: center;
		
	}

	.text h1 {
		font-size: 60px;
		margin-top: -1px;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;

		margin-left: 400px;
	}
</style>
