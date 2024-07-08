import {heroes} from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if( !validPublisher.includes(publisher) ) {
        throw new Error(`${publisher} is not validate`)
    }

    //filrar los hereos que vengan en el array importado con los hereos que mandan en props
    return heroes.filter(heroe => heroe.publisher === publisher) 

}