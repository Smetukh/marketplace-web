import * as actions from './authActions';
import Api from '../../api';

export function login(body) {
	return async function loginThunk(dispatch) {
		try {
			dispatch(actions.login.start());
			console.log('body = ', body)

			const res = await Api.Auth.login(body);
			console.log('res = ', res)
			const { user, token } = res.data;


			Api.Auth.setToken(token);

			dispatch(actions.login.success(user));
		} catch (err) {
			console.log(err)
			dispatch(actions.login.error({ message: err.message }));
		}
	};
}
export function register(body) {
	return async function registerThunk(dispatch) {
		try {
			dispatch(actions.register.start());

			const res = await Api.Auth.register(body);

			const { user, token } = res.data;

			Api.Auth.setToken(token);

			dispatch(actions.register.success(user));
		} catch (err) {
			console.log(err)
			dispatch(actions.register.error({ message: err.message }));
		}
	};
}
export function logout() {
	return async function logoutThunk(dispatch) {
	  	try {
			dispatch(actions.logout.start());
	
			Api.Auth.logout();
	
			dispatch(actions.logout.success());
	  	} catch (e) {
			console.error(e);
			// dispatch(actions.logout.error({ message: e.message }));
	  	}
	};
}