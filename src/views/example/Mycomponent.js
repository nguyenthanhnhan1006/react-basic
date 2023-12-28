import React from 'react';

class Mycomponent extends React.Component {

    state = {
        name: 'nhan',
        tt: 'ngu lon'

    }

    /* 
    JSX => return block 
    <> </> = react.fragment
   
    */

    handleOnchangeName = (event) => {
        //state automatically re-enters the old value unchanged
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('click me')
    }

    render() {
        console.log('>>>> call render: ', this.state)
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    Hello my Component, my name is {this.state.name}
                </div>
                <div className='second'>
                    nguoi dau ma {this.state.tt}
                </div >
                <div className='third' >
                    <button onClick={() => this.handleClickButton()}> Clickme </button>
                </div>
            </>
        )

    }
}

export default Mycomponent;