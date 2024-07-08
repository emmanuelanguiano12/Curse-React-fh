import { render, screen } from "@testing-library/react";
import { AuthContext, LoginPage } from "../../src/auth";
import { MemoryRouter } from "react-router";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en AppRouter', () => { 
    test('Debe de mostrar el login si no está autenticada', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
    });

    // screen.debug();
    
 })