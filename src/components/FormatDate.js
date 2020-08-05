import React from 'react';
import dateFormat from 'dateformat';

function FormatDate(props) {
    return (
        <>
            {dateFormat(props.date, "yyyy-mm-dd H:MM")}
        </>
    );
}

export default FormatDate;
