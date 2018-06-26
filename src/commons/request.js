const self = this || global

// Polyfill from https://github.com/github/fetch/blob/v1.1.1/fetch.js#L8-L21
const support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (() => {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self,
}

// Polyfill from https://github.com/github/fetch/blob/v1.1.1/fetch.js#L364-L375
function parseHeaders(rawHeaders) {
  const headers = new Headers()
  rawHeaders.split(/\r?\n/).forEach(line => {
    const parts = line.split(':')
    const key = parts.shift().trim()
    if (key) {
      const value = parts.join(':').trim()
      headers.append(key, value)
    }
  })

  return headers
}

// Polyfill from https://github.com/github/fetch/blob/v1.1.1/fetch.js#L424-L464
function fetchPolyfill(input, init) {
  return new Promise((resolve, reject) => {
    const request = new Request(input, init)
    const xhr = new XMLHttpRequest()

    /* @patch: timeout */
    if (init.timeout) {
      xhr.timeout = init.timeout
    }
    /* @endpatch */

    xhr.onload = () => {
      const options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || ''),
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      const body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = () => {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = () => {
      reject(new TypeError('Network request failed'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach((value, name) => {
      xhr.setRequestHeader(name, value)
    })

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

function request(url, body, method = 'POST') {
  const timeout = 10 * 1000
  const headers = { 'Content-Type': 'application/json' }
  const options = {
    headers,
    method,
    timeout,
  }
  if (!body) options.method = 'GET'
  else if (typeof body === 'string') options.method = body
  alert(JSON.stringify(body))
  return new Promise((resolve, reject) => {
    fetchPolyfill(url, options)
      .then(res => res.json())
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        reject(String(err))
      })
  })
}

export default request
