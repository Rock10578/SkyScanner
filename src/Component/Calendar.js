import { Component } from 'react';
import BpkCalendar, {CALENDAR_SELECTION_TYPE} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {INPUT_TYPES} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import '../App.css';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tues',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thrus',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  }
  
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null 
      },
      buttonText: 'Click me!!',
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: this.state.selectionConfiguration.type,
        date: date,
      },
    });
  };
  
  handleClick = () => {
    this.setState({buttonText: 'Continue'})
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">Flight Schedule</header>
        <div className='Calendar'>
          <BpkInput
            id="dateInput"
            type={INPUT_TYPES.text}
            name="date"
            value={(this.state.selectionConfiguration.date || '').toString()}
            placeholder="Departure date"
          />
          <BpkCalendar
            id="calendar"
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />
          <button id='click' onClick={this.handleClick}>{this.state.buttonText}</button>
        </div>
      </div>
    );
  }
}