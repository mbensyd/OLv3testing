<script>
    import { modules } from "$lib/data/module.json";
    import { page } from '$app/stores';
    import { dets } from '../../../store.js';
    import { actLink } from '../storeLink.js';
    //console.log($actLink);

    //build rise link to save progress from user details
    //let urlRise = $actLink;
    const authURL = encodeURIComponent($dets.auth);
    const endpointURL = encodeURIComponent($dets.endpoint);
    const nameURL = encodeURIComponent($dets.userName);
    const mboxURL = encodeURIComponent($dets.userMbox);
    const regURL = encodeURIComponent($dets.reg);
    const newURL = encodeURIComponent($dets.newUrl);
    //console.log(newURL);

    //actLink.update(`actLink`);

    let urlRise = $actLink;
    console.log($actLink);
    //let urlRise = `https://media.openlearning.com/NLdnqLay7fgVSFY8j8dbuTaVy5SntPfn9dHEqqTYfQAvyS99BTkdTH6d4WcjKsFY.1664518486/demo-xapi-44M0T6Hc/index.html?activity_id=https%3A%2F%2Fwww.openlearning.com%2Fcourses%2Fanother-experiment%2Ftemp%2F%3Fblock%3D6336895226a58ba166fa72d9%26embedded%3Dtrue&actor=%7B%22objectType%22%3A%22Agent%22%2C%22name%22%3A%22${nameURL}%22%2C%22mbox%22%3A%22${mboxURL}%22%7D&auth=${authURL}&endpoint=${endpointURL}&registration=${regURL}`;
    let pageID = $page.params.activity;
    let pageMod = modules;
   //console.log(pageID);

    console.log(urlRise);

    

</script>

<iframe src="{urlRise}" height="700px" width="100%" allow="accelerometer; gyroscope; vr; xr-spatial-tracking;" frameborder="0">

</iframe>

<style>
iframe {
    margin-top:72px;
}
</style>