import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en componente <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Emmanuel'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )
        // screen.debug()
        const preTag = screen.getByLabelText('pre') //aria-label
        expect(preTag.innerHTML).toBe('null')


    });

    test('Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        )
        // screen.debug()
        const preTag = screen.getByLabelText('pre') //aria-label
        // console.log(preTag.innerHTML)
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())


    });
    
 })