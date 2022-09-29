export async function load (page) {
    var urlParams = new URLSearchParams(window.location.search);
    var actor = JSON.parse(urlParams.get('actor'));
    
    return {
        name: actor.name
    }
   
};