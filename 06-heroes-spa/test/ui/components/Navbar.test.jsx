import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router";

const mockUseNavigate = jest.fn()

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockUseNavigate,
}))

describe('Pruebas en Navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Emmanuel'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('Probar que aparezca el nombre de la persona', () => {
        render(
            <AuthContext.Provider value={contextValue}>{/* Cuando se trabaja con context es necesario siempre traerlos */}
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Emmanuel')).toBeTruthy()
    });

    test('hacer una evaluacion cuando se haga click', () => {
        render(
            <AuthContext.Provider value={contextValue}>{/* Cuando se trabaja con context es necesario siempre traerlos */}
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const buttonLogout = screen.getByRole('button')
        fireEvent.click(buttonLogout)

        expect(contextValue.logout).toHaveBeenCalled()

        //Apuntar al Navigate
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {replace: true})
    });
    
 })