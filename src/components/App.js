import React, { Component } from "react";

import Banner1 from "../assets/1.png"
import Banner2 from "../assets/2.png"

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>
        <h1 style={{ color: "white" }}>Materi Tersedia</h1>
        <div>
          <iframe width="400" height="200" src="https://ytcropper.com/embed/M05d318067c8a6b/loop/noautoplay/" frameborder="0" allowfullscreen></iframe><br />
          <a href="/" target="_blank" style={{ color: 'white' }}>Making Auto Register With NodeJS</a>
        </div>
        <br />
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <iframe width="400" height="200" src="https://ytcropper.com/embed/0p5d317e127c7df/loop/noautoplay/" frameborder="0" allowfullscreen></iframe><br />
          <a href="/" target="_blank" style={{ color: 'white' }}>Sniffing APK and Create Automation Tools</a>
        </div>
        <h1 style={{ color: "white" }}>Apa aja sih yang dilakukan dan dipelajari di <font style={{ color: '#27ae60' }}>Easy To Learn</font> ?</h1>
        <img src={Banner1} style={{ width: '100%', height: 'auto' }} alt="Make Your Own Bot" />
        <img src={Banner2} style={{ width: '100%', height: 'auto' }} alt="Sharing Session" />

        <div style={{ paddingTop: 30 }}>
          <font style={{ color: 'white' }}>Join ? Contact me via wa : 082214899172</font>
        </div>
      </div>
    );
  }
}

export default App;
