import { Notifyer } from './notifyer.js'
import { Timer } from './timer.js'
import { Emitter } from './emitter.js'

const notify = Notifyer.notify({
  title: "Hora da pausa",
  body: "Hey! Você está ai a uma hora, vamos fazer uma pausa?",
});

const App = {
  async start() {
    try {
      await Notifyer.init()

      Emitter.on('countdown-start', notify);

      Emitter.on('countdown-end',  Timer.init);

      Timer.init();

    } catch (err) {
      console.log(err.message);
    }
  }
}

export { App }