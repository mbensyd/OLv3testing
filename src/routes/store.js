import { writable } from 'svelte/store';

export const dets =  writable ('');

export const actLink = writable('');

export const BreadCrumbs = writable({});

export const moduleData = writable({});

export const toggleActivityComplete = (text) => {
    toDoList.update(toDoList => {
        let index = -1;
        for(let i = 0; i < toDoList.length; i++){
            if(toDoList[i].text === text ) {
                index = i;
                break;
            }
        }
        if(index != -1) {
            toDoList[index].status = !toDoList[index].status;
        }
        return toDoList;
    }
        ) 
}

