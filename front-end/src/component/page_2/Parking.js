import React from 'react';
import sytle from '../../styles/page_2/Parking.module.css'


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Parking() {

  let parkingLot = {
    'A' : [
      [1, 'N'],
      [2, 'N'],
      [3, 'N'],
      [4, 'N'],
      [5, 'Y'],
    ],
    'B' : [
      [1, 'N'],
      [2, 'N'],
      [3, 'N'],
      [4, 'N'],
      [5, 'Y'],
    ]
  }
 
  
  return (
    // 컴포넌트의 JSX 코드 작성
    <div className={`Parking ${sytle.Parking}`}>
      <Container className={`Parking_panel ${sytle.Parking_panel}`}>
      <h1>주차등록</h1>
      <div className={`Parking_seat_box ${sytle.Parking_seat_box}`}>
        {Object.keys(parkingLot).map(lot => (
          <div key={lot} className={`Parking_lot ${sytle.Parking_lot}`}>
            <h3>{lot}</h3>
            <ul className={`Parking_row ${sytle.Parking_row}`}>
              {parkingLot[lot].map(([seatNumber, status]) => (
                <li key={`${lot}-${seatNumber}`} className={`seat_${status}`}>
                  {status === 'Y' ? 'x' : seatNumber}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>



        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="tesxt" placeholder="차량번호" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="password" placeholder="예약자" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="password" placeholder="예약구역" />
            </Col>
          </Form.Group>
{/* 
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="password" placeholder="Username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Col sm>
              <Form.Control type="email" placeholder="Email Address" />
            </Col>
          </Form.Group> */}
          <br />

          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit" >
              주차등록
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Parking;
