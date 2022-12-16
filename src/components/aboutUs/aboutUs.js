import Header from "../Header";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function aboutUspage() {

    return (
        <div>
            <Header />
            <Card className="text-center" style={{
                width: '1000px', background: "rgba(0, 152, 186, 0.4)", position: "fixed", top: "50%",
                left: "50%", transform: "translate(-50%, -50%)"
            }}>
                <Card.Body>
                    <p>{`Our aim is to create an easy-to-use coding platform where you will be able to see different programming questions from every domain to solve those challenges. `}</p>

                    <p>
                        Our website will provide an open platform for all the amateurs as
                        well the tech geeks to practice and improve their coding skills in a
                        challenging way.
                    </p>
                </Card.Body>
            </Card>

            <div id="team">
                <div >
                    <p>
                        <span>Developer Team</span>
                    </p>
                    <p >
                        <span>Tanishqa Raut</span>
                    </p>
                    <p >
                        <span>Vishwajeet Singh</span>
                    </p>
                    <p >
                        <span>Shivanjali Thopte</span>
                    </p>
                    <p >
                        <span>Swejal Gabhane</span>
                    </p>
                </div>
                <div >
                    <span >
                        <p >
                            <span>CONTACT US</span>
                        </p>
                        <p >
                            <span >
                                Email Id: xyz@gmail.com
                            </span>
                        </p>
                        <p >
                            <span>
                                Phone.No. : 1234567890
                            </span>
                        </p>
                        <p >
                            <span >&nbsp;</span>
                        </p>
                        <p >
                            <span>{`GyaanDock©  `}</span>
                        </p>
                    </span>
                </div>
            </div >
        </div >

    );
}

export default aboutUspage;






{/* 
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-11.svg"
        />
        <div className={styles.ourAimIsToProvideAnEasy}>
          <p
            className={styles.ourAimIs}
          >{`Our aim is to provide an easy-to-use coding platform where you will be able to see different programming questions from every domain to solve those challenges. `}</p>
          <p className={styles.ourAimIs}>&nbsp;</p>
          <p className={styles.ourAimIs}>
            Our website will provide an open platform for all the amateurs as
            well the tech geeks to practice and improve their coding skills in a
            challenging way.
          </p>
          <p className={styles.swejalGabhane}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.header}>
        <img
          className={styles.appleTouchIcon2}
          alt=""
          src="../appletouchicon-2@2x.png"
        />
        <div className={styles.leftNest}>
          <div className={styles.headerLinkBlock}>
            <div className={styles.linkItem}>
              <div className={styles.gyaanDock}>{`GyaanDock `}</div>
            </div>
          </div>
        </div>
        <div className={styles.rightNest} />
        <div className={styles.headerCTABlock}>
          <Button variant="primary">Challenges</Button>
          <Button variant="primary">About Us</Button>
          <Button className={styles.buttonLoginsignup} variant="primary">
            Login/ SignUp
          </Button>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default AboutUs; */}









