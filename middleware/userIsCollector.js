export default async function ({$fire, store, redirect, route, $toast}) {

    // Get collector using user_id to know if this user already went through this page
    const ALREADY_COLLECTOR = (await $fire.database.ref('collectors').orderByChild('user_uid').equalTo(store.state.user.uid).get()).val();

    // If user is not collector, then analyze if we should redirect or convert them into collectors
    if(!ALREADY_COLLECTOR) {

        if(route.path && route.path.includes('complete-application')) {
            // Create collector profile with status signed up and return
            await $fire.database.ref(`collectors`).push({
                user_uid: store.state.user.uid,
                collector_status: 'SIGNED_UP'
            })
            return;
        }
        // If not, just redirect to home
        return redirect('/');
    }

    console.log(ALREADY_COLLECTOR)

    // Get the recycler id
    const RECYCLER_ID = Object.keys(ALREADY_COLLECTOR)[0];

    // If already applied, return to the profile
    if(ALREADY_COLLECTOR[RECYCLER_ID].collector_status != "SIGNED_UP") {

      process.client && $toast.error("Ya has completado la aplicación.")

      return redirect(`/collector/${RECYCLER_ID}`);
    }

    // TODO: (for te future): check if already completed some more information and redirect to the specific fields
    return;
}
