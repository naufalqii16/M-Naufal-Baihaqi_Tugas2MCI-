const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const userRoute = require('../app/routes/userRoute')
const pengisi_seminarRoute = require('../app/routes/pengisi_seminarRoute')
const tempat_dudukRoute = require('../app/routes/tempat_dudukRoute')
const detail_pembayaranRoute = require('../app/routes/detail_pembayaranRoute')
const pemesananRoute = require('../app/routes/pemesananRoute')
const detail_seminarRoute = require('../app/routes/detail_seminarRoute')
const pemesanan_detail_seminarRoute = require('../app/routes/pemesanan_detail_seminarRoute')
const detail_pengisi_seminarRoute = require('../app/routes/detail_pengisi_seminarRoute')

app.get('/', (req, res) => res.send('Halo, calon admin MCI!'));
app.get('/dunia', (req, res) => res.send('Halo, dunia!'));
app.use('/user', userRoute);
app.use('/pengisi_seminar', pengisi_seminarRoute);
app.use('/tempat_duduk', tempat_dudukRoute);
app.use('/detail_pembayaran', detail_pembayaranRoute);
app.use('/pemesanan', pemesananRoute);
app.use('/detail_seminar', detail_seminarRoute);
app.use('/pemesanan_detail_seminar', pemesanan_detail_seminarRoute);
app.use('/detail_pengisi_seminar', detail_pengisi_seminarRoute);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));