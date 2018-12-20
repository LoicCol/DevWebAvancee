import BaseModel from './base'

class ApplicationModel extends BaseModel {
  list () {
    return fetch(
      this.API_URL + '/applications',
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
}

export default ApplicationModel
