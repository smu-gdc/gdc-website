import React from 'react';
import FullCalendar from '@fullcalendar/react'
import Daygrid from '@fullcalendar/daygrid'

import './Calendar.css'

class Calendar extends React.Component {
    render() {
        return (
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[Daygrid]}
                    initialView="dayGridMonth"
                    events={[
                        {title: 'TestJam', date: '2021-02-02'}
                    ]}
                />
            </div>
        )
    }
}

export default Calendar;