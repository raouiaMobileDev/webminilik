import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Fade,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText

} from 'reactstrap';

import axios from 'axios';
import { addRestaurantToFirebase, signUp}  from '../../../config/firebase';


import { connect } from 'react-redux';
//import { artistDetail,clearArtistDetail } from '../actions';
import { bindActionCreators } from 'redux';

class AddRestaurant extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
           // restaurant_url:'',
      restaurant_name:'',
      restaurant_address:'',
      restaurant_tables:'',
      selectedFile: 'Raouia',

      emailUser:'',
      passwordUser:'',
      hasErrors:false
     
    };
  }




  fileChangedHandler (event) {   
    this.setState({selectedFile: event.target.files[0]});
    console.log( this.state.selectedFile);
    console.log('************coco est *****************');
  }

  handleChange_restName(event) {
    this.setState({restaurant_name: event.target.value});
  }

  handleChange_restAddress(event) {
    this.setState({restaurant_address: event.target.value});
  }
  
  handleChange_table(event) {

    this.setState({restaurant_tables: event.target.value});
  }




  handleChange_emailUser(event) {

    this.setState({emailUser: event.target.value});
  }
  handleChange_passwordUser(event) {

    this.setState({passwordUser: event.target.value});
  }









  
  uploadHandler ()  {

    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://minilik.000webhostapp.com/restaurant.php', fd
    ).then(res=>
    {
    console.log(res);
    }
    );
 
    var auth ={
      email:this.state.emailUser,
      password:this.state.passwordUser,
    }
     this.props.signUp(auth).then(()=>{
          console.log(this.props.User) 

          if(!this.props.User.userData.uid){
            this.setState({hasErrors:true})
        }
        else
        {
          var restaurant={
            name:this.state.restaurant_name,
            address:this.state.restaurant_address,
            tables:this.state.restaurant_tables,
            url: 'https://minilik.000webhostapp.com/restaurant/'+this.state.selectedFile.name,
            uid:this.props.User.userData.uid
            
          }
          addRestaurantToFirebase(restaurant);
          
        }
    })
   
    
 
/*
    var restaurant={
      name:this.state.restaurant_name,
      address:this.state.restaurant_address,
      tables:this.state.restaurant_tables,
      url: 'https://minilik.000webhostapp.com/restaurant/'+this.state.selectedFile.name
      
    }
    */
    //addRestaurantToFirebase(restaurant);


    //https://minilik.000webhostapp.com/


    /*const formData = new FormData()
    formData.append('myImage', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('/upload', formData)
    .then((response) => { alert("The file is successfully uploaded"); })
    .catch((error) => { });
    */
  }








  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    let tables = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    let optionItems =tables.map((i) =>
    <option key={i} value={i} > {i} </option>
     ); 
    return (

      <div className="animated fadeIn">
      {/*
        <Row>
          <Col xs="12" md="6">
*/}
          <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>


            <Card>
              <CardHeader>
                <strong>Authentification</strong> 
              </CardHeader>
              <CardBody>
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

             </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <strong>Ajouter un salon de thé</strong> 
              </CardHeader>
              <CardBody>
               
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom de Restaurant </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="rest_name"  onChange={this.handleChange_restName.bind(this)} placeholder="Text" />
                      <FormText color="muted">Ce champ est obligatoire</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Adresse de restaurant </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="rest_address" onChange={this.handleChange_restAddress.bind(this)} placeholder="Text" />
                      <FormText color="muted">Ce champ est obligatoire</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Nombre de tables</Label>
                    </Col>
                    <Col xs="12" md="9">
                     <Input type="select" name="select" id="select" onChange={this.handleChange_table.bind(this)}> 
                    
                        <option value="0">Sélectionner le nombre de tables </option> 
                          {optionItems } 
                      </Input>
                         
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Ajouter une image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="myImage"  onChange={this.fileChangedHandler.bind(this)} />
                    </Col>
                  </FormGroup>

                </Form>


              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.uploadHandler.bind(this)}>
                <i className="fa fa-dot-circle-o"></i>
                 Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>




           </Fade>
             </Col>
        </Row>
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
  return bindActionCreators({signUp},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AddRestaurant)







