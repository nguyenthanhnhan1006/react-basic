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
        this.setState({
            name: event.target.value
        })
    }

    render() {


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
                </div>
            </>
        )

    }
}

export default Mycomponent;