<script>
	import { base } from '$app/paths';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

<!--<div class="sidenav">
	<ul>
		<li><a href="{base}/tracker"><img src="images/covid-defult.svg" alt="Logo" /></a></li>
		<li><a href="/"><span class="material-symbols-outlined"> pie_chart</span></a></li>
		<li><a href="/"><span class="material-symbols-outlined">data_table</span></a></li>
		<li><a href="/"><span class="material-symbols-outlined">dataset</span></a></li>
		<li><a href="/"><span class="material-symbols-outlined"> folder </span></a></li>
		<li><a href="/"><span class="material-symbols-outlined"> content_copy </span></a></li>
		<li><a href="/"><span class="material-symbols-outlined"> trending_up </span></a></li>
		<li><a href="/"><span class="material-symbols-outlined"> language </span></a></li>
		<li><a href="/"><span class="material-symbols-outlined"> chat_bubble </span></a></li>
		<li><a href="/"><span class="material-symbols-outlined">group_work</span></a></li>
	</ul>
</div>-->

<div class="sidenav">
	
		<a href="{base}/tracker"><img src="images/covid-defult.svg" alt="Logo" /></a>
		<a href="/"><span class="material-symbols-outlined"> pie_chart</span></a>
		<a href="/"><span class="material-symbols-outlined">data_table</span></a>
		<a href="/"><span class="material-symbols-outlined">dataset</span></a>
		<a href="/"><span class="material-symbols-outlined"> folder </span></a>
		<a href="/"><span class="material-symbols-outlined"> content_copy </span></a>
		<a href="/"><span class="material-symbols-outlined"> trending_up </span></a>
		<a href="/"><span class="material-symbols-outlined"> language </span></a>
		<a href="/"><span class="material-symbols-outlined"> chat_bubble </span></a>
		<a href="/"><span class="material-symbols-outlined">group_work</span></a>
	
</div>


<!--<style>
	.sidenav {
		width: 6%;
		height: 100vh;
		background-color: #f7f8fc;

		position: fixed;
		border-right: 1px solid #efeff1;
	}

	img {
		width: 60px;
		float: left;
		padding-bottom: 50px;
	}

	span {
		font-size: 40px;
	}

	.sidenav ul {
	}

	.sidenav li {
		list-style: none;
	}

	.sidenav a {
		color: #4a65bf;
		display: block;
		padding-top: 20px;
	}

	a:hover {
		color: hotpink;
	}

	a:active {
		color: blue;
	}

</style>-->

<style>
	.sidenav {
		width: 6%;
		height: 100vh;
		background-color: #f7f8fc;

		position: fixed;
		border-right: 1px solid #efeff1;

		display: flex;
		flex-direction: column;
		

		padding: 20px 20px;
		
	}

	img {
		width: 60px;
		float: left;
		left: 0;
		padding-bottom: 50px;
	}

	span {
		font-size: 40px;
	}


	.sidenav a {
		color: #4a65bf;
		display: block;
		padding-top: 20px;
		padding-left: 40px;
	}

	a:hover {
		color: hotpink;
	}

	a:active {
		color: blue;
	}
</style>
