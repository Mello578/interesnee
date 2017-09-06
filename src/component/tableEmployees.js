/**
 * Created by Mello on 05.09.2017.
 */

import React from "react";

export class EmployeesList extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpened: false,
            glyph: '',
            sortEmploy: false
        }
    }

    toggleOpened(departmentsId) {

        let foundedOpenedDepartments = () => {
            let count = 0;
            let searchOpenedDepartments = 'departments';
            for (let i = 0; i < this.props.departments.length; i++) {
                searchOpenedDepartments += i;
                if ($('#' + searchOpenedDepartments).hasClass('departmentOpened')) {
                    count++;
                }
            }
            return count;
        };

        let buttonDepartmentsId = 'departments' + departmentsId;
        const filter = document.getElementById('filter');
        const sortChecked = document.getElementById('sortDepart');

        filter.value = '';

        this.setState({
            isOpened: !this.state.isOpened,
            glyph: !this.state.glyph,
        });

        if (!this.state.isOpened) {
            $('#' + buttonDepartmentsId).addClass('departmentOpened');
            sortChecked.checked = false;
        } else {
            $('#' + buttonDepartmentsId).removeClass('departmentOpened');
            !foundedOpenedDepartments() ? sortChecked.checked = true : sortChecked;
        }
    }

    sortEmploy(employ) {
        employ.sort((a, b) => {
            return !this.state.sortEmploy
                ? (a['name'] < b['name'] ? 1 : -1)
                : (a['name'] > b['name'] ? 1 : -1);
        });
        this.setState({
            sortEmploy: !this.state.sortEmploy
        });
    }

    render() {
        const {employees, name, id, allEmployees} = this.props;
        const quantityEmploy = () => {
            const employees = allEmployees.filter(({departmentsId}) => {
                return departmentsId === id;
            });
            return employees.length;
        };

        return (
            <div>
                <button className="col-md-10 buttonDepartments" id={'departments' + id}
                        onClick={() => this.toggleOpened(id)}>{name}<h4
                    className={(this.state.glyph ? 'glyphicon glyphicon-menu-down' : '')}></h4></button>
                <div
                    className={'employeesHidden ' + (this.state.isOpened ? 'employeesOpened' : '')}>
                    <table
                        className='table table-bordered table-striped table-condensed table-hover bufferTable employees'>
                        <thead>
                        <tr id="captionEmployees">
                            <td onClick={() => this.sortEmploy(employees)}>Сотрудники.
                                <p>
                                    Кол-во: {quantityEmploy()}
                                </p>
                            </td>
                        </tr>
                        </thead>
                        <tbody >
                        {
                            employees.map(({id, name}, i) =>
                                <tr key={i}>
                                    <td>{name}</td>
                                </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}