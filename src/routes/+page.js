import { dets } from './store.js';
//import { moduleData } from './store.js';
//moduleData.set('cat');

export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    let endpoint = url.searchParams.get('endpoint');
    let auth = url.searchParams.get('auth');
    let newUrl = url.search;

    let actorDets = JSON.parse(actor);
    let userName = actorDets.name;
    let userMbox = actorDets.mbox;

    dets.set({
        userName,
        userMbox,
        reg,
        auth,
        endpoint,
        newUrl
    }); 
};

