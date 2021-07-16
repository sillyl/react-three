import React,{Component} from 'react';
import Draggable from 'react-draggable';
import './App.css';
import Test from "./containers/test";
import 'antd/dist/antd.css';

interface Props{
  prefixCls?:any;
  match?: any;
  history?: any;
}
class App extends Component<Props,{}>{
render():React.ReactElement{
  return (
    <Test/>
    )
}}

export default App;
