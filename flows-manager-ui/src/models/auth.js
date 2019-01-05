import BaseModel from './base'

class AuthModel extends BaseModel {
  register = (body = {}) => {
    return fetch(
      this.API_URL + '/auth/register',
      this.buildFetchOptions({
        method: 'POST',
        headers: this.buildHeaders(),
        body: body
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        document.cookie = 'atk=' + result.token + ';expires=' + result.expires_in
        console.log('models/auth register', result)
        return result
      })
  }

  login = (body = {}) => {
    return fetch(
      this.API_URL + '/auth/login',
      this.buildFetchOptions({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        document.cookie = 'atk=' + result.token + ';expires=' + result.expires_in
        console.log('models/auth login', result)
        return result
      })
  }
}

export default AuthModel
