import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "world";
  return `<input${add_attribute("value", name, 0)}>

<h1>Hello ${escape(name)}!</h1>`;
});
export {
  Page as default
};
