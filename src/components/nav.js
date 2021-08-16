import React, { Component } from 'react';

class Nav extends Component {
  render(){
    var i = 0;
    var data = this.props.data;
    var lists = [];
    while(i < data.length){
      lists.push(<li key={data[i].id}> 
        <a href={data[i].id + '.html'}
        var data-id = {data[i].id}
        onClick={function(e){
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}>
      {data[i].title}</a></li>);
      i = i+1;
    }
    return(
     <nav>
       <ul>
        {lists}
       </ul>
     </nav>
    )
  }
}
export default Nav;