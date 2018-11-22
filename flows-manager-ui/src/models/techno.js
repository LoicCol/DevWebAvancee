import BaseModel from './base'

class TechnoModel extends BaseModel {
  list () {
    console.log('YAHAHAHAHAAHA')
    return fetch(
      this.API_URL + '/technos',
      this.buildFetchOptions({
        method: 'GET',
        headers: this.buildHeaders
      })
    )
      .then(this.checkResponseStatus)
      .then(this.parseJSON)
      .then(result => {
        console.log('YAHAHAHAHAAHA 2', result)
        return result
      })
  }
}

export default TechnoModel
