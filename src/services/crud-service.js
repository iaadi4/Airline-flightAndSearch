
class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async createmodel(data) {
        try {
            const model = await this.repository.create(data);
            return model;
        } catch (error) {
            console.log('Something went wrong in repository layer.');
            throw {error};
        }
    }

    async deletemodel( modelId ) {
        try {
            const response = await this.repository.delete(modelId);
            return response;
        } catch (error) {
            console.log('Something went wrong in repository layer.');
            throw {error};
        }
    }

    async updatemodel(modelId, data) {
        try {
            const model = await this.repository.update(modelId, data);
            return model;
        } catch (error) {
            console.log('Something went wrong in repository layer.');
            throw {error};
        }
    }

    async getmodel(modelId) {
        try {
            const model = await this.repository.get(modelId);
            return model;
        } catch (error) {
            console.log('Something went wrong in repository layer.');
            throw {error};
        }
    }
}

module.exports = CrudService;