<header>
	<ul>
		<li><img src="/logo.png" class="logo" alt="Logo" /></li>
		<li><a href="/">Home</a></li>
		<li><a href="/prevention">Prevention</a></li>
		<li><a href="/qurantine">Qurantine</a></li>
		<li><a href="/pages">Pages</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/help">Help</a></li>
		<li id="tracker"><a href="/tracker">Tracker</a></li>
	</ul>
</header>


<style lang="scss">
	header {
		background-color: pink;
		text-align: right;
		padding: 20px 10px;
		overflow: hidden;
	}

	header li {
		display: inline;
		padding-left: 10px;
	}

	header li a {
		text-decoration: none;
		font-size: 16px;
		color: #8d8daf;
		padding: 12px;
		transition: 0.3s ease;
	}

	header li a:hover {
		color: royalblue;
	}

	header ul #tracker a {
		color: white;
		background-color: #3639ae;
		border-radius: 30px;
		float: right;
		position: relative;
		margin-right: 50px;
        margin-top: -10px;

        padding-left:  40px;
        padding-right: 40px;

		transition: 0.3s ease;
	}

	header ul #tracker a:hover {
		background-color: #293090;
	}

	header li img {
		width: 180px;
		float: left;
		margin-top: -5px;
	}
</style>