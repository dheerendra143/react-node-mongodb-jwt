import logo from './logo.svg';
import './App.scss';
import Landing from "./Component/Landing/Landing";
import { connect } from "react-redux";
import rotateAction from "./redux/actions/rotateAction";

function App({rotating, stopAction, startAction, rotateAction}) {
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
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
