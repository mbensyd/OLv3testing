export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let actorDets = JSON.parse(actor);

    var endpoint = url.searchParams.get('endpoint');
    var auth = url.searchParams.get('auth');
    var activity_id = urlParams.get('activity_id');
    var registration = urlParams.get('registration');

    //let name = actorDets.name;
    return {
        "actorDets" : actorDets,
        "endPoint": endpoint,
        "authDets": auth,
        "actID": activity_id,
        "reg": registration,
    };
    
    
};