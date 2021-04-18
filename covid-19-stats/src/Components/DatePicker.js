import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

function DatePicker({ onChange }) {

    const todaysDate = new Date()
    return (
        <form className="date-picker" noValidate>
            <TextField
                id="date"
                label="Choose date"
                type="date"
                className="picker"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => {
                    const testDate = e.target.value;
                    onChange(testDate);
                    console.log("date picker testing", testDate);
                }}
            />
        </form>
    );
}


export default DatePicker