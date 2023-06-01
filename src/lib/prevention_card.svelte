<script>
	export let title;
	export let description;
	export let styleVariant;

	let iconNames = {
		1: 'settings_input_component',
		2: 'deployed_code',
		3: 'lock'
	};
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

<div class="card">
	<div class={`icon icon${styleVariant}`}>
		<span class="material-symbols-outlined">{iconNames[styleVariant]}</span>
	</div>
	<h2>{title}</h2>
	<p>{description}</p>
</div>

<style>
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

	h2 {
		color: #17165c;
	}

	p {
		color: #70709a;
	}

	.icon {
		width: 50px;
		height: 50px;
		border-radius: 10px;
	}

	.icon1 {
		background-color: #fa4c9a;
	}

	.icon2 {
		background-color: #ecbf24;
	}

	.icon3 {
		background-color: #35bfe7;
	}
</style>
