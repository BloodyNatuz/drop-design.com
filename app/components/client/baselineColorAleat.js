'use client'

export default function SpanAleatColor() {
    // Couleur aléatoire
    let colorAleat = Math.floor(Math.random() * 3) + 1
  
    if (colorAleat == 1) {
      let color1 = "#ED1C91";
      let color2 = "#88C43C";
      let color3 = "#00ADF1";
  
      return (
        <p id='baseline'>les <span style={{color: color1}}>news</span> du <span style={{color: color2}}>webdesign</span> pour les <span style={{color: color3}}>webdesigner</span></p>
      )
    }
    else if (colorAleat == 2) {
      let color1 = "#88C43C";
      let color2 = "#00ADF1";
      let color3 = "#ED1C91";
  
      return (
        <p id='baseline'>les <span style={{color: color1}}>news</span> du <span style={{color: color2}}>webdesign</span> pour les <span style={{color: color3}}>webdesigner</span></p>
      )
    } else {
      let color1 = "#00ADF1";
      let color2 = "#ED1C91";
      let color3 = "#88C43C";
  
      return (
        <p id='baseline'>les <span style={{color: color1}}>news</span> du <span style={{color: color2}}>webdesign</span> pour les <span style={{color: color3}}>webdesigner</span></p>
      )
    }
  }