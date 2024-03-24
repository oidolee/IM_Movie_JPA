import React, { useState, useEffect } from 'react';
import sytle from '../../styles/page_2/Parking.module.css';
import ApiService from '../../ApiService';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Parking() {
  const [lists, setLists] = useState([]);
  const [parkingData, setParkingData] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [ip_carnumber, setIpCarNumber] = useState('');
  const [ip_client, setIpClient] = useState('');
  const [total_plot, setTotalPlot] = useState('');
  const [ip_no, setIp_no] = useState('');

  const history = useHistory();

  useEffect(() => {
    parkingList();
  }, []);

  const handleSubmit = () => {
    if (!ip_carnumber || !ip_client || !total_plot) {
      alert('모든 필드를 입력하세요.');
      return;
    }

    if (ip_carnumber.length !== 4) {
      alert("차량번호 자리수를 확인 바랍니다.\n(4자리 입력 바랍니다.)")
      return false;
    }
    let block = '';
    let number = '';
    // total_plot을 "_"로 분리하여 ip_block과 ip_number에 할당
    if (total_plot !== "") {
      // total_plot이 비어있지 않으면 "_"로 분리하여 ip_block과 ip_number에 할당
      [block, number] = total_plot.split('-');
    }
    let now = new Date();
    let formattedDate = now.toISOString();
    
    let inputData = {
      ip_carnumber: ip_carnumber,
      ip_client: ip_client,
      ip_block: block,
      ip_number: number,
      ip_no: ip_no,
      ip_regdate : formattedDate,
      ip_reservation: 'Y'
    };

    console.log(" 주차등록 값 : ");
    console.log(inputData);

    ApiService.editPark(inputData)
      .then((res) => {
        // 변수 초기화
        setIpCarNumber('');
        setIpClient('');
        setTotalPlot('');
        alert('주차등록 완료 하였습니다.')
        window.location.reload();
      })
      .catch((error) => {
        alert('주차 등록 중 오류가 발생했습니다.');
        console.error('주차 등록 오류:', error);
      });
  };

  const parkingList = () => {
    ApiService.parkingList()
      .then((res) => {
        console.log("res")
        console.log(res)
        setParkingData(res.data);
        setLists(res.data);
      })
      .catch((err) => {
        console.log('parkingList Error', err);
      });
  };

  const toggleSeatColor = (lot, seatNumber, ip_no) => { // ip_no 파라미터 추가
    setSelectedSeat(selectedSeat === `${lot}-${seatNumber}` ? null : `${lot}-${seatNumber}`);
    setTotalPlot(selectedSeat === `${lot}-${seatNumber}` ? '' : `${lot}-${seatNumber}`);
    setIp_no(ip_no); // 클릭할 때 해당 ip_no 값을 설정
  };

  let parkingLot = {};

  for (let entry of parkingData) {
    if (!parkingLot.hasOwnProperty(entry.ip_block)) {
      parkingLot[entry.ip_block] = [];
    }
    parkingLot[entry.ip_block].push([entry.ip_number, entry.ip_reservation, entry.ip_no]);
  }

  return (
    <div className={`Parking ${sytle.Parking}`}>
      <Container className={`Parking_panel ${sytle.Parking_panel}`}>
        <h1>주차등록</h1>
        <div className={`Parking_seat_box ${sytle.Parking_seat_box}`}>
          {Object.keys(parkingLot).map((lot) => (
            <div key={lot} className={`Parking_lot ${sytle.Parking_lot}`}>
              <h3>{lot}</h3>
              <ul className={`Parking_row ${sytle.Parking_row}`}>
                {parkingLot[lot].map(([seatNumber, status, ip_no]) => (
                  <li
                    key={`${lot}-${seatNumber}`}
                    onClick={() => {
                      if (status !== 'Y') {
                        toggleSeatColor(lot, seatNumber, ip_no); // ip_no 전달
                        if (selectedSeat === `${lot}-${seatNumber}`) {
                          setSelectedSeat(null); // Assuming you have a state variable setSelectedSeat to toggle selection
                        } else {
                          setSelectedSeat(`${lot}-${seatNumber}`);
                        }
                      }
                    }}
                    className={`seat_${status} ${status === 'Y' || selectedSeat === `${lot}-${seatNumber}` ? sytle.Park_checked : ''}`}
                    data-ip_no={ip_no}
                  >
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
              <Form.Control 
                type="text" 
                placeholder="차량번호" 
                name="ip_carnumber" 
                value={ip_carnumber}
                onBlur={(e) => {
                  // 입력값이 4자를 초과하는지 확인
                  if (e.target.value.length !== 4) {
                    // 4자를 초과하면 경고 메시지 표시
                    alert('차량번호 4자리 입력 바랍니다.');
                    // 입력값을 빈 문자열로 초기화
                  }
                  setIpCarNumber(e.target.value.trim().slice(0,4));
                }}
                onChange={(e) => {
                  setIpCarNumber(e.target.value.trim());
                }}
              />


            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="text" placeholder="예약자" name="ip_client" value={ip_client} onChange={(e) => setIpClient(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="text" placeholder="예약구역" name="total_plot" value={total_plot} onChange={(e) => setTotalPlot(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control type="hidden" placeholder="ip_no" name="ip_no" value={ip_no} onChange={(e) => setIp_no(e.target.value)} />
            </Col>
          </Form.Group>

          <br />

          <div className="d-grid gap-1">
            <Button variant="secondary" type="button" onClick={handleSubmit}>
              주차등록
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Parking;
