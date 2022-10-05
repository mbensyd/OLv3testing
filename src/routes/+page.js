import { dets } from './store.js';
import { modData } from './store.js';


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

    modData.set({ "modules": [
        {
            "Title": "Selecting your tesh",
            "Description": "Stop the basic concepts of green supply chains and environmental management systems, including life cycle assessment.",
            "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
            "toDoList": [{"text": "Task 1: Find some fish", "status": true, "link": "https://media.openlearning.com/" },
                        {"text": "Task 2: Eat some fish", "status": false, "link": "https://cenariovr.com/app/#/view/i0q?zfile=live.zip&id=23354"},
                        {"text": "Portfolio 1: Make a fishy", "status": false, "link": `https://media.openlearning.com/{reg}`}]
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

