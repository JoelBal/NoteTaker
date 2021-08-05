const router = require('express').Router();
const store = require('../db/store');

// GET "/api/notes" respond with all notes from database
router.get('/api/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            console.log(notes)
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.post('/api/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

router.delete('/api/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});
module.exports = router;