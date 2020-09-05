const express = require('express');
const app = express(); 

const mockUserDAta = [
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice',
        users: mockUserDAta
    })
})


app.listen(8000, function() {
    console.log("Server has been started and running");
});