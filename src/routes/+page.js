export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');

    return {
        actor
    };
   
};