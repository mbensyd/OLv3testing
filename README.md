# Adding and Removing Modules 

You can add, remove and edit modules, including:

- Module titles and descriptions
- Background image
- Module tasks

within the module.JSON file. 

🚨 Currently there is a quick fix to get the correct module info to appear when you open the full module screen. Edit the titles in the "if" statement in the [mod] and [activity] +page.svelte files with the corresponding title in the JSON and the position in the array. This will be updated in the future so this is updated automatically.

## Editing the Mission

Currently this needs to be done in the root +page.svelte file. This hasn't been added to the JSON to date, but will be in future updates. 

## Known Bugs

1. When a user refreshed on an activity page (e.g. the page with the embedded activity iframe, like the rise modules), the embedded iframe returns a 404. - FIXED

## Future updates

1. Breadcrumbs added to the top nav
2. A profile dropdown that includes a calendar, what's coming up and a link to user profile settings
3. Improved animations 
4. A carousel that activates when there are > 3 modules on the dashboard. 
5. Caching of data to improve load times
6. Loaders so a user knows something is happening when waiting for iFrames to load

