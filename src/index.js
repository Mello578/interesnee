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
import {Table} from './component/table';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-2">
                            <h1>Список сотрудников организации</h1>
                        </div>
                    </div>
                </div>
                <Table/>
            </div>


        )
    }
}

render(<App/>, window.document.getElementById('content'));