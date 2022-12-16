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
        </div>

    );
}

export default aboutUspage;















