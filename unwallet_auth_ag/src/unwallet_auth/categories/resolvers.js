import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/auth/signup`, 'POST', user),
		loginUser: (_, { user }) =>
			generalRequest(`${URL}/auth/signin`, 'POST', user)
	}
};

export default resolvers;
