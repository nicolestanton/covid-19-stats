import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

function DatePicker() {
    return (
        <form className="date-picker" noValidate>
            <TextField
                id="date"
                label="Date From"
                type="date"
                defaultValue="2017-05-24"
                className="picker"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="date"
                label="Date To"
                type="date"
                defaultValue="2017-05-24"
                className="picker"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}


export default DatePicker