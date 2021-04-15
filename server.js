const express = require('express');

const app = express();


app.get('/api', (req, res, next) => {
    res.json({
        success: 1,
        message: "Rest api is running"

    });

});
app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});