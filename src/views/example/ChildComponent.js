import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowhide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {

        let { arrjobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional:', check)
        return (

            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowhide()}> Show </button>
                    </div>

                    :
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
                        <div>
                            <button onClick={() => this.handleShowhide()}> Hide </button>
                        </div>

                    </>
                }
            </>
        )

    }
}

// const ChildComponent = (props) => {
//     let { arrjobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrjobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     }
//                     )
//                 }

//             </div>
//         </>
//     )
// }

export default ChildComponent;