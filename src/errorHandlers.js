"use.strict"
// hata yönetimi için bir middleware yazıyoruz
module.exports = (err, req, res, next) => {

    const errorStatusCode = res.errorStatusCode ?? 500; // eğer bir statusCode yoksa 500 döndür
    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body,
    }
    );
}