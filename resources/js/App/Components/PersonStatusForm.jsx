import React from "react";


export default class PersonStatusForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        status:this.props.status
    };

}  

handleStatusChange = event => {
  this.setState({
    status: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault();
   
  fetch('api/person/status/change', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
      person_id: this.props.id,
      status:this.state.status
    })
  })
 
}

render(){
    return (
      <form action="" onSubmit = {this.handleSubmit}>
        <select value={this.state.status} onChange={this.handleStatusChange}>{
          this.props.statuses.map(status => (
            <option key={status.id} value={status.id}>{status.name}</option>
          ))
        }
        </select>

        <input type="submit" value="Change status"/>
      </form>
    )
  }
}