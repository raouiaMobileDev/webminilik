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
import {listRestaurantsToFirebase, listCategoriesToFirebase, addPlatToFirebase}  from '../../../config/firebase';

class AddPlat extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
     // restaurant_url:'',
      listRestaurants:listRestaurantsToFirebase(),
      listCategories:listCategoriesToFirebase(),
      plat_name: '',
      plat_price:'',
      plat_restaurant:'',
      plat_category:'',
      selectedFile: 'Raouia',
    //  optionRestaurants:[],
    //  optionCategories:[]

    };

  //  this.setState({optionsRestaurants: this.state.listRestaurants.map((restaurant) =>
  //    <option key={restaurant.id}>{restaurant.name} ({restaurant.address})</option> )});

 //   this.setState({optionsRestaurants: this.state.optionCategories.map((category) =>
  //      <option key={category.id}>{category.name} </option> )});
   

  }



  handleChange_platName(event) {
    this.setState({plat_name: event.target.value});
  }

  handleChange_platPrice(event) {
    this.setState({plat_price: event.target.value});
  }

  handleChange_platRestaurant(event) {

  var idRestaurant=event.target.value;
  var restaurant;
   this.state.listRestaurants.some(function (res, index, _arr) {
     if(res.id===idRestaurant)
     {
        restaurant= res;
        return true;
     }
    });
    console.log(restaurant);
    if(restaurant!=="undefined")
    {
    this.setState({plat_restaurant: restaurant});
    console.log('************ option restaurant *****************');
    console.log(restaurant);
    }
  }

  handleChange_platCategory(event) {

    var idCategory=event.target.value;
    var category;
     this.state.listCategories.some(function (cat, index, _arr) {
       if(cat.id===idCategory)
       {
          category= cat;
          return true;
       }
      });
      console.log(category);
      if(category!=="undefined")
      {
        this.setState({plat_category: category});
      }
  }

  fileChangedHandler (event) {   
    this.setState({selectedFile: event.target.files[0]});
    console.log( this.state.selectedFile);
    console.log('************coco est *****************');
  }












  SelectOptionRestaurants  = () => (
    this.state.listRestaurant.map ((item) => (
    <option value={"{item.id}"}> {item.name} </option> 
    )
    )
  );

  

 
  
  
  uploadHandler ()  {
    console.log('************coco est bouton *****************');

    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://minilik.000webhostapp.com/plat.php', fd
    ).then(res=>
    {
    console.log(res);
    }
    );
    console.log('**** go to the base*******');
  
    var plat={
      name:this.state.plat_name,
      price:this.state.plat_price,
      restaurant: this.state.plat_restaurant,
      category:this.state.plat_category,
      url: 'https://minilik.000webhostapp.com/plat/'+this.state.selectedFile.name
    }
    addPlatToFirebase(plat);
  




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
    let restaurants = this.state.listRestaurants;
    let restoptionItems = restaurants.map((restaurant) =>
            <option key={restaurant.id} value={restaurant.id}>{restaurant.name} ({restaurant.address})</option>
        );

    let categories = this.state.listCategories;
    let catoptionItems = categories.map((category) =>
            <option key={category.id} value={category.id}>{category.name} </option>
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
                <strong>Ajouter un plat</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom de plat </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="plat_name"  onChange={this.handleChange_platName.bind(this)} placeholder="Text" />
                      <FormText color="muted">Ce champ est obligatoire</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Prix de plat  </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="plat_price" onChange={this.handleChange_platPrice.bind(this)} placeholder="Text" />
                      <FormText color="muted">Ce champ est obligatoire</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Salon de thé</Label>
                    </Col>
                    <Col xs="12" md="9">
                     <Input type="select" name="select" id="select" onChange={this.handleChange_platRestaurant.bind(this)}> 
                    
                        <option value="0">Sélectionner le salon de thé </option> 
                          {restoptionItems} 
                      </Input>
                         
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Catégorie de plat</Label>
                    </Col>
                    <Col xs="12" md="9">
                     <Input type="select" name="select" id="select" onChange={this.handleChange_platCategory.bind(this)}> 
                    
                        <option value="0">Sélectionner la categorie de plat </option> 
                        {catoptionItems} 
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

export default AddPlat;