async function apiFetch(url, init) {
  const baseUrl = "/api/v1"
  const requestURL = `${baseUrl}/${url}`

  // console.log("Fetch: " + requestURL)
  const response = await fetch(requestURL, init)
  return await response.json()
}

export async function GET(url, params = null) {
  const init = {
    // mode: "no-cors",
    // headers: new Headers({
    //   'Accept': 'application/json'
    // }),
    credentials: 'include', // with cookie
  }

  const queryStr = !params
    ? ''
    : '?' + Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&')

  return await apiFetch(url + queryStr, init)
}

export async function POST(url, params) {

  const formData = new FormData()
  for (let name in params) {
    formData.append(name, params[name])
  }

  const init = {
    method: 'POST',
    // "Content-Type": 'application/x-www-form-urlencoded',
    body: formData,
    credentials: 'include',
  }

  return await apiFetch(url, init)
}
