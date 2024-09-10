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

    addNewJob = (job) => {
        console.log(' check job from parent:', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]  // spread operator to clone the array, add new job, and update the state.
            // arrJobs: this.state.arrJobs.concat(job)  // concat method to clone the array, add new job, and update the state.
        })
        
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
            currentJobs = currentJobs.filter(item => item.id !== job.id)
            this.setState({ arrJobs: currentJobs })
    }


    /* 
    JSX => return block 
    fragment
   
    */
  
   

// re-render
    render() {
        console.log('>>>> call render: ', this.state)
        return (
            <>
            <AddComponent
             addNewJob={this.addNewJob}
            />
               
            <ChildComponent
                    
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )

    }
}

export default MyComponent;