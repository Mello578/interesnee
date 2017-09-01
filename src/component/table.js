/**
 * Created by Mello on 28.08.2017.
 */

import React from "react";


class EmployeesList extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpened: false,
            glyph: '',
            sortEmploy: false
        }
    }

    toggleOpened() {
        document.getElementById('filter').value = '';
        this.setState({
            isOpened: !this.state.isOpened,
            glyph: !this.state.glyph
        });
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
        const {employees, name} = this.props;
        return (
            <div>
                <button className="col-md-10 buttonDepartments"
                        onClick={() => this.toggleOpened()}>{name}<h4
                    className={(this.state.glyph ? 'glyphicon glyphicon-menu-down' : '')}></h4></button>
                <div
                    className={'employeesHidden ' + (this.state.isOpened ? 'employeesOpened' : '')}>
                    <table
                        className='table table-bordered table-striped table-condensed table-hover bufferTable employees'>
                        <thead>
                        <tr id="captionEmployees">
                            <td onClick={() => this.sortEmploy(employees)}>Сотрудники. <p className="">
                                Кол-во: {employees.length}</p>
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

export class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterString: '',
            filterByDepartments: false
        }
    }

    refreshFilterString(event) {
        let filterString = event.target.value.toLowerCase();
        this.setState({filterString});
    }

    checked() {
        const sortChecked = document.getElementById('sortDepart');

        if (sortChecked.checked) {
            this.state.filterByDepartments = true;
        } else {
            this.state.filterByDepartments = false;
            this.state.filterString = '';
            this.getFilteredData();
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
                                   onClick={() => this.checked()}/>
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
                                        })} name={name}/>
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