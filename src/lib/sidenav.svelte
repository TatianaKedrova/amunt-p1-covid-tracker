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
			</div>
			<ul>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined"> pie_chart</span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined">data_table</span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined">dataset</span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined"> folder </span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined"> content_copy </span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined"> trending_up </span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined"> language </span></a>
				</li>
				<li>
					<a href="/tracker"><span class="icon material-symbols-outlined"> chat_bubble </span></a>
				</li>
				<li>
					<a href="/" class="logout"><span class="icon material-symbols-outlined">group_work</span></a>
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
		margin: 30px 0 0 20px;
	}

	.logo img {
		width: 50px;
		height: 50px;
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
		display: table;

		margin: 10px;
		color: #3639ae;
	}

	a:hover {
		color: white;
		background: #3639ae;
		border-radius: 10px;
		height: 70px;
	}

	.icon {
		position: relative;
		width: 70px;
		height: 60px;
		top: 14px;
		font-size: 40px;
		text-align: center;
	}

	.logout {
		position: absolute;
		bottom: 40px;
	}
</style>
