import React from "react";
import PersonStatusForm  from "./PersonStatusForm";

export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            statuses: null
        };
    }

    componentDidMount() {
        fetch("/api/person")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    data: data
                });
            })
        fetch("api/statuses")
        .then(response =>response.json())
        .then(data => {
            this.setState({
               statuses: data 
            })
            
        })
    }

    render() {
        let content = <div className="loading">Loading...</div>;
        if (this.state.data) {
            content = (
                <ul>
                    {this.state.data.map(person => (
                        <li key={person.id}>
                          <div className="name">{person.name}</div>
                          <img src={person.image_url} />
                          
                          {
                          this.state.statuses === null} ?
                          '' :
                          <PersonStatusForm 
                            id={person.id}
                            status={person.status_id}
                            statuses = {this.state.statuses}
                          />
                        </li>
                    ))}
                </ul>
            );
        }

        return <div className="people-list">{content}</div>;
    }
}
