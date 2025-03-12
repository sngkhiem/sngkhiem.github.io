<script lang="ts">
  import type { Publication } from '$lib/types/publication'
  import Footer from '$lib/components/footer.svelte'
  export let item: unknown
  let pub = item as unknown as Publication
  let tags = pub.tags
  let authors = pub.authors
</script>

{#if typeof pub.title !== "undefined"}
<a
  id={pub.id}
  class="card mx-auto max-w-4xl bg-base-100 shadow-xl transition-shadow mb-7 h-card u-url hover:shadow-2xl hover:scale-105 group">
  {#if pub.pubUrl}href={pub.pubUrl}{/if}
  <div class="card-body p-4">
      <div class="flex flex-col md:flex-row items-start gap-4">
        <div class="mb-auto aspect-video w-full max-w-full shrink-0 md:max-w-xs">
          <img class="rounded-md  " src={pub.img} alt={pub.description} />
        </div>
        <div class="card-title flex-1 flex-col items-start gap-4">

        <div>
            <h2 class="p-name text-left text-2xl mb-2 group-hover:w-full">{pub.title}
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </h2>
            <div class="mb-3 text-base font-normal">
              {#if authors}
              {#each authors as auth}
                {#if auth.name === "Dung Vo"}  
                  <a href={auth.url}>
                    <span class="btn btn-sm btn-ghost font-bold normal-case border-base-content/20 border-2 my-1 mr-1">
                    {auth.name}</span></a> 
                {:else}
                  <a class='font-normal' href={auth.url}>
                    <span class="btn btn-sm btn-ghost font-normal normal-case border-base-content/20 border-2 my-1 mr-1">
                    {auth.name}</span></a> 
                {/if}
              {/each}
               {/if}
            </div>
          </div>
        
          <div class="mb-3 text-base font-normal">
              {#if tags}
              {#each tags as tag}
                <span class="btn btn-sm btn-ghost italic normal-case border-dotted border-base-content/20 border-2 my-1 mr-1">
                  {tag}
                </span>
              {/each}
              {/if}
           </div>

      </div>
    </div>
</a>



{/if}
