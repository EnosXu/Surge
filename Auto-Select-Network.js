// Auto-Select-Network.js

const network = $network;

// 列出需要使用 VPN 的 Wi-Fi 名称
const vpnWiFiList = ["116", "116-5G", "leader bar", "leader bar 2", "Leader bar", "Enos S24"];

if (network.wifi && network.ssid) {
  const ssid = network.ssid;
  if (vpnWiFiList.includes(ssid)) {
    // 如果连接的是指定的 Wi-Fi，使用代理
    $surge.setSelectGroupPolicy("Auto", "Proxy");
  } else {
    // 其他情况下直连
    $surge.setSelectGroupPolicy("Auto", "Direct");
  }
} else {
  // 非 Wi-Fi 数据网络 连接时默认直连
  $surge.setSelectGroupPolicy("Auto", "Direct");
}

$done();
