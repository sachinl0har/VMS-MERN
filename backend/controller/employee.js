const Appointment = require('../models/appointment');
const Employee = require('../models/employee');

// Register
exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {

        // create a employee code format like year + name first letter + month + date + random number
        const employeeCode = new Date().getFullYear().toString() + name[0].toUpperCase() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString() + Math.floor(Math.random() * 10000).toString();
        
        const employee = await Employee.create({
            employeeCode,
            organizationID : req.body.organizationID,
            name,
            email,
            password,
            avatar: {
                public_id: "sample_id",
                url: "sample_url",
              },
        });
        res.status(200).json({
            success: true,
            employee
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Login
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by employee
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: "Please enter email and password"
        });
    }

    const employee = await Employee.findOne({ email }).select("+password");

  if (!employee) {
    return res.status(401).json({
        success: false,
        error: "Invalid email or password"
    })
  }

  const isPasswordMatched = await employee.comparePassword(password);

  if (!isPasswordMatched) {
    return res.status(401).json({
        success: false,
        error: "Invalid email or password"
    })
  }

    res.cookie("employeeId", employee.employeeCode);

    res.cookie("organizationId", employee.organizationID);

    res.cookie("role", employee.role);

  
  return res.status(200).json({
    success: true,
    employee
  });
}

// Logout
exports.logout = async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: "Logged out"
    });
}

// Fetch Employee Details by Employee Code
exports.fetchEmployeeDetails = async (req, res) => {
    try {

        const employee = await Employee.findOne({
            employeeCode: req.params.id,
        });

        // If employee is not found
        if (!employee) {
            return res.status(404).json({
                status: "fail",
                message: "No employee found",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                employee,
            },
        });

        return employee;
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Fetch Appointments by Employee Code
exports.fetchAppointmentsByECode = async (req, res) => {
    try {

        const employee = await Employee.findOne({
            employeeCode: req.params.id,
        });

        // If employee is not found
        if (!employee) {
            return res.status(404).json({
                status: "fail",
                message: "No employee found",
            });
        }

        // Fetch appointments by employee ID
        const appointments = await Appointment.find({
            fedBy : employee.employeeCode,
            employeeToMeet : employee.employeeCode,
        });

        console.log(appointments);

        res.status(200).json({
            status: "success",
            data: {
                employee,
                appointments,
            },
        });

        return appointments;
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}