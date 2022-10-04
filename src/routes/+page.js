import { dets } from './store.js';
import { page } from '$app/stores';


export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    let endpoint = url.searchParams.get('endpoint');
    let auth = url.searchParams.get('auth');
    const newUrl = $page.url.search;

    let actorDets = JSON.parse(actor);
    let userName = actorDets.name;
    let userMbox = actorDets.mbox;

    dets.set({
        userName,
        userMbox,
        reg,
        auth,
        endpoint,
        newUrl,
    }); 
   
};

