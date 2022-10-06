// why is this here? If a learner opens up this page directly, the previous session data isn't cached (not yet). So we need to get it again, from the URL. Oh dear.
import { dets } from './storeLink.js';
import { modData } from './storeLink.js';

export async function load ({params, url}) {
    let actor = url.searchParams.get('actor');
    let reg = url.searchParams.get('registration');
    let endpoint = url.searchParams.get('endpoint');
    let auth = url.searchParams.get('auth');
    let newUrl = url.search;

    let actorDets = JSON.parse(actor);
    let userName = actorDets.name;
    let userMbox = actorDets.mbox;

    dets.set({
        userName,
        userMbox,
        reg,
        auth,
        endpoint,
        newUrl
    }); 

    const authURL = encodeURIComponent(auth);
    const endpointURL = encodeURIComponent(endpoint);
    const nameURL = encodeURIComponent(userName);
    const mboxURL = encodeURIComponent(userMbox);
    const regURL = encodeURIComponent(reg);

    modData.set({ "modules": [
        {
            "Title": "Selecting your Fish",
            "Description": "Stop the basic concepts of green supply chains and environmental management systems, including life cycle assessment.",
            "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
            "toDoList": [{"text": "Task 1: Find some fishyy", "status": true, "link": `https://media.openlearning.com/NLdnqLay7fgVSFY8j8dbuTaVy5SntPfn9dHEqqTYfQAvyS99BTkdTH6d4WcjKsFY.1664518486/demo-xapi-44M0T6Hc/index.html?activity_id=https%3A%2F%2Fwww.openlearning.com%2Fcourses%2Fanother-experiment%2Ftemp%2F%3Fblock%3D6336895226a58ba166fa72d9%26embedded%3Dtrue&actor=%7B%22objectType%22%3A%22Agent%22%2C%22name%22%3A%22${nameURL}%22%2C%22mbox%22%3A%22${mboxURL}%22%7D&auth=${authURL}&endpoint=${endpointURL}&registration=${regURL}` },
                        {"text": "Task 2: Eat some fish", "status": false, "link": `https://cenariovr.com/app/#/view/i0q?zfile=live.zip&id=23354&activity_id=https%3A%2F%2Fwww.openlearning.com%2Fcourses%2Fanother-experiment%2Ftemp%2F%3Fblock%3D633d57f61d5de6cf26298351%26embedded%3Dtrue&actor=%7B%22objectType%22%3A%22Agent%22%22name%22%3A%22${nameURL}%22%2C%22mbox%22%3A%22${mboxURL}%22%7D&auth=${authURL}&endpoint=${endpointURL}&registration=${regURL}`},
                        {"text": "Portfolio 1: Make a fishy", "status": false, "link": `https://media.openlearning.com/${reg}`}]
        },
        {
            "Title": "Selecting Optimal Genes",
            "Description": "Learn the basic concepts of green supply chains and environmental management systems, including life cycle assessment.",
            "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "toDoList": [{"text": "Task 1: Find some fish", "status": true},
                        {"text": "Task 2: Eat some fish", "status": false},
                        {"text": "Portfolio 1: Make a fishy", "status": false}]
        },
        {
            "Title": "Selecting a Genetic Transformation Method",
            "Description": "Learn the basic concepts of green supply chains and environmental management systems, including life cycle assessment.",
            "image": "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
      ]
        })
   
};