const BasePlayer = require('./BasePlayer');
const fs = require('fs-extra');

class DefaultPlayer extends BasePlayer {

  playFile(file) {
    this._shutdown();
    return this.playStream(fs.createReadStream(file));
  }

  playStream(stream) {
    this._shutdown();
    const pcmStream = this.convertStream(stream);
    const dispatcher = this.playPCMStream(pcmStream);
    return dispatcher;
  }

}

module.exports = DefaultPlayer;