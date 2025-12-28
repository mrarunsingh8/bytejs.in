export default defineEventHandler(async (event) => {
    const { url } = getQuery(event) as { url: string }

    if (!url) {
        throw createError({
            statusCode: 400,
            statusMessage: 'URL is required'
        })
    }

    const res = await fetch(url)

    // Headers
    const headers: Record<string, string> = {}
    res.headers.forEach((value, key) => {
        headers[key] = value
    })

    // HTTP version detection (Node / Nitro)
    // @ts-ignore
    const alpn = res?.socket?.alpnProtocol

    let protocol = 'HTTP/1.1'
    let isQUIC = false

    if (alpn === 'h2') protocol = 'HTTP/2'
    if (alpn === 'h3') {
        protocol = 'HTTP/3'
        isQUIC = true
    }

    return {
        status: `${res.status} ${res.statusText}`,
        protocol,
        isQUIC,
        headers
    }
})
