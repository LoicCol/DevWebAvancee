import 'whatwg-fetch'

class BaseModel {
  constructor () {
    this.API_URL = 'http://localhost:0/api/v1.0'
  }

  static objects () {
    if (this.class === 'BaseModel') {
      throw new Error('cannot instantiate BaseModel')
    }
    return new this()
  }

  buildHeaders (opts) {
    let headers = {
      'Content-Type': 'application/json'
    }
    return headers
  }

  buildFetchOptions (opts) {
    let data
    if (opts.body && opts.parseBody !== false) {
      data = JSON.stringify(opts.body)
    } else {
      data = opts.body
    }
    let options = {
      method: opts.method || 'GET',
      headers: opts.headers || {},
      body: data || undefined,
      credentials: 'include'
    }
    if (opts && opts.cache) options.cache = opts.cache
    console.log('YOUHHOUUUU::', options)
    return options
  }

  checkResponseStatus (response) {
    console.log('YOYOYO 1000')
    if (response.status >= 200 && response.status < 310) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  parseJSON (response) {
    return response.json()
  }
}

export default BaseModel
