import Header from "../Header";
import { Card, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function aboutUspage() {
  return (
    <div>
      <Header />
      <Card
        className="text-center"
        style={{
          width: "1000px",
          background: "rgba(0, 152, 186, 0.4)",
          position: "fixed",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card.Body>
          <p>{`Our aim is to create an easy-to-use coding platform where you will be able to see different programming questions from every domain to solve those challenges. `}</p>

          <p>
            Our website will provide an open platform for all the amateurs as
            well the tech geeks to practice and improve their coding skills in a
            challenging way.
          </p>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "1000px",
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <Card.Body>
          <Table borderless responsive>
            <thead>
              <tr>
                <th>Developer Team</th>
                <th>
                  <p>&nbsp;</p>
                </th>
                <th>
                  <p>&nbsp;</p>
                </th>
                <th>
                  <p>&nbsp;</p>
                </th>
                <th>
                  <p>&nbsp;</p>
                </th>
                <th>CONTACT US</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rakesh Choudhary</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>Email Id: inqu.rc@gmail.com</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default aboutUspage;
