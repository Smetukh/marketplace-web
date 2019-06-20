import axios from 'axios';

const urls = {
	login: '/api/auth/login',
	register: '/api/auth/register',
	getViewer: '/api/account/user',
	getLatest:'/api/products/latest',
}

export const Auth = {
	_token: null,

	get isLoggedIn () {
			return !!this._token;
	},

	setToken(token) {
		
		this._token = token;

		this._storeToken();

		this._setTokenToAxios(token);
	},

	init() {
		try {
			const token = window.localStorage.getItem('token');
			this._token = JSON.parse(token);

			this._setTokenToAxios(token);
		} catch(err) {
			console.error(err);
		}
			
	},
	login(body) {
		const aaa = axios.post(urls.login, body)
		console.log('aaa= ', aaa)
		return aaa;
	},
	logout() {
		this._token = null;
		try {
			window.localStorage.removeItem('token');
		} catch(err) {
			console.error(err);
		}
	},
	_storeToken() {
		try {
				window.localStorage.setItem('token', JSON.stringify(this._token));
		} catch (err) {
				console.error(err);
		}
	},
	_setTokenToAxios(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	}
}
export const Viewer = {
  get() {
		console.log(axios.defaults)
    return axios.get(urls.getViewer);
  }
};

export const Products ={
  getLatest(){
    return axios.get(urls.getLatest);
  }
};

export function init() {
	Auth.init();
}