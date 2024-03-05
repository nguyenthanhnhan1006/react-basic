import React from 'react';
import ChildComponent from './ChildComponent';

class Mycomponent extends React.Component {

    state = {
        fname: '',
        lname: '',
        arrjobs: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project manager', salary: '1000' }

        ]
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
                <ChildComponent
                    name={this.state.fname}
                    age={'25'}
                    address={'Ho Chi Minh'}
                    arrjobs={this.state.arrjobs}
                />
            </>
        )

    }
}

export default Mycomponent;