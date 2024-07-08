import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../src/router/PublicRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router";

describe('Pruebas en PublicRoute', () => { 
    test('Si no está autenticado debe de mostrar el children', () => {

        const contextValue = {
            logged: false,
        }
        
        render(
                <AuthContext.Provider value={contextValue}>
                    <PublicRouter>
                        <h1>Ruta publica</h1>
                    </PublicRouter>
                </AuthContext.Provider>
            )

        expect(screen.getByText('Ruta publica')).toBeTruthy();

    });

    test('Debe de navegar asi está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Emmanuel',
                id: 123
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRouter>
                                <h1>Ruta publica</h1>
                            </PublicRouter>
                        } />
                        <Route path="marvel" element={<h1>Página de marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página de marvel')).toBeTruthy();

    });

    test('', () => {
        
    });
    
    
 })