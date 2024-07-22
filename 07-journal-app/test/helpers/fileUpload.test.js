import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'curso-react-fh',
    api_key: '121132676168513',
    api_secret: 'lwTaFuYE9bGXglJrHzE_q77t75w',
    secure: true
})

describe('Pruebas en fileUpload', () => { 

    test('Regresar subir el archivo correctamente a cloudinary', async() => {
        
        const imageUrl = 'https://plus.unsplash.com/premium_photo-1701199501594-2feb36c2d11a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpc2FqZSUyMG5hdHVyYWxlemF8ZW58MHx8MHx8fDA%3D'
        const resp = await fetch(imageUrl)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect(typeof url).toBe('string')

        // Eliminar las imagenes cargadas
        const segments = url.split('/')
        const imgId = segments[segments.length - 1 ].replace('.jpg', '')
        //establecer el path del folder para la eliminación
        await cloudinary.api.delete_resources(['journal-app/'+imgId], {
            resource_type: 'image'
        });

    });

    test('Debe de retornar un null', async() => {
        const file = new File([], 'foto.jpg')
        const url = await fileUpload(file)
        expect(url).toBe(null)
    });
    
    
 })