import { timeOut } from "../store/utilities";
// import Repository, { baseUrl } from './Repository';

class AdminRepository {
	constructor(callback) {
		this.callback = callback;
	}

	getRequests = (url) => {
		const token = JSON.parse(localStorage.getItem("electionToken"))
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": 'application/json',
				"Authorization": token?.token || undefined
			},
		};
		return fetch(`/api/routes/${url}`, requestOptions).then(this.handleResponse);
	}

	putRequests = (data, url) => {
		const token = JSON.parse(localStorage.getItem("electionToken"))
		const requestOptions = {
			method: "PUT",
			headers: {
				"Content-Type": 'application/json',
				"Authorization": token?.token || undefined
			},
			body: JSON.stringify(data)
		};
		return fetch(`/api/routes/${url}`, requestOptions).then(this.handleResponse);
	}
	
	postRequests = (data, url) => {
		const token = JSON.parse(localStorage.getItem("electionToken"))
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": 'application/json',
				"Authorization": token?.token || undefined
			},
			body: JSON.stringify(data)
		};
		return fetch(`/api/routes/${url}`, requestOptions).then(this.handleResponse);
	}

	deleteRequests = (data, url) => {
		const token = JSON.parse(localStorage.getItem("electionToken"))
		const requestOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": 'application/json',
				"Authorization": token?.token || undefined
			},
			body: JSON.stringify(data)
		};
		return fetch(`/api/routes/${url}`, requestOptions).then(this.handleResponse);
	}

	handleResponse(response) {
		console.log(response);
		if(response.status === 500) {
			// timeOut()
			return false;
		}
		return response.text().then((text) => {
			let data = text && JSON?.parse(text);
			const message = data?.message || text;
			if (message === "invalid token" || message === "jwt malfomed" || message === "jwt expired") {
				// timeOut()
				console.log(message)
			}
			return data;
		}).catch(err => console.log(err, "error"))
	}
}
export default new AdminRepository()

// if (!response.ok) {
// 	const error = (data && data.message) || response.statusText;

// 	return Promise.reject(error);
// }