import React from 'react';
import TextField from '@material-ui/core/TextField';

function DatePicker({ onChange, value }) {
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
                value={value}
                onChange={e => {
                    const { value } = e.target;
                    onChange(value);
                }}
            />
        </form>
    );
};


export default DatePicker
