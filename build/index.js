const ip = require('ip')
const fs = require('fs')
const xml2js = require('xml2js')

function createConfig() {
  const filepath = __dirname + '/public/config.xml'
  const configData = fs.readFileSync(filepath, 'utf-8')
  xml2js.parseString(configData, (err, res) => {
    if (err) {
      throw err
    }
    // 写入ip
    res.widget.content[0]['$'].src = ip.address() + ':' + 8080
    const builder = new xml2js.Builder()
    const xml = builder.buildObject(res)
    fs.writeFileSync(__dirname + '/' + 'config.xml', xml, function (error) {
      if (error) {
        console.log('写入失败')
      } else {
        console.log('写入成功了')
      }
    })
  })
}

module.exports = {
  createConfig
}
