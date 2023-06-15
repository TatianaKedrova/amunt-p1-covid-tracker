<script>
	let questions = [
		{ id: 1, text: `1` },
		{ id: 2, text: `2` },
		{ id: 3, text: `3` },
		{ id: 4, text: `4` },
		{ id: 5, text: `5` },
		{ id: 6, text: `6` },
		{ id: 7, text: `7` },
		{ id: 8, text: `8` },
		{ id: 3, text: `9` },
		{ id: 3, text: `10` }
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<div class="select">
	<h4>Show</h4>

	<form on:submit|preventDefault={handleSubmit}>
		<select value={selected} on:change={() => (answer = '')}>
			{#each questions as question}
				<option value={question}>
					{question.text}
				</option>
			{/each}
		</select>
	</form>

	<h4>entries</h4>
</div>

<style>
.select{
    display: flex;
    flex-direction: row;
    align-items: center;
	width: 54%;
}

h4{
padding: 0 20px 0 20px;
font-size: 18px;
}



</style>
