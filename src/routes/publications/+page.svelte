<script lang="ts">
  import { publications as allProjects } from '$lib/config/publication'
  import Head from '$lib/components/head.svelte'
  import PublicationComponent from '$lib/components/extra/publication.svelte'

  let items: { id: string }[] = [...(allProjects as { id: string }[]), { id: 'footer' }]
</script>

<Head />

{#each items as item}
  <PublicationComponent {item} />
{/each}
