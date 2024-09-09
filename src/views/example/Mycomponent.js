import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';  
class MyComponent extends React.Component {

    state = {
        fname: '',
        lname: '',
        arrJobs: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project manager', salary: '1000' }

        ]
    }

    /* 
    JSX => return block 
    <> </> = react.fragment
   
    */
  
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>> check data input:', this.state)
    }

    render() {
        console.log('>>>> call render: ', this.state)
        return (
            <>
            <AddComponent/>
               
                <ChildComponent
                    
                    arrJobs={this.state.arrJobs}
                />
            </>
        )

    }
}

export default MyComponent;