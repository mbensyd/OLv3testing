import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/index.js";
import { m as modules } from "../../../chunks/module.js";
/* empty css                   */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-gl0sej.svelte-gl0sej,a.svelte-gl0sej.svelte-gl0sej{display:none}.selected.svelte-gl0sej p.svelte-gl0sej{color:red;display:inline}.selected.svelte-gl0sej a.svelte-gl0sej{display:inline}.active.svelte-gl0sej.svelte-gl0sej{background-size:cover\n    }.active.svelte-gl0sej a.svelte-gl0sej{display:none}.closed.svelte-gl0sej.svelte-gl0sej{color:blue}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current = false;
  let show = false;
  let clicked = false;
  $$result.css.add(css);
  return `<div class="${"flex flex-row"}">${each(modules, (mod) => {
    return `<div class="${escape(clicked === `${mod.Title}` ? "" : "closed", true) + " basis-0 grow h-screen bg-cover hover:grow-[1.5] " + escape(show === `${mod.Title}` ? "active" : "", true) + " " + escape(current === `${mod.Title}` ? "selected" : "", true) + " svelte-gl0sej"}" style="${"background-image: url(" + escape(mod.image, true) + ")"}"><h1>${escape(mod.Title)}</h1>
            <p class="${"svelte-gl0sej"}">${escape(mod.Description)}</p>
            <a href="${"/dashboard/$" + escape(mod.Title, true)}" data-sveltekit-prefetch type="${"button"}" class="${"svelte-gl0sej"}">Get Started
</a>
            ${``}
        
    </div>`;
  })}</div>`;
});
export {
  Page as default
};
