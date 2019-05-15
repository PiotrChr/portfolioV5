import express = require("express");
const app = express();

const port: number = 8000;

import routes from "./routes";

app.use("/", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
