<script>
	let name = "Death";
</script>

<main>
	<div class="container">
		<div class="card title-box">
			<h1>{name}</h1>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	.title-box {
		background-color: #FFFF00;
		font-size: 7em;
		font-weight: 400;
		padding: 4em;
	}
	/*
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 7em;
		font-weight: 400;
	}
	*/

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>