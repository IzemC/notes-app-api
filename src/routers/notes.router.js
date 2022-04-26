const express = require("express");

const router = express.Router();

const notesControllers = require('../controllers/notes.controller.js');
const middlewares = require('../middlewares/auth');

router.get('/', middlewares.isAuth, notesControllers.getAll);
router.get('/:id', middlewares.isAuth, notesControllers.getOne);

router.post('/', middlewares.isAuth, notesControllers.addOne);


router.delete('/old', middlewares.isAuth, notesControllers.deleteOld);
router.delete('/:id', middlewares.isAuth, notesControllers.deleteOne);
router.delete('/', middlewares.isAuth, notesControllers.deleteAll);

module.exports = router;