import 'whatwg-fetch'

class BaseModel {
  constructor() {
    this.API_URL = 'http://localhost:3004/api/v1.0'
  }

  static objects = () => {
    if (this.class === 'BaseModel') {
      throw new Error('cannot instantiate BaseModel')
    }
    return new this()
  }

  getCookie = name => {
    var value = '; ' + document.cookie
    var parts = value.split('; ' + name + '=')
    if (parts.length == 2)
      return parts
        .pop()
        .split(';')
        .shift()
  }

  getToken = () => {
    console.log('getToken', this.getCookie('atk'))
    return this.getCookie('atk')
  }

  buildHeaders = (opts = {}) => {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.getToken()) headers.Authorization = 'Bearer ' + this.getToken()
    return headers
  }

  buildFetchOptions = (opts = {}) => {
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
    return options
  }

  checkResponseStatus = response => {
    if (response.status >= 200 && response.status < 310) {
      return response
    }
    if (response.status === 401) {
      window.location.hash = '/authent'
      return null
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  parseJSON = response => {
    return response ? response.json() : {}
  }
}

export default BaseModel
