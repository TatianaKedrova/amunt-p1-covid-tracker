<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

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


<div class="card">
	<div class={`icon icon${styleVariant}`}>
		<span class="material-symbols-outlined" style="font-size:32px;" >{iconNames[styleVariant]}</span>
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
		padding: 15px 45px;
	}

	h2 {
		color: #17165c;
	}

	p {
		color: #70709a;
		font-size: 18px;
	}

	.icon {
        width: 40px;
        height: 40px;
        padding: 12px 12px;
        border-radius: 10px;
        margin: 10px;
        color: white;
        text-align: center;
        font-weight: 48px;
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
