import firebase from 'firebase';
import uuid from 'uuid/v4';
import axios from 'axios';



const FIREBASEDB = 'https://minilik-4e824.firebaseio.com/';


const APIKEY = `AIzaSyD2raRNg7gb1bFPbB3WENlXEq2WEwI8NCA`;
const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;


const config = {
   // apiKey: "AIzaSyC3A1SavrYQVF4f4RT3HsjhjU3UwV_vrK4",
  //  authDomain: "minilik-31707.firebaseapp.com",
 // databaseURL: "https://minilik-31707.firebaseio.com",
  //  projectId: "minilik-31707",
  //  storageBucket: "minilik-31707.appspot.com",
  //  messagingSenderId: "849103712925"

    apiKey: "AIzaSyD2raRNg7gb1bFPbB3WENlXEq2WEwI8NCA",
    authDomain: "minilik-4e824.firebaseapp.com",
    databaseURL: "https://minilik-4e824.firebaseio.com",
    projectId: "minilik-4e824",
    storageBucket: "minilik-4e824.appspot.com",
    messagingSenderId: "41678970934"
    };

    
    firebase.initializeApp(config);
    const database = firebase.database()
    export default database



    export  const addTaskToFirebase = (task) => {
        const id = uuid()
        database.ref(`/${id}`).set({
        task, id
        })
       }


    export const addPubToFirebase = (pub) => {
        console.log('**********call the data base');
        database.ref('pubs').push( pub).then(() => {
            console.log('Data is saved!');
        }).catch((e) => {
            console.log('Failed.', e);
        });
       }   

       export const addRestaurantToFirebase = (restaurant) => {
        console.log('**********call the data base');
        database.ref('restaurants').push(restaurant).then(() => {
            console.log('Data is saved!');
        }).catch((e) => {
            console.log('Failed.', e);
        });
       } 


       export const addPlatToFirebase = (plat) => {
        console.log('**********call the data base');
        database.ref('plats').push(plat).then(() => {
            console.log('Data is saved!');
        }).catch((e) => {
            console.log('Failed.', e);
        });
       } 
       
       export const addCategoryToFirebase = (category) => {
        console.log('**********call the data base');
        database.ref('categories').push(category).then(() => {
            console.log('Data is saved!');
        }).catch((e) => {
            console.log('Failed.', e);
        });
       }  

    export const removeTaskFromFirebase = (id) => {
       database.ref(`/${id}`).remove()
       }


    




       export const listRestaurantsToFirebase = () => {
        var restaurants = [];
       database.ref('restaurants')
       .once('value')
       .then((snapshot) => {
           const key = snapshot.key;
           const val = snapshot.val();
           console.log(val);
            // put the values in the table restaurants
          // const restaurants = [];
           snapshot.forEach(item => {
            restaurants.push({
                id: item.key,
                ...item.val()
            });

            });
            console.log(restaurants);
            //return restaurants;
       })
       .catch((e) => {
           console.log('Error fetching data', e);
       });
       return restaurants;
    }

    export function getRestaurants(){

        const request = axios(`${FIREBASEDB}/restaurants.json`)
                    .then(response => {
                        let restaurants = [];
    
                        for(let key in response.data){
                            restaurants.push({
                                ...response.data[key],
                                id:key
                            })
                        }
                        return restaurants;
                    })
    
        return {
            type:'GET_RESTAURANTS',
            payload:request
        }
    
    }







    export const listCategoriesToFirebase = () => {
        var categories = [];
       database.ref('categories')
       .once('value')
       .then((snapshot) => {
           const key = snapshot.key;
           const val = snapshot.val();
           snapshot.forEach(item => {
            categories.push({
                id: item.key,
                ...item.val()
            });

            });
       })
       .catch((e) => {
           console.log('Error fetching data', e);
       });
       return categories;
    }


    export const listCommands = () => {
        var commands = [];
       database.ref('Commands')
       .once('value')
       .then((snapshot) => {
           const key = snapshot.key;
           const val = snapshot.val();
           snapshot.forEach(item => {
            commands.push({
                id: item.key,
                ...item.val()
            });

            });
       })
       .catch((e) => {
           console.log('Error fetching data', e);
       });
       return commands;
    }


    export function getCommands(){

        const request = axios(`${FIREBASEDB}/Commands.json`)
                    .then(response => {
                        let commands = [];
    
                        for(let key in response.data){
                            commands.push({
                                ...response.data[key],
                                id:key
                            })
                        }
                        return commands;
                    })
    
        return {
            type:'GET_COMMANDS',
            payload:request
        }
    
    }







    export const signUp = (data)=>{

        const request = axios({
            method:"POST",
            url:SIGNUP,
            data:{
                email: data.email,
                password: data.password,
                returnSecureToken:true
            },
            headers:{
                "Content-Type":"application/json"
            }
        }).then( response => {
            return response.data
        }).catch(e =>{
            return false
        })
    
        return {
            type: 'register_user',
            payload: request
        }
    }

    export function signIn(data){

        const request = axios({
            method:"POST",
            url:SIGNIN,
            data:{
                email: data.email,
                password: data.password,
                returnSecureToken:true
            },
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response =>{
            return response.data
        }).catch(e=>{
            return false
        });
    
        return {
            type: 'sign_user',
            payload: request
        }
    
    }





    export const updateCommandValidRestaurant = (idCommand, command) => {
        database.ref('Commands/'+idCommand).update(command);
    }


