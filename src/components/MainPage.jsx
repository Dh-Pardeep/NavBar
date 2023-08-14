import React from 'react'
import MyNav from './MyNav'
import { Col, Container, Row } from 'react-bootstrap'
import IconImg from '../assets/image/svg/IconImg.svg'
import Image1 from '../assets/image/png'
const MainPage = () => {
  return (
    <div>
      <MyNav />
      <section>
        <div className="my_container">
          {/* <div className='center_line'></div> */}
          <Row className='mt-5 pt-5'>
            <Col>
              <div className='text-end'>
                <h1 className='mb-0 ff_Copper_black font_xl color_white H1GENESIS d-inline-block '>GENESIS</h1>
              </div>
              <p className='mb-0 font_sm color_black ff_Fontspring_light mt-4'>MANY YEARS BEFORE LAPiNC</p>
            </Col>
            <Col>
              <div className='d-flex align-items-center justify-content-between mt-5'>
                <img src={IconImg} alt="IconImg" />
                <p className='mb-0 para_1 text-center font_sm color_black ff_Fontspring_light '>THIS ARTIST DUO WERE FORMALLY KNOWN AS LVSP</p>
              </div>
            </Col>
          </Row>
        </div>
        <Container>
          <Row>
            <Col>
                  <div className='d-grid'>
                      <div className="grid_1"> <img src={Image1} alt="image" /></div>
                      <div className="grid_2"> <img src={Image2} alt="image" /></div>
                      <div className="grid_3"> <img src={Image3} alt="image" /></div>
                      <div className="grid_4"> <img src={Image4} alt="image" /></div>
                      <div className="grid_5"> <img src={Image5} alt="image" /></div>
                      <div className="grid_6"> <img src={Image6} alt="image" /></div>
                      <div className="grid_7"> <img src={Image7} alt="image" /></div>
                      <div className="grid_8"> <img src={Image8} alt="image" /></div>
                      <div className="grid_9"> <img src={Image9} alt="image" /></div>
                      <div className="grid_10"> <img src={Image10} alt="image" /></div>
                      <div className="grid_11"> <img src={Image11} alt="image" /></div>
                      <div className="grid_12"> <img src={Image12} alt="image" /></div>
                      <div className="grid_13"> <img src={Image13} alt="image" /></div>
                      <div className="grid_14"> <img src={Image14} alt="image" /></div>
                      <div className="grid_15"> <img src={Image15} alt="image" /></div>
                      <div className="grid_16"> <img src={Image16} alt="image" /></div>
                  </div>
            </Col>
            {/* <Col>

            </Col> */}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default MainPage