import { dets } from '..lib/Stores/store.js';


export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    let endpoint = url.searchParams.get('endpoint');
    let auth = url.searchParams.get('auth');

    let actorName = JSON.parse(actor.name);
    let actorMbox = JSON.parse(actor.mbox);


    dets.set({
        actorName,
        actorMbox,
        reg,
        auth,
        endpoint
    })

};

