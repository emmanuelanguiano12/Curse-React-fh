import { getByRole, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GiftItem />', () => { 
    const title = 'Saitama';
    const url = 'https://emmanuel.com'

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<GifItem title={title}  url={url}/>)
        expect(container).toMatchSnapshot();
    });
    // test('Debe de mostrar la imagen con la URL y el ALT', () => {
    //     render(<GifItem title={title}  url={url}/>)
    //     screen.debug()
    //     expect(screen.getByRole('img').src).toBe(url);
    //     const {src, alt} = screen.getByRole('img');
    //     expect(src).toBe(url);
    //     expect(alt).toBe(title);
    // });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title}  url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });
    
 })