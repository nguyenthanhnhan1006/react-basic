import React from 'react';

class Mycomponent extends React.Component {

    state = {
        fname: '',
        lname: ''
    }

    /* 
    JSX => return block 
    <> </> = react.fragment
   
    */
    handleChangefName = (event) => {
        this.setState({
            fname: event.target.value
        })
    }
    handleChangeLname = (event) => {
        this.setState({
            lname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>> check data input:', this.state)
    }

    render() {
        console.log('>>>> call render: ', this.state)
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.fname}
                        onChange={(event) => this.handleChangefName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lname}
                        onChange={(event) => this.handleChangeLname(event)}
                    /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />

                </form>
            </>
        )

    }
}

export default Mycomponent;