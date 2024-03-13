import React, { useRef, useState } from 'react';
import style from "../../../styles/page_5/arte.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//이미지

import movie8 from '../../../assets/page_5/movie8.jpg';
import movie12 from '../../../assets/page_5/movie12.jpg';
import movie13 from '../../../assets/page_5/movie13.jpg';
import movie14 from '../../../assets/page_5/movie14.jpg';
import movie15 from '../../../assets/page_5/movie15.jpg';
import movie37 from '../../../assets/page_5/movie37.jpg';
import movie69 from '../../../assets/page_5/movie69.jpg';
import movie70 from '../../../assets/page_5/movie70.jpg';
import movie71 from '../../../assets/page_5/movie71.jpg';
import movie72 from '../../../assets/page_5/movie72.jpg';


import TheBraveBeluga from '../../../assets/page_5/TheBraveBeluga.png';





function MovieNext() {
  

  return (
    <>
      <div className={`movie_list_wrap ${style.movie_list_wrap}`}>
           
            <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie8} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>메이 디셈버</Card.Title>
                <Card.Text>117분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie13} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>레이니 데이 인 뉴욕</Card.Title>
                <Card.Text>92분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie12} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>소풍</Card.Title>
                <Card.Text>113분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie14} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>추락의 해부</Card.Title>
                <Card.Text>151분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie15} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>조용한 이주</Card.Title>
                <Card.Text>103분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie69} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>악은 존재하지 않는다</Card.Title>
                <Card.Text>106분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>   

             <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie70} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>세월: 라이프 고즈 온</Card.Title>
                <Card.Text>99분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>    

             <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie71} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>애니멀 킹덤</Card.Title>
                <Card.Text>127분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>    

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie72} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>라스트 썸머</Card.Title>
                <Card.Text>103분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>    

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie37} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>꽃다발 같은 사랑을 했다</Card.Title>
                <Card.Text>123분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>    

            

            

            

                
        </div>

        
            

           

            

            

            
        

        
        

        
        

        

        <div className={`mv_lastIMG2 ${style.mv_lastIMG2}`}>
          <ul>
            <li><a href='#'><img src={TheBraveBeluga} alt="TheBraveBeluga" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MovieNext;