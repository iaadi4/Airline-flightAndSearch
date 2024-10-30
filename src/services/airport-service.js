const { AirportRepository } = require('../repository/index');

const airportRepository = new AirportRepository();

class AirportService {

    async createAirport(data) {
        try {
            const airport = await airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log('Something went wrong in the service.');
            throw {error};
        }
    }

    async deleteAirport(id) {
        try {
            const reponse = await airportRepository.deleteAirport(id);
            return true;
        } catch (error) {
            console.log('Something went wrong in the service.');
            throw {error};
        }
    }

    async updateAirport(id, data) {
        try {
            const airport = await airportRepository.updateAirport(id, data);
            return airport;
        } catch (error) {
            console.log('Something went wrong in the service.');
            throw {error};
        }
    }

    async getAirport(id) {
        try {
            const airport = await airportRepository.getAirport(id);
            return airport;
        } catch (error) {
            console.log('Something went wrong in the service.');
            throw {error};
        }
    }
}

module.exports = AirportService;