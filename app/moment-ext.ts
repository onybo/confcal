import * as moment from 'moment';

interface MomentExt extends moment.MomentStatic {
  default(): moment.Moment;
  default(date: Date): moment.Moment;
}

export default (date: Date) : moment.Moment => {
  return (moment as MomentExt).default(date);
};