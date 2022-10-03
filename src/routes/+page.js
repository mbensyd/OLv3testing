export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    var urlAdd = window.location.search;
    let actorDets = JSON.parse(actor);

    //let name = actorDets.name;
    return {
        actorDets,
        reg,
        urlAdd
    };
   
};