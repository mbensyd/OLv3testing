// why is this here? If a learner opens up this page directly, the previous session data isn't cached (not yet). So we need to get it again, from the URL. Oh dear.
import { dets } from '../../store.js';

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