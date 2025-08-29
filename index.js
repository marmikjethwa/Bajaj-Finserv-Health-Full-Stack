const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(__dirname));

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Input validation failed: 'data' must be an array."
            });
        }

        const userDetails = {
            user_id: "marmik_jethwa_10102004",
            email: "marmikjethwa@gmail.com",
            roll_number: "22BCE0825"
        };

        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let totalSum = 0;
        let alphabetChars = [];

        for (const item of data) {
            if (!isNaN(item) && item.trim() !== '') {
                const num = Number(item);
                totalSum += num;
                if (num % 2 === 0) {
                    evenNumbers.push(item);
                } else {
                    oddNumbers.push(item);
                }
            } 
            else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                for (const char of item) {
                    alphabetChars.push(char);
                }
            } 
            else {
                specialCharacters.push(item);
            }
        }

        const reversedChars = alphabetChars.reverse();
        const concatString = reversedChars.map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');

        const responsePayload = {
            is_success: true,
            ...userDetails,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: totalSum.toString(),
            concat_string: concatString
        };

        return res.status(200).json(responsePayload);

    } catch (error) {
        return res.status(500).json({
            is_success: false,
            error: `An unexpected server error occurred: ${error.message}`
        });
    }
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});