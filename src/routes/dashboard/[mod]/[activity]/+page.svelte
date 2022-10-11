<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../../store.js';
    import { actLink } from '../../../store.js';
    console.log(modules);

    //add xAPI to activities TODO: do this on next route using url data - prevents refresh/clear cache bug and losing this. 
    let xapiTag = $page.url.search;
    //console.log(xapiTag);
    let indexUrl = xapiTag.indexOf("embedded");
    //console.log(indexUrl);
    let addUrl = xapiTag.substring(indexUrl);
    //console.log(addUrl);


    //TODO - get search from URL to feed into dets store - fixes refresh/clear cache bug    
    //FIXED in +page.js

    //background image
    let pageMod = '';
    let pageID = $page.params.mod;
    //console.log(pageID);

    // TODO - refactoring so it is fully dynamic
    var indexMod = modules.findIndex(function(post, index) {
        if(post.Title === pageID)
            return true;
        });
    //console.log(indexMod);

    pageMod = modules[indexMod];
    //console.log(pageMod);

    //TOD - get activity link via store to prevent errors on refreshing screen (if a user saves this link and reopens (after clearing cache) iframe src will not be in store)
    let toDoList = pageMod.toDoList;
    //console.log(toDoList);
    let activityID = $page.params.activity;
    //console.log(activityID);

    // getting index of activity from toDoList
    var indexActivity = toDoList.findIndex(function(post, index) {
        if(post.text === activityID)
            return true;
        });
    //console.log(indexActivity);

    // Getting link from toDoList 
    let testLink = toDoList[indexActivity].link;
    //console.log(testLink);
    
    // building activity link for iFrame embed with xAPI data (from addUrl)
    $actLink = (`${testLink}+${addUrl}`);
    //console.log(actLink);
    

    // breadcrumbs
    import { BreadCrumbs } from '../../../store.js';
    $BreadCrumbs = {
    [$page.params.mod]: `/dashboard/${$page.params.mod}${$dets.newUrl}`,
    [$page.params.activity]: `#`
    };

</script>

<div class="h-screen max-h-[72px] w-full" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 40%)), url({pageMod.image}">
<!-- svelte-ignore a11y-missing-attribute -->
<p></p>
</div>
<iframe src="{$actLink}" height="1000px" width="100%" allow="accelerometer; gyroscope; vr; xr-spatial-tracking;" frameborder="0">
</iframe>

<style>
iframe {
    margin-top: 0px;
    height: 100vh - 72px;
}
</style>