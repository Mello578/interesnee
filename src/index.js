/**
 * Created by Mello on 13.07.2017.
 */

import React from "react";
import {render} from "react-dom";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff';
import '..//style/style.css';
import 'jquery/dist/jquery.js'
import {Table} from './component/developmentsFilter';

class App extends React.Component {
    render() {
        return (
            <div className="workingField col-md-10 col-md-offset-1">
                <div className="container listEmployees col-md-offset-1">
                    <div className="row">
                        <div>
                            <h1 className="textFont">Список сотрудников организации</h1>
                        </div>
                    </div>
                </div>
                <Table
                    departments={this.props.departments}
                    employees={this.props.employees}
                />
            </div>
        )
    }
}

(() => {
    const dataDownload = require('./dataDownload');

    Promise.all([
        dataDownload('departments'),
        dataDownload('employees')
    ]).then(([departments, employees]) => {
        render(<App departments={departments} employees={employees}/>,
            document.getElementById('content'));
    })

})();