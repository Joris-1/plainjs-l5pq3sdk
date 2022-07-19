import Human from '@vladmandic/human'


class MyCounter extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `<header> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/human/2.1.5/human.js"></script>
    </header>
  <body>  
    <video
      id="inputVideo"
      autoplay
      muted
      width="640"
      height="480"
      style="border: 1px solid #ddd;"
    ></video
    ><br/>
    <canvas
      id="overlay"
      width="640"
      height="480"
      style="position: relative; top: -487px; border: 1px solid #ddd;"
    ></canvas
    ><br/>
  </body>
    `;
  }

  connectedCallback() {
    console.log('start')

     run()
       
        async function run() {
            const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
            const videoEl = document.getElementById("inputVideo");
            videoEl.srcObject = stream;

             const config = { backend: 'webgl' };
            const human = new Human(config); // create instance of Human
            const inputVideo = document.getElementById("inputVideo");
            const outputCanvas = document.getElementById('overlay');

            async function detectVideo() {
                const result = await human.detect(inputVideo); // run detection
                human.draw.all(outputCanvas, result); // draw all results
                requestAnimationFrame(detectVideo); // run loop
            }

            detectVideo()
        }




  }

  
}

customElements.define('cam-tag', cam);
