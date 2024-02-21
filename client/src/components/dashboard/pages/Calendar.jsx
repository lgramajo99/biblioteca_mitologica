import React from 'react';

function Calendar() {
    return (
        <div className='h-full'>
            <iframe src="https://calendar.google.com/calendar/embed?src=2b3e76427f57e2623fb163826b84a60e1ddf7ccbdf6d4ef58558f311f7216a6d%40group.calendar.google.com&ctz=America%2FArgentina%2FTucuman"
                // width="800"
                // height="600"
                className='w-full h-full'
                frameBorder="0"
                scrolling="no"
            />
        </div>
    );
}

export default Calendar;
