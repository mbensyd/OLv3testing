export async function load ({params, url}) {
    let auth = url.searchParams.get('auth');
   // let actorDets = JSON.parse(actor);

    

    //let name = actorDets.name;
    return {
        auth
    };
   
};