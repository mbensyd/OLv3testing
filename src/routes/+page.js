import { dets } from './store.js';

export async function load ({params, url}) {
    let uri = url.searchParams;
    url = window.location.href;
    dets.set(url);

};

