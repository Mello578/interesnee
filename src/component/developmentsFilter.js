/**
 * Created by Mello on 28.08.2017.
 */

import React from "react";
import {EmployeesList} from './tableEmployees';

export class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            filterString: '',
            filterByDepartments: false
        }
    }

    refreshFilterString(event) {
        let filterString = event.target.value.toLowerCase();
        this.setState({filterString});

        let sortChecked = document.getElementById('sortDepart');
        if (sortChecked.checked) {
            this.state.filterByDepartments = true;

        } else {
            this.state.filterByDepartments = false;
            this.state.filterString = '';
        }
    }


    getFilteredData() {

        if (this.state.filterString) {
            const {employees, departments} = this.props;

            let sortArray = (this.state.filterByDepartments)
                ? departments
                : employees;
            let displayedData = sortArray.filter((item) => {
                return String(item.name).toLowerCase().indexOf(this.state.filterString) > -1;
            });
            if (this.state.filterByDepartments) {
                return {

                    departments: displayedData,
                    employees: this.props.employees
                };
            } else {
                return {
                    employees: displayedData,
                    departments: this.props.departments

                };
            }
        } else {
            return this.props;
        }
    }

    render() {
        const {employees, departments} = this.getFilteredData();

        return (
            <div className='row topBuffer'>
                <div className='col-md-offset-1 col-sm-offset-1 col-md-10 col-sm-10'>
                    <div className="indentTable">
                        <input type='text' placeholder='Фильтр'
                               className='buttonBorder filterStyle'
                               onChange={(event) => this.refreshFilterString(event)} id="filter"/>


                        <label htmlFor="sortDepart" className="table-filters">
                            <input type="checkbox" id="sortDepart" className="checkboxDepart"
                                   defaultChecked='checked'
                                   />
                            Сортировка по отделам
                        </label>


                        <div className="flRight">
                            <button type='button'
                                    className='btn btn-default buttonBorder buttonStyle'
                                    data-toggle='modal'
                                    data-target='#addElement'>
                                Добавить
                            </button>
                        </div>
                    </div>
                    <div className="border">
                        {
                            departments.map(({name, id}) =>
                                <div key={id}>
                                    {
                                        <EmployeesList employees={employees.filter(({departmentsId}) => {
                                            return departmentsId === id;
                                        })} name={name} id={id} allEmployees={this.props.employees} departments = {this.props.departments}/>
                                    }
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        )
    }
}