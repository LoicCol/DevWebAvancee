import BaseModel from './base'

class ApplicationModel extends BaseModel {
  list = () => {
    return fetch(
      this.API_URL + '/apps',
      this.buildFetchOptions({
        method: 'GET',
        headers: this.buildHeaders(),
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        return result
      })
  }

  create = (body = {}) => {
    return fetch(
      this.API_URL + '/apps',
      this.buildFetchOptions({
        method: 'POST',
        headers: this.buildHeaders(),
        body: body,
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        return result
      })
  }

  get = (id = '') => {
    return fetch(
      this.API_URL + '/apps/' + id,
      this.buildFetchOptions({
        method: 'GET',
        headers: this.buildHeaders()
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        return result
      })
  }

  update = (body = {}) => {
    return fetch(
      this.API_URL + '/apps',
      this.buildFetchOptions({
        method: 'PUT',
        headers: this.buildHeaders(),
        body: body
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        return result
      })
  }
}

export default ApplicationModel
