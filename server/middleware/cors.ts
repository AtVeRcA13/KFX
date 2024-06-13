import { defineEventHandler, setHeaders } from "#imports"

export default defineEventHandler((event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Access-Control-Allow-Methods': "GET,DELETE,PATCH,POST,PUT",
    }
    setHeaders(event, headers)

})