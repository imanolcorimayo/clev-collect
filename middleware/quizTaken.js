export default async function ({$fire, store, redirect}) {
    // Get collector using user_id to know if this user already taken quiz
    const ALREADY_TAKEN = (await $fire.database.ref('collectors').orderByChild('user_uid').equalTo(store.state.user.uid).get()).val();

    if(ALREADY_TAKEN && Object.keys(ALREADY_TAKEN).length) {
      // TODO: collector uid might be needed  
      const COLLECTOR_UID = Object.keys(ALREADY_TAKEN)[0];

      // This are the properties the object should have to have application completed
      const PROPERTIES_SHOULD_HAVE = [
        'listing_title',
        'listing_bio',
        'services',
        'cv_or_linkedin',
        'availability'
      ];

      let flag = false;
      PROPERTIES_SHOULD_HAVE.forEach(el => {
        // Check if each variable is included on array properties
        if (!Array.prototype.includes.call(ALREADY_TAKEN, el)) flag = true
      })

      // If something is incomplete, then user should go to complete application
      if(flag) return redirect('become-collector/complete-application');

      // If not, just redirect to home
      return redirect('/');
    } 
  }
  