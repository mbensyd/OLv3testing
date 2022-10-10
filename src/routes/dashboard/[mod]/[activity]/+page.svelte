<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../../store.js';
    import { actLink } from '../../../store.js';
    console.log($dets.newUrl);

    //TOD - get activity link via store to prevent errors on refreshing screen (if a user saves this link and reopens (after clearing cache) iframe src will not be in store)
    let activityID = $page.params.activity;
    let pageID = $page.params.mod;
    let modIndex = modules.indexOf(activityID);
    console.log(modIndex);
    console.log(activityID);

    //TODO - get search from URL to feed into dets store - fixes refresh/clear cache bug    
    //FIXED in +page.js

    //background image
    let pageMod = '';

    // TODO - refactoring so it is fully dynamic
    if (pageID === '$Selecting your Fish$') {
        console.log("mod0");
        pageMod = modules[0];
    } else if (pageID === '$Selecting Optimal Genes$') {
        console.log("mod1");
        pageMod = modules[1];
    } else {
        pageMod = modules[2];
    };

    let finalActLink = $actLink;

</script>

<div class="h-screen max-h-[72px] w-full" style="background-image: linear-gradient(1deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 40%)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')">
<!-- svelte-ignore a11y-missing-attribute -->
<p></p>
</div>
<iframe src="{finalActLink}" height="1000px" width="100%" allow="accelerometer; gyroscope; vr; xr-spatial-tracking;" frameborder="0">
</iframe>

<style>
iframe {
    margin-top: 0px;
    height: 100vh - 72px;
}
</style>