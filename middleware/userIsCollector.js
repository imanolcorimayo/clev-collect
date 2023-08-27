export default async function ({$fire, store, redirect, route}) {

    // Get collector using user_id to know if this user already went through this page
    const ALREADY_COLLECTOR = (await $fire.database.ref('collectors').orderByChild('user_uid').equalTo(store.state.user.uid).get()).val();
    
    // If user is not collector, then analyze if we should redirect or convert them into collectors
    if(!ALREADY_COLLECTOR) {

        if(route.path && route.path.includes('complete-application')) {
            // Create collector profile with status signed up and return
            // TODO: Create collector in database

            return;
        }
        // If not, just redirect to home
        return redirect('/');
    }

    // TODO: (for te future): check if already completed some more information and redirect to the
    // specific fields
    return;
}