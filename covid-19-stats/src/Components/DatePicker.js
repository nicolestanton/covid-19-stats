import React from 'react';
import TextField from '@material-ui/core/TextField';

function DatePicker({ onChange }) {
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
                    const { value } = e.target;
                    onChange({ value });
                    console.log("date picker component console", { value });
                }}
            />
        </form>
    );
};


export default DatePicker