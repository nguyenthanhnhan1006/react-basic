import React from 'react';

class ChildComponent extends React.Component {

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
                <div>
                    ChildComponent
                </div>
            </>
        )

    }
}

export default ChildComponent;