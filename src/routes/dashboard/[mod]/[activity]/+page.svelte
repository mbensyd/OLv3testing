<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../../store.js';
    import { actLink } from '../storeLink.js';

    //TOD - get activity link via store to prevent errors on refreshing screen (if a user saves this link and reopens (after clearing cache) iframe src will not be in store)


    //TODO - get search from URL to feed into dets store - fixes refresh/clear cache bug 


    let finalActLink = $actLink;

</script>

<iframe src="{finalActLink}" height="700px" width="100%" allow="accelerometer; gyroscope; vr; xr-spatial-tracking;" frameborder="0">

</iframe>

<style>



iframe {
    margin-top:72px;
    height: 100vh - 72px;
}
</style>