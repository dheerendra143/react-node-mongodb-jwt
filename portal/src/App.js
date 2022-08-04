import logo from './logo.svg';
import './App.scss';
import Landing from "./Component/Landing/Landing";
import { connect } from "react-redux";
import { useEffect } from 'react';
import {fetchApi} from "./Utils/Services/__fetch";
import { signInAction, signOutAction } from "./Redux/Actions/userAction";
import {globalState} from "./Redux/globalState";

function App({isLoggedin, signInAction, signOutAction}) {
  useEffect(()=>{
    if(!isLoggedin) {
    fetchApi("GET", "emp/checkUser").then(sucess=>{
      if(sucess.status === 403) {
        signOutAction(globalState);
      } else {
        signInAction({ isLoggedin: true, userDetails: { session: sucess.session, name: sucess.name, email: sucess.email, contact: sucess.contact } });
      }
    })
  }
  },[]);

  

  return (
    <div className="App">
      <Landing />
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  signInAction: (payload) => dispatch(signInAction(payload)),
  signOutAction: (payload) => dispatch(signOutAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
