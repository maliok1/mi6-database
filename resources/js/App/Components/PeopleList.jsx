import React from "react";

export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
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
            });
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
                        </li>
                    ))}
                </ul>
            );
        }

        return <div className="people-list">{content}</div>;
    }
}
