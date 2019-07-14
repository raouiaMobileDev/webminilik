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
} from 'reactstrap';

import axios from 'axios';
import { addCategoryToFirebase}  from '../../../config/firebase';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      category_name:'',
    };
  }




  fileChangedHandler (event) {   
    this.setState({selectedFile: event.target.files[0]});
    console.log( this.state.selectedFile);
    console.log('************coco est *****************');
  }

  handleChange_CategoryName(event) {
    this.setState({category_name: event.target.value});
  }

  handleChange_restAddress(event) {
    this.setState({restaurant_address: event.target.value});
  }
  
  
  uploadHandler ()  {
    console.log('************coco est bouton *****************');
   if(this.state.category_name !== "undefined")
   {
    var category={
      name:this.state.category_name,
    }
    addCategoryToFirebase(category);
  }
 
  }








  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
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
                <strong>Ajouter une catégorie de Plats</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom de la catégorie </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="rest_name"  onChange={this.handleChange_CategoryName.bind(this)} placeholder="Text" />
                      <FormText color="muted">Ce champ est obligatoire</FormText>
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

export default AddCategory;