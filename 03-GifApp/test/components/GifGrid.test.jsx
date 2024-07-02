import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('<Pruebas en GifGrid />', () => { {
    const category = 'One Punch';

    test('Mostrar el isLoading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

        // screen.debug()
    });

    test('Debe de mostrar Items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://Emmanuel.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://Goku.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);
        
    });
    
    
} })