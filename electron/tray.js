const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'relogio.png')
function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('Hora da pausa');

  return tray;
}

module.exports = createTray();