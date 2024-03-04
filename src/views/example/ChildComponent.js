import React from 'react';

class ChildComponent extends React.Component {

    state = {
        fname: '',
        lname: '',

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
        console.log('>>>> check props: ', this.props)
        //let name = this.props.name;
        //let age = this.props.age;

        let { name, age, address, arrjobs } = this.props;

        return (
            <>
                <div className="job-lists">
                    {
                        arrjobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }

                </div>
            </>
        )

    }
}

export default ChildComponent;