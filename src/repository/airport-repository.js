const { Airport } = require('../models/index');


class AirportRepository {

    async createAirport({name, address, cityId}) {
        try {
            const airport = await Airport.create({name, address, cityId});
            return airport;
        } catch (error) {
            console.log('Something went wrong in the repository.');
            throw {error};
        }
    }

    async deleteAirport(id) {
        try {
            const response = await Airport.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong in the repository.');
            throw {error};
        }
    }

    async getAirport(id) {
        try {
            const airport = await Airport.findByPk(id);
            return airport;
        } catch (error) {
            console.log('Something went wrong in the repository.');
            throw {error};
        }
    }

    async updateAirport(id, {name, address, cityId}) {
        try {
            const airport = await Airport.findByPk(id);
            airport.name = name;
            airport.address = address;
            airport.cityId = cityId;
            await airport.save();
        } catch (error) {
            onsole.log('Something went wrong in the repository.');
            throw {error};
        }
    }
}

module.exports = AirportRepository;