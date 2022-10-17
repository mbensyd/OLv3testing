import { writable } from 'svelte/store';

export const dets =  writable ('');

export const actLink = writable('');

export const BreadCrumbs = writable({});

export const moduleData = writable({});

export const toggleActivityComplete = (title) => {
    activityList.update(activityList => {
        let index = -1;
        for(let i = 0; i < activityList.length; i++){
            if(activityList[i].title === title ) {
                index = i;
                break;
            }
        }
        if(index = -1) {
            activityList[index].completed = !activityList[index].completed;
        }
        return activityList;
    }
        ) 
}

