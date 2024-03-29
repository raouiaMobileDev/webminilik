import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Media } from 'reactstrap';
import MyLogo from '../../../assets/img/logo/logo.png';

import {Redirect } from 'react-router-dom';


import {signIn}  from '../../../config/firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class Login extends Component {

  constructor(props) {
    super(props);

 
    this.state = {
      emailUser:'',
      passwordUser:'',
      hasErrors:false
     
    };
  }


  handleChange_emailUser(event) {

    this.setState({emailUser: event.target.value});
  }
  handleChange_passwordUser(event) {

    this.setState({passwordUser: event.target.value});
  }


  
  uploadHandler ()  {

    var auth ={
      email:this.state.emailUser,
      password:this.state.passwordUser,
    }
     this.props.signIn(auth).then(()=>{
          console.log(this.props.User) 

          if(!this.props.User.userData.uid){
            this.setState({hasErrors:true})
            console.log("user not exist")
            return null
        }
        else
        {
        // return (<Redirect to="/"/>)
        console.log(this.props.User.userData.uid)
        this.props.history.push('/'+this.props.User.userData.uid)
/*
        this.props.history.push({
          pathname: '/',
          search: '?the=search',
          state: { detail: this.props.User.userData.uid }
        })
    */    

        }
    })
  }

  render() {
    const styles = {
    media:{
      width: 110,
      //justifyContent: 'center',
    //alignItems: 'center',
     // textAlign: 'center',
      //align:'center',
     // margin:50

    }
    };

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">

         
         
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                    <Row>
                    <Col sm="12" md={{ size: 6, offset: 4 }}><Media style={styles.media} object src={ MyLogo}/></Col>
                     </Row>
                      <h1>Connexion</h1>
                      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="email" onChange={this.handleChange_emailUser.bind(this)} placeholder="Entrer votre adresse email" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" onChange={this.handleChange_passwordUser.bind(this)} placeholder="Entrer votre mot de passe" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="light" className="px-4" onClick={this.uploadHandler.bind(this)}>Se connecter</Button>
                        </Col>
                        {/*
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                        */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/*
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
                */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
      User:state.User
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signIn},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)


