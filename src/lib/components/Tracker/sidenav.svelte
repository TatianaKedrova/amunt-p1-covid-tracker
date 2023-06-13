<script>
	import { base } from '$app/paths';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

<section class="container-page">
	<div class="container">
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
							<span class="nav-item">Home</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined">data_table</span>
							<span class="nav-item">Profile</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined">dataset</span>
							<span class="nav-item">Analytics</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined"> folder </span>
							<span class="nav-item">Task</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined"> content_copy </span>
							<span class="nav-item">Setting</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined"> trending_up </span>
							<span class="nav-item">Info</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined"> language </span>
							<span class="nav-item">Info</span>
						</a>
					</li>
					<li>
						<a href="/tracker">
							<span class="fas material-symbols-outlined"> chat_bubble </span>
							<span class="nav-item">Info</span>
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
	</div>
</section>

<style>
	section {
		display: flex;
		width: 1200px;
	}

	nav {
		position: sticky;
		top: 0;
		left: 0;
		bottom: 0;
		width: 110px;
		height: 100vh;
		background: #fff;
		overflow: hidden;
	}

	.navbar {
		width: 80%;
		margin: 0 auto;
	}

	.logo {
		margin: 2rem 0 1rem 0;
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
		border-radius: 50%;
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

	.fas:hover {
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
		width: 55px;
		border-radius: 10px;
	}

	nav:hover {
		width: 280px;
		transition: all 0.5s ease;
	}
	.logout {
		position: absolute;
		bottom: 20px;
	}
</style>
