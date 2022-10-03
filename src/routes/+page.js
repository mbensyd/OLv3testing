export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    let actorDets = JSON.parse(actor);

    //let name = actorDets.name;
    return {
        actorDets,
        reg,
    };
   
};