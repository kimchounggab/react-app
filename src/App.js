import React, { Component } from 'react';
import Subject from './components/subject';
import Nav from './components/nav';
import Content from './components/content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        subject: { title: 'WEB', desc: 'World Wide Web'},
        mode: 'read',
        contents: [
          {id: 1, title: 'HTML' , desc: 'html is for web'},
          {id: 2, title: 'CSS' , desc: 'CSS is for web design'},
          {id: 1, title: 'Javascript' , desc: 'Javascript is for interactive'}
        ],
        welcome: { title: 'welcome to react', desc: 'React is web framework'},
        selected_content_id: 2
    }
  }
  render(){

    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
  
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} 
          desc={this.state.subject.desc}
          onChangePage = {function(){
          this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>

        <Nav data={this.state.contents}
          onChangePage = {function(id){
          this.setState({mode:'read',
          selected_content_id: Number(id)});
          }.bind(this)}>
        </Nav>

        <Content title={_title} desc={_desc}></Content>
      </div>
    );
}
}

export default App;
