import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Puebas en <CounterApp />', () => { 
    const value = 100;

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor de 100 como inicial', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();

    });

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe debe de funcionar el botón de reset', () => {
        render(<CounterApp value={150} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText(150)).toBeTruthy();
    });
    
    
 })