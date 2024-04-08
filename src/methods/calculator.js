import moment from 'moment';

// 日期

export function formatDate(time, d = '-') { return moment(time).format(`YYYY${d}MM${d}DD`); }

export function formatTime(time, d = '-') { return moment(time).format(`YYYY${d}MM${d}DD A h:mm:ss`); }

export function today(d = '-') { return moment().format(`YYYY${d}MM${d}DD`); }

export function now() { return parseInt(new Date().getTime() / 1000, 10); }

export function fromNow(time) {

    const date = moment(time).format('YYYYMMDD');

    return moment(date, 'YYYYMMDD').startOf('day').fromNow();

}

// conversion

export function convertByteUnit(bytes) {

    if (bytes >= 1000000) {

        return `約 ${+(bytes / 1000000).toFixed(2)} MB`;

    }

    if (bytes >= 1000) {

        return `約 ${+(bytes / 1000).toFixed(2)} KB`;

    }

    return `${bytes} bytes`;

}
