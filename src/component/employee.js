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



    changePhoto() {


       const exchangePhoto = document.getElementById('exchangePhoto');
        exchangePhoto.addEventListener(event.type, stopEvent(), false);

       function stopEvent() {
            console.log('qwqeqeq');
            event.stopPropagation()
        }
    }

    render() {
        const {name, employees} = this.props;
        const dataEmployee = employees.find((item) => {
            return item.name === name;
        });
        return (
            <td onClick={() => this.openEmploy()}>
                <div className={'nameEmployeesOpened ' + (this.state.openEmployee ? 'nameEmployeesHidden' : '')}>
                    {name}
                </div>

                <div className={'employee employeesHidden ' + (this.state.openEmployee ? 'employeesOpened' : '')}>
                    <div className="photoOpenEmployee">
                        <img src={dataEmployee.photo} alt={name} id={name}/>
                        <div>
                            <a href="#" id="exchangePhoto" onClick={() => this.changePhoto()}>Сменить фото</a>
                        </div>
                    </div>
                    <span>{name}</span>
                    <div className="namePhone">
                        <span> Телефон: {dataEmployee.phone} </span>
                    </div>


                </div>
            </td>
        )

    }
}