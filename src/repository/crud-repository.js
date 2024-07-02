
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create() {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in crud repo.');
            throw {error};
        }
    }

    async destroy(modelId) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong in crud repo.');
            throw {error};
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log('Something went wrong in crud repo.');
            throw {error};
        }
    }

    async update(modelId, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return response;
        } catch (error) {
            console.log('Something went wrong in crud repo.');
            throw {error};
        }
    }
}

module.exports = CrudRepository;