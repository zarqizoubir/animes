<script lang="ts">
	import RailEffect from './RailEffect.svelte';
	export let href: string;
	export let active: boolean = false;
	export let title: string;
	$: hovered = false;
</script>

{#if hovered}
	<RailEffect />
{/if}

<a
	on:focus={() => {}}
	on:mouseover={() => {
		hovered = true;
	}}
	on:mouseleave={() => {
		hovered = false;
	}}
	{href}
	type="button"
	class:bg-secondary-100={active}
	class=" {active
		? 'before:absolute before:-left-[0.15vw] before:z-10 before:h-6 before:w-1 before:rounded-full before:bg-primary-500'
		: ''}  btn btn-icon relative w-[76px] rounded-[15px] p-0"
	><div class="inline-grid">
		<div class="absolute inset-0 flex flex-col items-center justify-center gap-2">
			<slot />
			<span class:hidden={active} class="text-[1rem] font-semibold capitalize leading-[1rem]"
				>{title}</span
			>
		</div>
	</div>
</a>


