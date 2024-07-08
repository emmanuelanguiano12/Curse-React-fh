import { AuthReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 
    test('Debe retornar el estado inicial', () => {

        const state = AuthReducer({logged: false}, {})

        expect(state).toEqual({logged: false})
    });

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Emmanuel',
                id: 123,
            }
        }

        const state = AuthReducer({logged: false}, action)

        expect(state).toEqual({...state, logged: true,  user: action.payload})
    });

    test('Debe de (logout) borrar el nombre del usuario y logged en false', () => {

        const action = {
            type: types.logout
        }

        const state = AuthReducer({logged: true}, action)

        expect(state).toEqual({logged: false})
    });
    
 })