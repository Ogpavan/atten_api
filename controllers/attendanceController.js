// controllers/attendanceController.js
const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  const { studentId, date, status } = req.body;

  try {
    const attendance = new Attendance({ student: studentId, date, status });
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate('student', ['name', 'rollNumber']);
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
