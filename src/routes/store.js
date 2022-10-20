import { writable } from 'svelte/store';

export const dets =  writable ('');

export const actLink = writable('');

export const BreadCrumbs = writable({});

export const moduleData = writable({});

// for todolist from supabase, testing, jsut in case we need to do this.
/*
export const loadToDos = async () => {
    const {data, error } = await supabase.from('ActivityList1').select()

    if(error) {
        return console.error(error)
    }
    todos.set(data);
}
*/