/**
 * Created by Mello on 28.08.2017.
 */

import React from "react";

let dataDownload = require('../dataDownload');
dataDownload('departments');
dataDownload('employees');


export class Table extends React.Component {

    render(){
        return (
            <div className='row topBuffer'>
                <div className='col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8'>
                    <div>
                        <input type='text' placeholder='Фильтр'
                               className='buttonBorder filterStyle table-filters'/>
                        <div className="flRight">
                            <button type='button' className='btn btn-default buttonBorder buttonStyle'
                                    data-toggle='modal'
                                    data-target='#addElement'>Добавить
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                        <tr>

                        </tr>
                        </thead>
                        <tbody>
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}