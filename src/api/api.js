import axios from 'axios';
import API_ROOT from './config';

const api = {
	getClients: async () => {
		try {
			const response = await axios(API_ROOT.concat('clients'))
				return response.data;
			} catch (error) {
			throw error;
			}
	},
	getBusinesses: async () => {
		try {
			const response = await axios(API_ROOT.concat('businesses'))
				return response.data;
			} catch (error) {
			throw error;
			}
	},
	getPartners: async () => {
		try {
			const response = await fetch(API_ROOT.concat('partners'))
				return response.data;
			} catch (error) {
			throw error;
			}
	},
	getServices: async() => {
		try {
			const response = await axios(API_ROOT.concat('services'))
				return response.data;
			} catch (error) {
			throw error;
			}
	},	
}

export default api;