<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../../store.js';
    import { actLink } from '../../../store.js';

    //TOD - get activity link via store to prevent errors on refreshing screen (if a user saves this link and reopens (after clearing cache) iframe src will not be in store)
    let activityID = $page.params.activity;
    console.log(activityID);

    //TODO - get search from URL to feed into dets store - fixes refresh/clear cache bug    
    //FIXED in +page.js

    //background image
    let pageID = $page.params.mod;
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

<div>
<!-- svelte-ignore a11y-missing-attribute -->
<iframe src="{finalActLink}" height="1000px" width="100%" allow="accelerometer; gyroscope; vr; xr-spatial-tracking;" frameborder="0">
</iframe>
</div>

<style>
iframe {
    margin-top: 72px;
    height: 100vh - 72px;
}
</style>