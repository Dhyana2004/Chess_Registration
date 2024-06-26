const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.post('/register', (req, res) => {
    const { name, branch, semester, phone, studentNumber, email } = req.body;
    
    // Here you would normally save the data to a database.
    console.log(`Received registration: 
        Name: ${name}
        Branch: ${branch}
        Semester: ${semester}
        Phone: ${phone}
        Student Number: ${studentNumber}
        Email: ${email}
    `);

    res.send({ message: 'Registration successful!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
