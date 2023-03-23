export const openWin = (param) => {
  const p = {
    ...param,
    name: param.name || param.url,
    url: process.env.VUE_APP_PATH + param.url
  }
  api.openWin(p)
}
export const openFrame = (param) => {
  const p = {
    ...param,
    name: param.name || param.url,
    url: process.env.VUE_APP_PATH + param.url
  }
  api.openFrame(p)
}
