// import { timeOut } from '~/store/utilities';
import Repository, { baseUrl, serializeQuery } from './Repository';

class AuthRepository {
    constructor(callback) {
      this.callback = callback;
    }

	async register(params) {
    const reponse = await Repository.post(
      `/api/routes/register`, params
    )
		.then(response => {
			return response.data;
		})
		.catch(error => error);
      return reponse;
  }

	async loginAdmins(params) {
    const reponse = await Repository.post(
      `/api/routes/login`, params
    )
		.then(response => {
			return response.data;
		})
		.catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
  }

  // async validateLoginCooperative(params) {
  //   const reponse = await Repository.post(
  //     `${baseUrl}/cooperative/cooperativeValidateLogin`, params
  //   )
	// 	.then(response => {
	// 		return response.data;
	// 	})
	// 	.catch(error => ({ error: JSON.stringify(error) }));
  //     return reponse;
  // }

	// async validateLoginAdmins(params) {
  //   const reponse = await Repository.post(
  //     `/api/routes/login`, params
  //   )
	// 	.then(response => {
	// 		return response.data;
	// 	})
	// 	.catch(error => ({ error: JSON.stringify(error) }));
  //     return reponse;
  // }
  	// async loginCooperative(params) {
  //   const reponse = await Repository.post(
  //     `${baseUrl}/cooperative/cooperativeLogin`, params
  //   )
	// 	.then(response => {
	// 		return response.data;
	// 	})
	// 	.catch(error => ({ error: JSON.stringify(error) }));
  //     return reponse;
  // }

	async forgot_password(params) {
		const url = params.admin === "admin"? "admin/adminRecoverPassword":"cooperative/cooperativeRecoverPassword"; 
    const reponse = await Repository.post(
      `${baseUrl}/${url}`, params.value
    )
		.then(response => {
			return response.data;
		})
		.catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
  }

	async reset_password(params) {
		const url = params.admin === "admin"? "admin/adminResetPassword":"cooperative/cooperativeResetPassword"; 
        const reponse = await Repository.post(
            `${baseUrl}/${url}`, params.value
        )
		.then(response => {
			return response.data;
		})
		.catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

	async verify_email(params) {
        const reponse = await Repository.post(
            `${baseUrl}/auth/verify_email/${params.token}`
        )
		.then(response => {
			return response.data;
		})
		.catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}
export default new AuthRepository();
