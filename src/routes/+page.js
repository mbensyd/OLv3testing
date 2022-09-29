export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let name = JSON.parse(actor);
    //let name = actorDets.name;
    return {
        name
    };
   
};