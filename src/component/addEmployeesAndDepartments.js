/**
 * Created by Mello on 12.09.2017.
 */

import React from 'react';
import 'jquery/dist/jquery.js';
import 'jquery-ui/ui/widgets/autocomplete';

export class AddEmployeesAndDepartments extends React.Component {

  autoComplit() {
      var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
      ];
      $( "#departments" ).autocomplete({
          source: availableTags,
          autoFocus: true,
          minLength: 2,
          minChars: 1,
          matchSubset: 1,
          autoFill: true,
          maxItemsToShow: 10,
          change: function( event, ui ) {}
      });
  }


    render() {
        const {departments, employees} = this.props;
        return (
            <div id='addElement' className='modal fade'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className='field'>
                                <label htmlFor='departments'>Отдел*:</label>
                                <input id='departments' type='text' onChange={()=>this.autoComplit()}/>
                            </div>
                            <div className='field'>
                                <label htmlFor='fio'>ФИО*:</label>
                                <input id='fio' type='text'/>
                            </div>
                            <div className='field'>
                                <label htmlFor='phone'>Телефон*:</label>
                                <input id='phone' type='text'/>
                            </div>
                            <div className='field'>
                                <label>Фото:</label>
                            </div>

                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-default buttonBorder buttonStyle'
                                    data-dismiss='modal'>Отмена
                            </button>
                            <button type='button' className='btn btn-default buttonBorder buttonStyle'
                                    id="addName">Добавить
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


