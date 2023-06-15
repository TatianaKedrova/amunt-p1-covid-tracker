<script>
	import { base } from '$app/paths';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

<section>
	<nav>
		<div class="navbar">
			<div class="logo">
				<a href="{base}/"> <img src="images/covid-defult.svg" alt="Logo" /></a>
				<h1>Covid-19 Tracker</h1>
			</div>
			<ul>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined"> pie_chart</span>
						<span class="nav-item">Charts</span>
					</a>
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined">data_table</span>
						<span class="nav-item">Tables</span>
					</a> 
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined">dataset</span>
						<span class="nav-item">Dashboards</span>
					</a>
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined"> folder </span>
						<span class="nav-item">Ajax</span>
					</a>
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined"> content_copy </span>
						<span class="nav-item">Top 10</span>
					</a>
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined"> trending_up </span>
						<span class="nav-item">Statistics</span>
					</a>
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined"> language </span>
						<span class="nav-item">World</span>
					</a>
				</li>
				<li>
					<a href="/tracker">
						<span class="fas material-symbols-outlined"> chat_bubble </span>
						<span class="nav-item">Countries</span>
					</a>
				</li>
				<li>
					<a href="/" class="logout">
						<span class="fas material-symbols-outlined">group_work</span>
						<span class="nav-item">Log out</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</section>

<style>
	nav {
		position: sticky;
		top: 0;
		left: 0;
		bottom: 0;
		width: 110px;
		height: 100vh;
		background: #fff;
		overflow: hidden;
		border-right: solid #ebe4e4 2px;
		background: #f7f8fc;
	}

	.navbar {
		width: 80%;
		margin: 0 auto;
	}

	.logo {
		padding-bottom: 3rem;
		display: flex;
		align-items: center;
		text-align: center;
		margin: 20px 0 0 20px;

		transition: all 0.5 ease;
	}

	.logo img {
		width: 50px;
		height: 50px;
	}

	.logo h1 {
		margin-left: 1rem;
		text-transform: uppercase;
		font-weight: bold;
		padding-left: 15px;
		font-size: 18px;
	}

	ul {
		margin: 0 auto;
		padding: 0;
	}

	li {
		list-style: none;
	}

	li a {
		text-decoration: none;
		font-size: 16px;
		color: rgb(85, 83, 83);
		position: relative;
		font-size: 14px;
		display: table;
		width: 300px;
		padding: 10px;
	}

	.fas {
		position: relative;
		width: 70px;
		height: 40px;
		top: 14px;
		font-size: 40px;
		text-align: center;
		color: #3639ae;
	}

	a:hover .fas {
		color: white;
	}

	.nav-item {
		width: 50px;
		font-size: 18px;
		text-align: center;
		position: relative;
		top: 12px;
		margin-left: 15px;
	}

	a:hover {
		background: #3639ae;
		color: white;
	}

	nav:hover {
		width: 280px;
		transition: all 0.5s ease;
	}
	.logout {
		position: absolute;
		bottom: 40px;
	}
</style>
