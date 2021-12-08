import logo from "./logo.svg";
import "./App.css";
import "./assets/css/common.css";
import "./assets/css/simplegrid.css";
import image1 from "./assets/images/1.png";
import image2 from "./assets/images/2.jpg";
import image3 from "./assets/images/3.jpg";
import image4 from "./assets/images/4.jpg";
import image5 from "./assets/images/5.jpg";
import image6 from "./assets/images/6.jpg";
import image7 from "./assets/images/7.jpg";
import image8 from "./assets/images/8.jpg";
import image9 from "./assets/images/9.jpg";
import image10 from "./assets/images/10.jpg";
import image11 from "./assets/images/11.jpg";
import image12 from "./assets/images/12.jpg";
import image13 from "./assets/images/13.jpg";
import image13a from "./assets/images/13a.jpg";
import image14 from "./assets/images/14.jpg";
import image15 from "./assets/images/15.jpg";
import image16 from "./assets/images/16.jpg";
import image17 from "./assets/images/17.jpg";
import image18 from "./assets/images/18.jpg";
import image19 from "./assets/images/19.jpg";
import image20 from "./assets/images/20.jpg";
import image21 from "./assets/images/21.jpg";
import image22 from "./assets/images/22.jpg";
import image23 from "./assets/images/23.jpg";
import image23a from "./assets/images/23a.jpg";
import image24 from "./assets/images/24.jpg";
import image25 from "./assets/images/25.jpg";
import image26 from "./assets/images/26.jpg";
import image27 from "./assets/images/27.jpg";
import image28 from "./assets/images/28.jpg";
import image29 from "./assets/images/29.jpg";
import image30 from "./assets/images/30.jpg";
import image31 from "./assets/images/31.jpg";
import image32 from "./assets/images/32.jpg";
import image33 from "./assets/images/33.jpg";
import image34 from "./assets/images/34.jpg";
import image35 from "./assets/images/35.jpg";
import rec from "./assets/images/record.gif";

function App() {
  return (
    <div className="main-container">
      <div className="grid">
        <section>
          <img src={image1} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Joining Screen</h2>
            <p>
              Joining screen with Privacy Policy, Copy Meeting Link, Change
              audio & video device and if user's browser not supporting will
              show "Browser Name - version is not supported with Update link"
            </p>
          </div>
          <img src={image2} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Loading to Console</h2>
            <p>
              If possible we can put user video ass cercle to inside loading.{" "}
              <br /> A sample animation given bellow 👇
            </p>
          </div>
          <div className="loading-screen">
            <div className="user">
              <div className="cercle" />
              <div class="web-cam">
                <video
                  src={'https://ak.picdn.net/shutterstock/videos/1053123152/preview/stock-footage-happy-pretty-hispanic-latin-gen-z-teen-girl-smiling-face-waving-hand-talking-to-webcam-make-video.webm'}
                  width="147"
                  height="147"
                  loop={true}
                  autoPlay={true}
                  muted={true}
                ></video>
              </div>
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="blink-2" style={{ color: "#111111" }}>
                Connecting...
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-heading">
            <h2>Console Screen</h2>
            <p>User joined without any other participants</p>
          </div>
          <img src={image3} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (2-9) & Participants tab view</h2>
          </div>
          <img src={image4} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (3)</h2>
          </div>
          <img src={image5} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (4)</h2>
          </div>
          <img src={image6} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (5)</h2>
          </div>
          <img src={image7} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (6)</h2>
          </div>
          <img src={image8} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (7)</h2>
          </div>
          <img src={image9} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (8)</h2>
          </div>
          <img src={image10} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Participants Gallery View (9)</h2>
          </div>
          <img src={image11} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="video-9">
          <div className='navigation-footer'/>
            <div className="video-bg">
              <div className="parent">
                <div className="div1">
                  <div className='eye'/>
                  <h5>Me</h5>
                  <video
                    src={'https://ak.picdn.net/shutterstock/videos/1053123152/preview/stock-footage-happy-pretty-hispanic-latin-gen-z-teen-girl-smiling-face-waving-hand-talking-to-webcam-make-video.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div2">
                <div className='eye'/>
                <h5>Gustavo Lubin</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/1061687572/preview/stock-footage-happy-young-hip-man-having-a-video-chat-as-seen-from-the-point-of-view-of-a-computer-screen-in-a.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div3">
                <div className='eye'/>
                <h5>Jocelyn Baptista</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/1029331817/preview/stock-footage-happy-millennial-man-looking-at-camera-talking-laughing-video-calling-on-distant-friend-smiling.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div4">
                <div className='eye'/>
                <h5>Hanna Calzoni</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/1041034532/preview/stock-footage-portrait-of-joyful-friendly-handsome-black-man-looking-with-cheerful-radiant-toothy-smile-in.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div5">
                <div className='eye'/>
                <h5>Anika Dias</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/1062408175/preview/stock-footage-happy-old-senior-grey-haired-woman-grandmother-waving-hand-talking-to-web-cam-video-conference.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div6">
                <div className='eye'/>
                <h5>Mira Levin</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/1068949988/preview/stock-footage-head-shot-smiling-pretty-millennial-indian-ethnicity-woman-looking-at-camera-feeling-confident.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div7">
                <div className='eye'/>
                <h5>Justin Bergson</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/1070928712/preview/stock-footage-happy-indian-business-man-teacher-talking-to-web-cam-on-conference-video-call-smiling-businessman.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div8">
                <div className='eye'/>
                <h5>Cheyenne Dorwart</h5>
                <video
                    src={'https://ak.picdn.net/shutterstock/videos/5099963/preview/stock-footage-happy-young-man-having-a-video-chat-as-seen-from-the-point-of-view-of-the-computer-screen.webm'}
                    width="100%"
                    height="232"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </div>
                <div className="div9 bg">
                  <div className='eye'/>
                  <h5>Alfredo Gouse</h5>
                </div>
              </div>
            </div>
            <div className="side" />
          </div>
        </section>
        <section>
          <div className="section-heading">
            <h2>Pin/Theater View</h2>
          </div>
          <img src={image12} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image13} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image13a} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Screen Share</h2>
          </div>
          <img src={image14} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image15} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>GM App Store</h2>
          </div>
          <img src={image16} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image17} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Chat</h2>
          </div>
          <img src={image18} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Notes</h2>
          </div>
          <img src={image19} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Auto Transcript</h2>
          </div>
          <img src={image20} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>QA</h2>
          </div>
          <img src={image21} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Share Location</h2>
          </div>
          <img src={image22} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Virtual Background</h2>
          </div>
          <img src={image23} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image23a} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Immersive View</h2>
          </div>
          <img src={image24} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Add Members</h2>
          </div>
          <img src={image25} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Admit User</h2>
          </div>
          <img src={image26} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image27} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          {/* <img src={image28} style={{ borderRadius: "6px" }} /> */}
          <div className="loading-screen">
            <div className="user">
              <div className="cercle" />
              <div class="web-cam">
                <video
                  src={'https://ak.picdn.net/shutterstock/videos/1068949988/preview/stock-footage-head-shot-smiling-pretty-millennial-indian-ethnicity-woman-looking-at-camera-feeling-confident.webm'}
                  width="147"
                  height="147"
                  loop={true}
                  autoPlay={true}
                  muted={true}
                ></video>
              </div>
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="" style={{ color: "#111111", paddingTop: '10px' }}>
              Please wait, <br/>
              the meeting host will let you in soon 
              </div>
          </div>
        </section>
        <section>
          <div className="section-heading">
            <h2>Toast Message</h2>
          </div>
          <img src={image29} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image30} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Recording Status</h2>
          </div>
          <div className='relative'>
            <div className='rec'>
              <img src={rec} />
              Rec
            </div>
            <img src={image31} style={{ borderRadius: "6px" }} />
          </div>
          <br/><br/><br/><br/>
          <img src={image32} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Other Details</h2>
          </div>
          <img src={image33} style={{ borderRadius: "6px" }} />
          <br/><br/><br/><br/>
          <img src={image34} style={{ borderRadius: "6px" }} />
        </section>
        <section>
          <div className="section-heading">
            <h2>Mobile Screens</h2>
          </div>
          <img src={image35} style={{ borderRadius: "6px" }} />
        </section>
      </div>
    </div>
  );
}

export default App;
