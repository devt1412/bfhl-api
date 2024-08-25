const { processInputData } = require('../utils');

// Handle GET request
exports.getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

// Handle POST request
exports.handlePostRequest = (req, res) => {
    try {
        const { full_name, dob, college_email, college_roll_number, data } = req.body;

        // Input validation
        if (!full_name || !dob || !college_email || !college_roll_number || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input data" });
        }

        const result = processInputData(data);
        const user_id = `${full_name.split(' ').join('_')}_${dob.split('-').join('')}`;

        res.status(200).json({
            is_success: true,
            user_id: user_id,
            college_email: college_email,
            college_roll_number: college_roll_number,
            ...result
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: error.message });
    }
};
