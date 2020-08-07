import React from 'react';
import '../styles/Style.css';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/Footer';
import Testimonials from './Testimonials';
import Bio from './Bio';
import Mission from './Mission';
import Objective from './Objective';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <Bio />
            <Mission />
            <Objective />
          </div>
          <div className="col-md-6 py-5">
          <img className="img-fluid" src={require('../images/online-edu.jpg')} alt="" />
          </div>
        </div>
        </div>

        <section className="container">
          <div className="row">
            <div className="col-md-4">
              <Card className="box-card">
                <img className="image" src={require('../images/online-edu.jpg')}alt=""/>
                <h7><b>Learn at Home</b></h7>
                <p>Learn at your pace and at your conviniece.</p><br></br>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="box-card">
              <img className="image" src={require('../images/portfolio_4.jpg')}alt=""/>
                <h7><b>30+ Subjects</b></h7>
                <p>Get access to variety of subjects and other resources like tecnology. </p><br></br>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="box-card">
              <img className="image" src={require('../images/portfolio_8.jpg')}alt=""/>
                <h7><b>40+ online Tests</b></h7>
                <p>Sharpen your horizone by  taking our well crafted quize.</p><br></br>
              </Card>
            </div>
          </div>
        </section><br></br>

        <section className="container">
          <div className="row">
            <div className="col-md-4">
              <Card className="box-card">
              <img className="image" src={require('../images/portfolio_2.jpg')}alt=""/>
                <h7><b>Dashboard</b></h7>
                <p>Tracks your progress and level up.</p><br></br><br></br>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="box-card">
              <img className="image-1" src={require('../images/favicon.png')}alt=""/>
                <h7><b>Reward</b></h7>
                <p>For starting or completing any of our subject you get rewarded.</p><br></br>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="box-card">
              <img className="image" src={require('../images/portfolio_6.jpg')}alt=""/>
                <h7><b>Q/A</b></h7>
                <p>Do you  have any question? let us know.</p><br></br><br></br>
              </Card>
            </div>
          </div>
        </section><br></br>

        <section>
          <div>
          <Testimonials />
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  
  }
  export default About;
  