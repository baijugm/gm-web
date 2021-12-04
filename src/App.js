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
import image24 from "./assets/images/24.jpg";
import image25 from "./assets/images/25.jpg";
import image26 from "./assets/images/26.jpg";
import image27 from "./assets/images/27.jpg";
import image28 from "./assets/images/28.jpg";
import image29 from "./assets/images/29.jpg";
import image30 from "./assets/images/30.jpg";
import image31 from "./assets/images/31.jpg";

import video from "./assets/images/user.mp4";
import video2 from "./assets/images/user2.mp4";
import video3 from "./assets/images/user3.mp4";
import video4 from "./assets/images/user4.mp4";
import video5 from "./assets/images/user5.mp4";
import video6 from "./assets/images/user6.mp4";
import video7 from "./assets/images/user7.mp4";
import video9 from "./assets/images/user9.mp4";

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
                  src={video}
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
                    src={video}
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
                    src={video2}
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
                    src={video3}
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
                    src={video4}
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
                    src={video5}
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
                    src={video6}
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
                    src={video7}
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
                    src={video9}
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
          <img src={image28} style={{ borderRadius: "6px" }} />
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
          <img src={image31} style={{ borderRadius: "6px" }} />
        </section>
      </div>
    </div>
  );
}

export default App;
