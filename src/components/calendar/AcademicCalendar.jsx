import React, { useState, useEffect } from 'react';
import Back from '../common/back/Back';
import calendarEventsData from '../../data/calendarEvents.json';
import './AcademicCalendar.css';

const AcademicCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    // Load events from JSON (later will be from Firebase/Supabase)
    setEvents(calendarEventsData.events);
  }, []);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    
    let filteredEvents = events.filter(event => event.date === dateString);
    
    if (filterType !== 'all') {
      filteredEvents = filteredEvents.filter(event => event.type === filterType);
    }
    
    return filteredEvents;
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'viva':
        return '#f36523';
      case 'revision':
        return '#667eea';
      case 'exam':
        return '#764ba2';
      case 'holiday':
        return '#28a745';
      default:
        return '#6c757d';
    }
  };

  const getEventTypeLabel = (type) => {
    switch (type) {
      case 'viva':
        return 'Viva';
      case 'revision':
        return 'Revision';
      case 'exam':
        return 'Exam';
      case 'holiday':
        return 'Holiday';
      default:
        return 'Event';
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    if (today.getFullYear() === 2026) {
      setCurrentMonth(today);
    } else {
      setCurrentMonth(new Date(2026, 0, 1));
    }
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(day);
    }
  };

  const days = getDaysInMonth(currentMonth);
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  // Get all events for current month
  const monthEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === currentMonth.getFullYear() &&
           eventDate.getMonth() === currentMonth.getMonth();
  });

  // Filter month events by type
  const filteredMonthEvents = filterType === 'all' 
    ? monthEvents 
    : monthEvents.filter(event => event.type === filterType);

  return (
    <>
      <Back title="Academic Calendar 2026" />
      
      <section className="calendar-section padding">
        <div className="container">
          <div className="calendar-wrapper">
            {/* Calendar Controls */}
            <div className="calendar-controls">
              <div className="month-navigation">
                <button onClick={goToPreviousMonth} className="nav-button">
                  <i className="fa fa-chevron-left"></i>
                </button>
                <h2 className="current-month">
                  {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <button onClick={goToNextMonth} className="nav-button">
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
              
              <button onClick={goToToday} className="today-button">
                Today
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                All Events
              </button>
              <button
                className={`filter-btn ${filterType === 'viva' ? 'active' : ''}`}
                onClick={() => setFilterType('viva')}
                style={{ '--event-color': '#f36523' }}
              >
                Viva Days
              </button>
              <button
                className={`filter-btn ${filterType === 'revision' ? 'active' : ''}`}
                onClick={() => setFilterType('revision')}
                style={{ '--event-color': '#667eea' }}
              >
                Revision Days
              </button>
              <button
                className={`filter-btn ${filterType === 'exam' ? 'active' : ''}`}
                onClick={() => setFilterType('exam')}
                style={{ '--event-color': '#764ba2' }}
              >
                Exams
              </button>
              <button
                className={`filter-btn ${filterType === 'holiday' ? 'active' : ''}`}
                onClick={() => setFilterType('holiday')}
                style={{ '--event-color': '#28a745' }}
              >
                Holidays
              </button>
            </div>

            <div className="calendar-content">
              {/* Calendar Grid */}
              <div className="calendar-grid">
                {/* Week Day Headers */}
                <div className="calendar-header">
                  {weekDays.map((day, index) => (
                    <div key={index} className="week-day-header">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="calendar-days">
                  {days.map((day, index) => {
                    const dayEvents = day ? getEventsForDate(day) : [];
                    const isSelected = selectedDate === day;
                    const isToday = day && 
                      new Date().getDate() === day &&
                      new Date().getMonth() === currentMonth.getMonth() &&
                      new Date().getFullYear() === currentMonth.getFullYear();

                    return (
                      <div
                        key={index}
                        className={`calendar-day ${!day ? 'empty' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                        onClick={() => handleDateClick(day)}
                      >
                        {day && (
                          <>
                            <div className="day-number">{day}</div>
                            <div className="day-events">
                              {dayEvents.slice(0, 2).map((event, eventIndex) => (
                                <div key={eventIndex} className="event-item-inline">
                                  <div
                                    className="event-dot"
                                    style={{ backgroundColor: getEventTypeColor(event.type) }}
                                    title={event.title}
                                  ></div>
                                  <div 
                                    className="event-name"
                                    style={{ color: getEventTypeColor(event.type) }}
                                    title={event.title}
                                  >
                                    {event.title}
                                  </div>
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <div className="more-events">+{dayEvents.length - 2} more</div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Events Sidebar */}
              <div className="events-sidebar">
                <h3>Events for {months[currentMonth.getMonth()]}</h3>
                
                {filteredMonthEvents.length === 0 ? (
                  <div className="no-events">No events found for this month</div>
                ) : (
                  <div className="events-list">
                    {filteredMonthEvents.map((event) => {
                      const eventDate = new Date(event.date);
                      const day = eventDate.getDate();
                      
                      return (
                        <div
                          key={event.id}
                          className={`event-item ${selectedDate === day ? 'highlighted' : ''}`}
                          onClick={() => handleDateClick(day)}
                        >
                          <div className="event-date-badge">
                            {day}
                          </div>
                          <div className="event-details">
                            <div className="event-title">{event.title}</div>
                            <div className="event-type" style={{ color: getEventTypeColor(event.type) }}>
                              {getEventTypeLabel(event.type)}
                            </div>
                            {event.description && (
                              <div className="event-description">{event.description}</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Selected Date Events */}
                {selectedDate && selectedDateEvents.length > 0 && (
                  <div className="selected-date-events">
                    <h4>Events on {selectedDate} {months[currentMonth.getMonth()]}</h4>
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className="selected-event-item">
                        <div
                          className="event-type-badge"
                          style={{ backgroundColor: getEventTypeColor(event.type) }}
                        >
                          {getEventTypeLabel(event.type)}
                        </div>
                        <div className="selected-event-details">
                          <div className="selected-event-title">{event.title}</div>
                          {event.description && (
                            <div className="selected-event-description">{event.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicCalendar;

