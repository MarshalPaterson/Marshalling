var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.post("/PostMockTestResult/", function (req, res) {
    res.redirect('PostMockTestResult.txt');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening!')
})