import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailAndPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixttures";

jest.mock('../../../src/firebase/providers') //cualquier cosa dentro de este path, ya es un mock

describe('Pruebas en authThunks', () => { 

    const dispatch = jest.fn()
    beforeEach(() => jest.clearAllMocks())
    
    test('Debe de invocar el checkingCredentials', async() => {
        await checkingAuthentication()(dispatch)

        //{ type: 'auth/checkingCredentials', payload: undefined }
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())

    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login', async() => {
        const loginData = {ok: true, ...demoUser}
        await signInWithGoogle.mockResolvedValue(loginData)

        //thunk
        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials()); //primero checar credenciales
        expect(dispatch).toHaveBeenCalledWith(login(loginData)); //después hacer el login con la data
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y logout con error', async() => {
        const loginData = {ok: false, errorMessage: 'error en google'}
        await signInWithGoogle.mockResolvedValue(loginData)

        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials()); //primero checar credenciales
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('startLoginWithEmailAndPassword debe de llamar checkingCredentials y login - Exito', async() => {
        
        const loginData = {ok: true, ...demoUser};
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailAndPassword.mockResolvedValue(loginData)
        await startLoginWithEmailAndPassword(formData)(dispatch) //este es el thunk

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        // expect(dispatch).toHaveBeenCalledWith(login(loginData))

    });

    test('startCreatingUserWithEmailPassword debe de llamar checklingCredentials y login - exito', async() => {

        const loginData = {ok: true, ...demoUser};
        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName, photoURL: demoUser.photoURL, uid: demoUser.uid };
        
        await registerUserWithEmailAndPassword.mockResolvedValue(loginData)
        await startCreatingUserWithEmailPassword(formData)(dispatch) //este es el thunk

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        // expect(dispatch).toHaveBeenCalledWith(login({formData}))
    });
    
    test('startLogout debe de llamar logoutFirebase, clearNotes and logout', async() => {

        await startLogout()(dispatch)

        expect(logoutFirebase).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
        expect(dispatch).toHaveBeenCalledWith(logout({}))

    });
 
 })