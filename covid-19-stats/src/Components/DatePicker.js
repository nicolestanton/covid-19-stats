import React from 'react';
import TextField from '@material-ui/core/TextField';


//used 'https://material-ui.com/components/pickers/' for this
function DatePicker({ onChange, value, label, id }) {
    return (
        <form className="date-picker" noValidate>
            <TextField
                id={id}
                label={label}
                type="date"
                className="picker"
                InputLabelProps={{
                    shrink: true,
                }}
                value={value}
                onChange={e => {
                    const value = e.target.value;
                    onChange(value);
                }}
            />
        </form>
    );
};


export default DatePicker
