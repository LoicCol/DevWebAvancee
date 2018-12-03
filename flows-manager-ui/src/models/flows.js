import BaseModel from './base'

class FlowModel extends BaseModel {
    async list() {
        return await fetch(
            this.API_URL + '/flows',
            this.buildFetchOptions({
                method: 'GET',
                headers: this.buildHeaders()
            })
        )
            .then(this.checkResponseStatus)
            .then(this.parseJSON)
            .then(result => {
                return result;
            })
    }
}

export default FlowModel
