/**
 * Created by Mello on 28.08.2017.
 */

import React from "react";

class Employees extends React.Component {
    render() {
        const {employees} = this.props;
        return
    }
}

class EmployeesList extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpened: false,
            glyph: ''
        }
    }

    toggleOpened() {
        this.setState({
            isOpened: !this.state.isOpened,
            glyph: !this.state.glyph
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
                            <td>Сотрудники. <p className="">Кол-во: #</p></td>
                        </tr>
                        </thead>
                        <tbody >
                        {
                            employees.map(({id, fio}, i) =>
                                <tr key={i}>
                                    <td>{fio}</td>
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

    render() {
        const {employees} = this.props;
        return (
            <div className='row topBuffer'>
                <div className='col-md-offset-1 col-sm-offset-1 col-md-10 col-sm-10'>
                    <div className="indentTable">
                        <input type='text' placeholder='Фильтр'
                               className='buttonBorder filterStyle table-filters'/>
                        <div className="flRight">
                            <button type='button' className='btn btn-default buttonBorder buttonStyle'
                                    data-toggle='modal'
                                    data-target='#addElement'>Добавить
                            </button>
                        </div>
                    </div>
                    <div className="border">
                        {
                            this.props.departments.map(({name, id}) =>
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