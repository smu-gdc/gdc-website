import React from 'react';
import FullCalendar from '@fullcalendar/react'
import Daygrid from '@fullcalendar/daygrid'

import './Calendar.css'

class Calendar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[Daygrid]}
                    initialView="dayGridMonth"
                    events={[
                        {title: 'Unity Roadmap Meeting', date: '2021-02-03'},
                        {title: 'TestJam', start: '2021-02-21', end: '2021-03-07'},
                        {title: 'TestJam - Voting Period', start: '2021-03-07', end: '2021-03-14'}
                    ]}
                />
            </div>
        )
    }
}

export default Calendar;