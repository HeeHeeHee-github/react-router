const connection = require('./mysqlConnection')

const registerUser = (req, res) => {
  try {
    connection.query(
      `SELECT * FROM mydb1.user WHERE USER_ID = '${req.body.id}';`,
      (err, data) => {
        // 만약 에러가 있으면 에러 던지기
        if (err) throw err

        // 회원가입이 이미 처리 되어있으면!
        // 0이 아니면 이미 회원이라는 소리
        if (data.length !== 0)
          return res.status(400).json('이미 가입된 회원입니다.')

        connection.query(
          `INSERT INTO mydb1.user (USER_ID, PASSWORD) values ('${req.body.id}', '${req.body.password}')`,
          (err, data) => {
            if (err) throw err
            res.status(200).json('회원 가입 성공')
          },
        )
      },
    )
  } catch (err) {
    console.error(err)
    res.status(500).json('회원 가입 실패, 알 수 없는 문제 발생')
  }
}

module.exports = {
  registerUser,
}
