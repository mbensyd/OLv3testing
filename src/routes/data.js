import { modData } from './store.js';
import { onMount } from 'svelte';
import { dets } from './store.js';

let reg= 'cat';

onMount( async () => {
    var reg = $dets.reg;
    
    modData.set({ "modules": [
    {
        "Title": "Selecting your tesh",
        "Description": "Stop the basic concepts of green supply chains and environmental management systems, including life cycle assessment.",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        "toDoList": [{"text": "Task 1: Find some fish", "status": true, "link": "https://media.openlearning.com/" },
                    {"text": "Task 2: Eat some fish", "status": false, "link": "https://cenariovr.com/app/#/view/i0q?zfile=live.zip&id=23354"},
                    {"text": "Portfolio 1: Make a fishy", "status": false, "link": `https://media.openlearning.com/${$dets.reg}`}]
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
    })})