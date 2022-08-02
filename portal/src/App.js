import logo from './logo.svg';
import './App.scss';
import Landing from "./Component/Landing/Landing";
import { connect } from "react-redux";
import rotateAction from "./Redux/actions/rotateAction";
import { useEffect } from 'react';
import {fetchApi} from "./Utils/Services/__fetch";
import { singInAction } from "./Redux/actions/userAction";


function App({isLoggedin, rotating, singInAction, rotateAction}) {
  useEffect(()=>{
    if(!isLoggedin) {
    fetchApi("GET", "emp/checkUser").then(sucess=>{
      singInAction({ isLoggedin: true, userDetails: { session: sucess.session, name: sucess.name, email: sucess.email, contact: sucess.contact } })
    })
  }
  },[]);

  

  return (
    <div className="App">
      {rotating? "true": "false"}
      <img
        src={logo}
        className={
          "App-logo" +
          (rotating ? "" : " App-logo-paused")
        }
        alt="logo"
        onClick={
          () => rotateAction(!rotating)
        }
      />
      <Landing />
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  singInAction: (payload) => dispatch(singInAction(payload)),
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
