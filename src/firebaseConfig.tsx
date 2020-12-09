//importing firebase
import firebase from 'firebase/app';
import 'firebase/auth';

      //toast(e.message)

//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCY8OX0EbAFz_jKceBaKSilsfSo45hduc",
    authDomain: "cvapplication-c898b.firebaseapp.com",
    projectId: "cvapplication-c898b",
    storageBucket: "cvapplication-c898b.appspot.com",
    messagingSenderId: "922223881086",
    appId: "1:922223881086:web:78591d8670256abd9da12f"
  };

  firebase.initializeApp(firebaseConfig)

  //function for login provided by firebase auth
  export async function login(email: string, password: string){
    try{
      const response = await firebase.auth().signInWithEmailAndPassword(email, password)
      return true
    } catch (e){
      return false
    }
  }
  //function for login provided by firebase auth
  export async function register(email: string, password: string){
    try{
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      return true
    } catch (e){
      return false

    }
  }
  //function for checking the user provided by firebase auth
  export function getUser(){
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
        if (user){
          resolve(user)
        } else {
          resolve(null)
        }
        unsubscribe()
      }) 
    })
  }

  //function for logout provided by firebase auth
  export async function logout(){
    try{
      const response = await firebase.auth().signOut()
      return true
    } catch (e){
      return false
    }
  }