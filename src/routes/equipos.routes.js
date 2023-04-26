const express = require('express');
const router = express.Router();

const equipo = require('../controllers/equipo.controller');

//ruta para listar los equipos
/**
 * @openapi
 * /api/equipos:
 *   get:
 *     tags:
 *       - Equipos
 *     summary: "Listar equipos"
 *     description: Este endopoint es para listar los equipos de la database
 *     responses:
 *       200:
 *         description: Devuelve un array con todos los objetos de tipo Equipo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 portatil:
 *                     type: string
 *                 modelo:
 *                      type: string
 *                 precio: 
 *                      type: integer
 *                 so:
 *                      type: string
 *                 cpu:
 *                      type: string
 *                 ram:
 *                      type: integer
 *                 almacenamiento:
 *                      type: string
 *                 gama:
 *                      type: string
 *                 valoracion:
 *                      type: array
 *                 opiniones:
 *                      type: array
 *                 foto:
 *                      type: string
 *                 enlace:
 *                      type: string
 *                 
 */
router.get('/', equipo.getEquipos);

//ruta para insertar un equipo
/**
 * @openapi
 * /api/equipos:
 *   post:
 *     tags:
 *       - Equipos
 *     summary: "Insertar un equipo"
 *     description: Este endopoint es para insertar un equipo en la database
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 portatil:
 *                     type: string
 *                 modelo:
 *                      type: string
 *                 precio: 
 *                      type: integer
 *                 so:
 *                      type: string
 *                 cpu:
 *                      type: string
 *                 ram:
 *                      type: integer
 *                 almacenamiento:
 *                      type: string
 *                 gama:
 *                      type: string
 *                 valoracion:
 *                      type: array
 *                 opiniones:
 *                      type: array
 *                 foto:
 *                      type: string
 *                 enlace:
 *                      type: string
 *     responses:
 *       200:
 *         description: Devuelve un texto de que se ha insertado correctamente
 *         content:
 *           application/json:
 *             schema:
 *              status:
 *                type: string
 *                 
 */
router.post('/', equipo.addEquipo);

//ruta para mostrar un solo equipo por :id
router.get('/:id', equipo.getEquipo);

//ruta para actualizar un equipo por :id
router.put('/:id', equipo.updateEquipo);

//ruta para eliminar un equipo por :id
router.delete('/:id', equipo.deleteEquipo);

module.exports = router;