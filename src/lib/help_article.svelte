<script>
	export let text;
	export let img;
</script>

<div class="container-article">
	<div><img width="180px" alt="BlogImage" src={img} /></div>
	<div class="article">
		<h2>{text}</h2>
	</div>
	<div class="info">
		<div class="symbol"><span class="material-symbols-outlined"> timer </span></div>
		<p>9 sept 2020</p>
		<div class="symbol" style="margin-left:20px;">
			<span class="material-symbols-outlined"> chat_bubble </span>
		</div>
		<p>21 comment</p>
	</div>
	<div class="link">
		<p><strong>Continue</strong></p>
	</div>
</div>

<style>
	.container-article {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: white;
		margin: 28px;
		padding-right: 100px;
	}

	.article {
		padding-left: 50px;
		position: relative;
		top: 40px;
		width: 854px;
		margin-right: 100px;
	}

	.article h2 {
		word-wrap: break-word;
	}

	.info {
		display: flex;
		flex-direction: row;
		position: absolute;
		left: 549px;
	}

	.info p {
		padding-left: 15px;
		cursor: pointer;
	}

	.link p {
		text-decoration: underline;
		cursor: pointer;
	}

	.info .symbol {
		position: relative;
		top: 10px;
	}
</style>
