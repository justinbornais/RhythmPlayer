<script>
	let app = "Rhythm Clapper";
</script>

<main>
	<div class="container">
		<div class="card title-box">
			<h1>{app}</h1>
		</div>
	</div>
	
	<div class="center">
		<canvas id="staff" width="1200px" height="500px">
		</canvas>
	</div>
	
	<script src="staff.js"></script>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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