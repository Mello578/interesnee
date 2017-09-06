/**
 * Created by Mello on 06.09.2017.
 */

import React from "react";

export class Employee extends React.Component {

    constructor() {
        super();
        this.state = {
            openEmployee: false

        }
    }


    openEmploy() {
        this.setState({
            openEmployee: !this.state.openEmployee
        });

    }

    render() {
        const {name, employees} = this.props;
        return (
            <td onClick={() => this.openEmploy(name)}>
                {name}
                <div className={'employee employeesHidden ' + (this.state.openEmployee ? 'employeesOpened' : '')}>
                    <div>
                        <img src={employees.filter((item)=>{
                            return item.name === name
                        })[0].photo} alt={name} id={name}/>

                    </div>


                </div>
            </td>
        )

    }
}