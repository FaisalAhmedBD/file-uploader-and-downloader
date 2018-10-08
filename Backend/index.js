const express = require('express');
const app = express();
const port = 3000;
const { router } = require('./Router');
require('./Config');
app.use('/v1', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))