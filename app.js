const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json())

// app.all("/", (req, res) => {
//     res.send("Hello World");
//     });
app.use(require("./src/routes/todo"))

require("./src/dbConnection"); // veritabanı bağlantısı için yazdığımız kodu kullanıyoruz. 
// app.use kullanmadan çalışır çünkü db bir middleware değil.

app.use(require("./src/errorHandlers")); // hata yönetimi için yazdığımız middleware'i kullanıyoruz.

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
