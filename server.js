const express = require('express');
const app = express(); 

const mockUserDAta = [
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Got One User',
        users: req.params.id
    })
})


app.listen(8000, function() {
    console.log("Server has been started and running");
});