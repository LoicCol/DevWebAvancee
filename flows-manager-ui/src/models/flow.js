import BaseModel from './base'

class FlowModel extends BaseModel {
  list = () => {
    return fetch(
      this.API_URL + '/flows',
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
      this.API_URL + '/flows',
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
}

export default FlowModel