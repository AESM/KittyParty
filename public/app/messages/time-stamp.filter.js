// time-stamp.filter.js

import moment from 'moment';

export default function timeStampFilter() {
  return function(dateString) {
    return moment(dateString).fromNow();
  };
}
