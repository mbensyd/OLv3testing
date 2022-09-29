export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let actorDets = JSON.parse(actor);
    //let name = actorDets.name;
    return {
        actorDets
    };
   
};