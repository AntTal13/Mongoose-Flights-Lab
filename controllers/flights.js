const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: flight._id});
    res.render('flights/show', { title: 'Flight Detail', flight, tickets});
}

function newFlight(req, res) {
    res.render('flights/new');
}

async function create(req, res) {
    res.redirect('/flights')
    try {
        await Flight.create(req.body);
    } catch (err) {
        console.log(err)
        res.render('flights/new', { errorMsg: err.message })
    }
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights })
}