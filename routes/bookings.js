const express = require('express');
const {getBookings, getBooking, addBooking, updateBooking, deleteBooking} = require('../controllers/bookings');
const {protect, authorize} = require('../middleware/auth');

const router = express.Router({mergeParams: true});
router.route('/')
  .get(protect, getAppointments)
  .post(protect, authorize('admin', 'user'), addAppointment);
router.route('/:id')
  .get(protect, getAppointment)
  .put(protect, authorize('admin', 'user'), updateAppointment)
  .delete(protect, authorize('admin', 'user'), deleteAppointment);

module.exports = router;