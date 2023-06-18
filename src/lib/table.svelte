<script>
	import Select from '$lib/select.svelte';
	import Search from '$lib/search.svelte';
	import Pagination from '$lib/pagination.svelte';


	fetch('https://covid-193.p.rapidapi.com/statistics', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '361b72e903msh262aae2aecbe518p1fa763jsn0c1ccd8bae7e',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch (err => {
	console.error(err);
});

</script>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

<div class="w3-container">
	<h2>Ajax Data Table - Covid-19 - Country Wise State</h2>
	<hr />
	<div class="search-select">
		<Select />
		<Search />
	</div>

	<div class="w3-responsive">
		<table class="w3-table-all w3-xlarge">
			<tr class="headers">
				<th>Flag</th>
				<th>Country</th>
				<th>Cases</th>
				<th>New Cases</th>
				<th>Death</th>
				<th>New Death</th>
				<th>Recovered</th>
				<th>Active</th>
				<th>Critical</th>
				<th>Tested</th>
			</tr>
			<tr>
				<td>flag</td>
				<td>USA</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>India</td>
				<td>60</td>
				<td>70</td>
				<td>94</td>
				<td>94</td>
				<td>94</td>
				<td>94</td>
				<td>94</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>Brazil</td>
				<td>67</td>
				<td>67</td>
				<td>67</td>
				<td>67</td>
				<td>67</td>
				<td>67</td>
				<td>67</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>France</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>UK</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
			<tr>
				<td>flag</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
				<td>50</td>
			</tr>
		</table>
		<div class="pagination">
			<h3>Showing 1 to 10 of 225 entires</h3>
			<Pagination />
		</div>
	</div>
</div>

<style>
	.w3-container {
		background: #ffffff;
		margin: 30px 30px;
		width: 1227px;
	}

	hr {
		margin: 30px -20px 20px;
	}

	h2 {
		color: #1b204e;
		font-size: 24px;
		font-weight: bold;
		margin: 20px 0 20px 20px;
	}

	h3 {
		font-size: 20px;
	}

	.headers {
		font-size: 16px;
		color: #1b204e;
	}

	.search-select {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.pagination {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px;
	}
</style>
