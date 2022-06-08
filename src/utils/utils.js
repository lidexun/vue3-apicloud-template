const ip = 'http://192.168.1.117:8081/#/'
const t = {
  openWin(ags) {
    const p = {
      ...ags,
      name: 'winname',
      url: 'widget://index.html#' + ags.url,
      bounces: false,
      pageParam: { key: 'value' }
    }
    api.openWin(p)
  }
}
export default t
