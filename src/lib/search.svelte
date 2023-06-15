<script>
	export let searchTerm;
</script>

<div class="search">
<h4>Search:</h4>
<div id="search-input-cont">
	<input type="text" 
				 id="search-field" 
				 placeholder="Enter Search Term" 
				 autocomplete="off"
				 bind:value={searchTerm}
				 on:input />
</div> 
</div>


<style>

    .search{
        display: flex;
        flex-direction: row;
        justify-content: end;
    }

	#search-input-cont {
		width: 54%;
		display: flex;
		align-items: center;
        justify-content: baseline;
		margin: 0 0 0 10px;
	}

	#search-field {
		width: 100%;
		font-size: 1rem;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 8px;
		margin: 0 10px 0;
	}

	h4{
		font-size: 18px;
	}

</style>