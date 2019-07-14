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
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';

import {addPubToFirebase}  from '../../../config/firebase';

class AddPub extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      selectedFile: 'Raouia'
     
    };

  }
 // state = {selectedFile: 'Rauia' }
  
  fileChangedHandler (event) {
   
    this.setState({selectedFile: event.target.files[0]});
    console.log( this.state.selectedFile);
    console.log('************coco est *****************');
  }

  uploadHandler ()  {
    console.log('************coco est bouton *****************');

    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://minilik.000webhostapp.com/pub.php', fd
    ).then(res=>
    {
    console.log(res);
    }
    );
    console.log('**** go to the base*******');
    var pub={
      url: 'https://minilik.000webhostapp.com/pub/'+this.state.selectedFile.name
    }
    addPubToFirebase(pub);

  }

  handleClick  ()  {
    console.log('this is:', this);
   
  }
  

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    console.log('************coco est render *****************');
    console.log('state:', this.state.selectedFile);
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
                <strong>Ajouter une publicité</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="get" encType="multipart/form-data" className="form-horizontal">


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Ajouter une image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <input type="file" id="file-input" name="myImage"  onChange={this.fileChangedHandler.bind(this)}/>
                    </Col>
                  </FormGroup>
{/*
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <input type="file" className="custom-file"  id="custom-file-input" name="file-input"/>
                        <span className="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>

*/}
                </Form>


              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.uploadHandler.bind(this)}> 
                <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
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

export default AddPub;