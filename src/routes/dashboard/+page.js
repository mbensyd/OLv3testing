import mod1 from '$lib/images/mod1.png';
import mod2 from '$lib/images/mod2.png';
import { modules } from "$lib/data/module.json";


export async function load (page) {
    if (modules[0].image) {
        return mod1
    } 
};