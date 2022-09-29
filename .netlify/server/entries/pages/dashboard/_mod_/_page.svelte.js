import { c as create_ssr_component, b as subscribe, e as escape, f as each, d as add_attribute } from "../../../../chunks/index.js";
import { m as modules } from "../../../../chunks/module.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".checked.svelte-194zljq{text-decoration:line-through}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pageID = $page.params.mod;
  let pageMod = modules;
  if (pageID === "$Selecting your Fish") {
    console.log("mod0");
    pageMod = modules[0];
  } else if (pageID === "$Selecting Optimal Genes") {
    console.log("mod1");
    pageMod = modules[1];
  } else {
    pageMod = modules[2];
  }
  console.log(pageMod);
  console.log(pageID);
  console.log(pageMod.image);
  {
    pageMod.toDoList;
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"h-screen bg-cover"}" style="${"background-image: url(../" + escape(pageMod.image, true) + ")"}"><div><h1>${escape(pageMod.Title)}</h1>
        <p>${escape(pageMod.Description)}</p>
        <div><ol>${each(pageMod.toDoList, (item) => {
    return `<li><input type="${"checkbox"}"${add_attribute("checked", item.status, 1)}>
                    <span class="${["svelte-194zljq", item.status ? "checked" : ""].join(" ").trim()}">${escape(item.text)}</span>
                    <a href="${"/"}">Start</a>
                </li>`;
  })}</ol></div></div></div>`;
});
export {
  Page as default
};
