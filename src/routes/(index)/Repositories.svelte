<script>
	import RepositoryCard from '$index/RepositoryCard.svelte';

	const repositories = [
		{
			username: 'berkay-yalin',
			repository: 'berkay-yalin.io',
			description: 'personal portfolio website',
			language: 'JavaScript',
			column: '1',
			row: '1',
		},
		{
			username: 'berkay-yalin',
			repository: 'scientific-computing-with-python',
			description: 'my solution links to freeCodeCamp\'s "Scientific Computing with Python" course',
			language: 'Python',
			column: '2 / 4',
			row: '1',
		},
		{
			username: 'mikeroyal',
			repository: 'Windows-11-Guide',
			description: 'Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.',
			language: 'Shell',
			column: '1 / 3',
			row: '2',
		},
		{
			username: 'berkay-yalin',
			repository: 'python-probabilities',
			description: 'Library for accurate statistical calculations using Python.',
			language: 'Python',
			column: '1 / 3',
			row: '3',
		},
		{
			username: 'berkay-yalin',
			repository: 'svelte-github-repo-card',
			description: 'Svelte component to showcase a GitHub repository.',
			language: 'JavaScript',
			column: '3',
			row: '2',
		},
		{
			username: 'berkay-yalin',
			repository: 'dotfiles',
			description: 'trying to figure out how neovim works',
			language: 'Lua',
			column: '3',
			row: '3',
		},
	];
</script>

<div id="repository-grid">
	{#each repositories as parameters}
		<RepositoryCard {...parameters}/>
	{/each}
</div>

<style lang="scss">
	#repository-grid {
		display: grid;
		grid-template-rows: repeat(3, min-content);
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
	}
</style>
