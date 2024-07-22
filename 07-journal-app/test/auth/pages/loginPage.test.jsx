import { render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../../src/store/auth/authSlice"
import { MemoryRouter } from "react-router"

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

describe('Priebas en <loginPage />', () => { 

    test('Debe de mostrar el componente correctamente', () => { 
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByAltText('Login').length).toBeGreaterThanOrEqual(1);
     })

 })