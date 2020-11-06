const express = require('express');

const app = express();

const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
  console.log(PORT, '번 포트에서 대기 중');
});
