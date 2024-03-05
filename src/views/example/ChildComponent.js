import React from 'react';

// class ChildComponent extends React.Component {

//     render() {
//         console.log('>>>> check props: ', this.props)
//         //let name = this.props.name;
//         //let age = this.props.age;

//         let { name, age, address, arrjobs } = this.props;

//         return (
//             <>
//                 <div className="job-lists">
//                     {
//                         arrjobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//             </>
//         )

//     }
// }

const ChildComponent = (props) => {
    let { arrjobs } = props;

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

export default ChildComponent;