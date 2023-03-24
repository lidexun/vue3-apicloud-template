const ip = require('ip')
const fs = require('fs')
const xml2js = require('xml2js')

function createConfig() {
  let path =  __dirname.replace('/build', '') + '/public/config.xml'
  const configData = fs.readFileSync(path, 'utf-8')
  xml2js.parseString(configData, (err, res) => {
    if (err) {
      throw err
    }
    // 写入ip
    res.widget.content[0]['$'].src = 'http://' + IP()
    const builder = new xml2js.Builder()
    const xml = builder.buildObject(res)
    fs.writeFileSync(path.replace('/public', ''), xml, function (error) {
      if (error) {
        console.log('写入失败')
      } else {
        console.log('写入成功了')
      }
    })
  })
}
function IP () {
  return ip.address() + ':' + 9527
}
module.exports = {
  createConfig,
  IP
}
