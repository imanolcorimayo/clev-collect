export default function (context) {
  const user = context.store.state.auth.user
  if(!user.isLogged) context.redirect('/auth/sign-up')
  if(!user.isProfessional) {
    try {
      context.$axios.$post('/api/v1/user/turn-professional', {
          email: user.email,
      })

      context.store.commit('auth/setUser', {
        name: user.name,
        isLogged: true,
        // Profesional will come in 0,1 format
        isProfessional: true,
      })
    } catch (error) {
      context.error({statusCode: 400, message: 'Error while trying to convert to professional'})
    }
  }
}
