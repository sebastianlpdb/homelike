Based on the client assignment.

## What I've done?
1. Remove redux and use Apollo as our single source of truth (This is a big bet because I really like Apollo beigng the single source of turth of my app as documentation said & don't to mess with redux)
2. Add isolated header component and remove it from index.html
3. Install styled-components and use it in a basic way
4. Add many basic components like Button, InputText, etc. as styled components
5. Restructure some views as components
6. Fix bootstrap-grid.min.css path in index.html
7. Webpack is inside the application since it was created using `create-react-app`. I've only ejected the app using `npm run eject` and webpack appears.
8. When I was adding the information about the owner, I only found the email, but reading the API there are more fields. I think something happend with the graphql resolver but during it's out of the scope and the lack of time I leave it right there.
9. Installed `react-loading` to get a nice loading component