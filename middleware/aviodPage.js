export default async function ({error}) {
    error({ statusCode: 404, message: 'Page not found' })
}