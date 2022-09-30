export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let actorDets = JSON.parse(actor);
    let urlDets = url.searchParams.get('');
    console.log(urlDets);
    //let name = actorDets.name;
    return {
        actorDets
    };
   
};