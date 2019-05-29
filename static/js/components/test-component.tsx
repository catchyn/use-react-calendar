import * as React from "React";
// import Calendar, { CalendarProps } from "react-calendar/dist/entry.nostyle";
import Calendar, { CalendarProps } from "react-calendar";
import * as moment from 'moment';
import { runInThisContext } from "vm";

interface TestComponentProps extends CalendarProps {}

interface TestComponentState {
  range?: moment.Moment | [moment.Moment, moment.Moment];
}

export class TestComponent extends React.Component<
  TestComponentProps,
  TestComponentState
> {
  constructor(props: TestComponentProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="custom-calendar">
        <div className="cc_range">{this.state.range}</div>
        <Calendar
          {...this.props}
          calendarType="ISO 8601"
          className="cc_body"
          maxDate={new Date()}
          minDate={new Date(2013, 0, 1)}
          tileClassName="cc_tile"
          minDetail="decade"
          selectRange={true}
          showNeighboringMonth={false}
          value={[new Date(2019, 2, 18), new Date(2019, 3, 18)]}
          onChange={this._onChange}
          onClickDay={this._onClickDay}
        />
      </div>
    );
  }

  private _onChange = (date: Date | Date[]) => {
    console.log("date: ", date);
    // if (type ) {
        
    // }
    // this.setState({range: moment(date)})
  };

  private _onClickDay = (day: Date | Date[]) => {
    console.log("day: ", day);
  };
}
