const {response} = require("express")
const Evento = require('../models/Event')

const getEventos = async(req, res = response) => {

    const eventos = await Evento.find().populate('user', 'name') //estas funciones vienen de moongose

    return res.json({
        ok: true,
        msg: eventos
    })

}

const crearEvento = async(req, res = response) => {

    const evento = new Evento(req.body);

    try {

        evento.user = req.uid

        const eventoGuardado = await evento.save()
        res.json({
            ok: true,
            evento: eventoGuardado
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Comuniquese con el admin"
        })
    }

}

const actualizarEvento = async(req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid; //este uid es el token que se manda por usuario

    try {
        
        const evento = await Evento.findById(eventId)
        if(!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con este id'
            })
        }

        if(evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventId, nuevoEvento, { new: true });
        res.json({
            ok: true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Comuniquese con el admin"
        })
    }

}

const eliminarEvento = async(req, res = response) => {


    const eventId = req.params.id;
    const uid = req.uid; //este uid es el token que se manda por usuario

    try {
        
        const evento = await Evento.findById(eventId)
        if(!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con este id'
            })
        }

        if(evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            })
        }

        await Evento.findByIdAndDelete(eventId);
        res.json({
            ok: true,
            msg: 'Evento eliminado'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Comuniquese con el admin"
        })
    }

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
}