import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "../../src/09-useContext/Login";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <Login />', () => { 
    
    test('Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user: null}}>
                <Login />
            </UserContext.Provider>
        )
        // screen.debug()
        const preTag = screen.getByLabelText('pre') //aria-label
        expect(preTag.innerHTML).toBe('null')

    });

    test('Debe de llama el setUser cuando se hace click en el botón', () => {

        const setUserMock = jest.fn() //hacer funcion el setUser

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <Login />
            </UserContext.Provider>
        )

        //sujeto de pruebas
        const buttonElmement = screen.getByLabelText('button')
        //disparar el evento en el boton
        fireEvent.click(buttonElmement)

        //Mandar a llamar la función 1 vez
        expect(setUserMock).toHaveBeenCalledTimes(1)
        //Mandar a llamar la función con los valores predeterminados
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Emmanuel', email: 'example@example.com' })
    });
    
    
 })