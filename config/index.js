const os = require('os');

export function getNetworkIp() {
    alert(process.env.NODE_ENV)
    let needHost = ''; // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        // console.log("network",network)
        for (let dev in network) {

            let iface = network[dev];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address;
                    // console.log("alias.address",alias.address)
                }
                // console.log("alias",alias)
            }
        }
    } catch (e) {
        needHost = 'localhost';
    }
    return needHost;
}