export default function (context) {
  const STATE = context.store.state

  if(!STATE.isLogged || !STATE.user.uid) context.redirect('/auth/sign-in')
}
