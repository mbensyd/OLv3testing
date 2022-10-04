import { dets } from './store.js';
import { onMount } from 'svelte';

export async function load () {
    let url = ``;
    onMount(() => url = window.location.href);
    dets.set(url);

};

