async function zjusecFetch(url, init) {
  const baseUrl = "/api/v1"

  const requestURL = `${baseUrl}/${url}`

  console.log("Fetch: " + requestURL)

  try {
    const response = await fetch(requestURL, init)
    const res = await response.json()

    if (res.Succeed) {
      return res["Message"]
    }

  } catch(e) {
    console.log(`Error: fetch ${url} fail`)
    return null
  }
}

async function GET(url) {
  const init = {
    // mode: "no-cors",
    // headers: new Headers({
    //   'Accept': 'application/json'
    // }),
    credentials: 'include', // with cookie
  }

  return await zjusecFetch(url, init)
}

async function POST(url, params) {
  const init = {
    method: 'POST',
    body: Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&'),
    credentials: 'include',
  }

  return await zjusecFetch(url, init)
}

export {
  GET,
  POST,
}
