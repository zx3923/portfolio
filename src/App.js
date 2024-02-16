import './App.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className='mainContainer'>
      <div className='img'>
        <h1 className='typing' style={{ fontSize: "4vw", color: "white", backgroundColor: "black", padding: "5px 20px" }}>배우고 싶은것이 많은 개발자 염현섭 입니다</h1>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
      <div style={{ width: "1600px", margin: "0 auto" }}>
        <div className='aboutMe' data-aos="fade-down" data-aos-duration="1000">
          <h1 style={{ fontSize: "3rem", margin: 10 }}>AboutMe</h1>
          <p>이름 : 염현섭</p>
          <p>연락처 : 010-6472-7064</p>
          <p>이메일 : seop3923@gmail.com</p>
          <p>생년월일 : 96.11.25</p>
        </div>
        <p className='line'></p>
        <div className='skill' data-aos="fade-right" data-aos-duration="1000">
          <h1 style={{ fontSize: "3rem", margin: 10 }}>Skills</h1>
          <div>
            <span>Front-end</span>
            <div>
              <DiHtml5 color='#EB5B27' size="100px" />
              <DiCss3 color='#29A9DF' size="100px" />
              <DiJavascript color='#F0DB4F' size="100px" />
              <DiReact color='#00D8FF' size="100px" />
            </div>
            <span>Back-end</span>
            <div>
              <DiJava size="100px" />
              <SiSpringboot color='#6AAD3D' size="100px" />
              <FaNode size="100px" />
              <DiMysql color='#00618A' size="100px" />
            </div>
          </div>
        </div>
        <p className='line'></p>
        <div className='project'>
          <h1 style={{ fontSize: "3rem", margin: 10 }}>Project</h1>
          <Card style={{ width: '55rem', marginTop: "100px", boxShadow: "2px 2px 10px bisque" }} data-aos="flip-left">
            <Card.Img variant="top" src="https://i.imgur.com/DlSLnKX.png" style={{ padding: "40px", backgroundColor: "#1B1B1E" }} />
            <Card.Body style={{ padding: "30px", backgroundColor: "#1B1B1E", color: "white" }}>
              <Card.Title style={{ fontSize: "2rem" }}>e층창고</Card.Title>
              <Card.Text style={{ fontSize: "1.4rem" }}>
                위치기반 쇼핑몰
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                자기 주변의 상품, 가게들을 검색해서 볼 수 있는 쇼핑몰
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem", color: "gray" }}>
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="secondary">React</Badge>
                  <Badge bg="secondary">BootStrap</Badge>
                </Stack>
              </Card.Text>
              <Button variant="secondary"><a href="https://e-changgo.com/" target='_blank' rel="noreferrer noopener" style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>사이트</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '55rem', marginTop: "100px", boxShadow: "2px 2px 10px bisque" }} data-aos="flip-right">
            <Card.Img variant="top" src="https://i.imgur.com/frpeffM.png" style={{ padding: "40px", backgroundColor: "#1B1B1E" }} />
            <Card.Body style={{ padding: "30px", backgroundColor: "#1B1B1E", color: "white" }}>
              <Card.Title style={{ fontSize: "2rem" }}>증권 사이트</Card.Title>
              <Card.Text style={{ fontSize: "1.4rem" }}>
                증시, 코인 api를 활용한 커뮤니티 사이트
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                리액트와 스프링부트를 활용 기본적인 CRUD 게시판 기능 및 회원가입 기능 구현
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem", color: "gray" }}>
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="secondary">React</Badge>
                  <Badge bg="secondary">SpringBoot</Badge>
                  <Badge bg="secondary">MYsql</Badge>
                </Stack>
              </Card.Text>
              <Button variant="secondary"><a href="https://www.figma.com/file/Kt1XGmadMLNV9qflhAfhdM/%ED%88%AC%EC%9E%90-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0%3A1&t=OXFf1fBY9T2gUEgW-0" target='_blank' rel="noreferrer noopener" style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>자세히 보기</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '55rem', marginTop: "100px", boxShadow: "2px 2px 10px bisque" }} data-aos="zoom-in-down">
            <Card.Img variant="top" src="https://i.imgur.com/qZvg4bI.png" style={{ padding: "40px", backgroundColor: "#1B1B1E" }} />
            <Card.Body style={{ padding: "30px", backgroundColor: "#1B1B1E", color: "white" }}>
              <Card.Title style={{ fontSize: "2rem" }}>웹 채팅</Card.Title>
              <Card.Text style={{ fontSize: "1.4rem" }}>
                입장한 닉네임으로 소통하는 웹 채팅 사이트
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                익스프레스, soket.io 를 활용 클라이언트간 채팅 기능 구현
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem", color: "gray" }}>
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="secondary">React</Badge>
                  <Badge bg="secondary">Node.js</Badge>
                  <Badge bg="secondary">express</Badge>
                  <Badge bg="secondary">soket.io</Badge>
                </Stack>
              </Card.Text>
              <Button variant="secondary"><a href="https://www.figma.com/file/uN0TXjIhrOKszfvmv1Zq22/%EC%B1%84%ED%8C%85?t=OXFf1fBY9T2gUEgW-0" target='_blank' rel="noreferrer noopener" style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>자세히 보기</a></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '55rem', marginTop: "100px", boxShadow: "2px 2px 10px bisque" }} data-aos="zoom-in-down">
            <Card.Img variant="top" src="https://i.imgur.com/vG6Gu9m.png" style={{ padding: "40px", backgroundColor: "#1B1B1E" }} />
            <Card.Body style={{ padding: "30px", backgroundColor: "#1B1B1E", color: "white" }}>
              <Card.Title style={{ fontSize: "2rem" }}>게시판</Card.Title>
              <Card.Text style={{ fontSize: "1.4rem" }}>
                백엔드 공부를 위한 커뮤니티 게시판
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                리액트, 스프링부트로 기본적인 CRUD 게시판  구현
              </Card.Text>
              <Card.Text style={{ fontSize: "1.2rem", color: "gray" }}>
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="secondary">React</Badge>
                  <Badge bg="secondary">SpringBoot</Badge>
                  <Badge bg="secondary">MYsql</Badge>
                </Stack>
              </Card.Text>
              <Button variant="secondary"><a href="https://www.figma.com/file/wveJ18iFGT0uE8Z6PawiE0/%EB%82%B4-%EA%B2%8C%EC%8B%9C%ED%8C%90?node-id=0%3A1&t=230HSOfSidmpxywf-0" target='_blank' rel="noreferrer noopener" style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}>자세히 보기</a></Button>
            </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default App;
