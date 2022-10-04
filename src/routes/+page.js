export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    let endpoint = url.searchParams.get('endpoint');
    let auth = url.searchParams.get('auth');

    let actorDets = JSON.parse(actor);

    return {
        actorDets,
        reg,
        auth,
        endpoint
    }; 


   
};