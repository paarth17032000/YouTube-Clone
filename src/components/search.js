import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        search: null
    }
    handleChange = (e) => {
        let search = e.target.value;
        this.setState({
            search
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { search } = this.state;
        let { onFormSubmit } = this.props;
        onFormSubmit(search);
    }
    render() {
        return (
            <div className="container pt-3">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className="form-control" type="text" placeholder="Search here ..." />
                </form>
            </div>
        )
    }
}
