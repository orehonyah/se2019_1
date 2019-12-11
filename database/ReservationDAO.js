'use strict'

if (module.exports.connection !== undefined) return;

module.exports.connection = require('../database/mysql.js');
const conn = module.exports.connection;


class ReservationDAO {
    static searchSeats(bus_code, callback) {
        const sql = 
            'SELECT seat_number '
            +'FROM reservation_seats'
            +'where bus_code = "' + bus_code + '" '
            +'order by seat_number';
        conn.query(sql, (query_err, query_res, query_fields) => {
            let ret;
            if (query_err) ret =  0; // error
            else ret = query_res;
            callback(ret);
        });
    }

    static searchReservation(member_id, callback) {
        const sql = 
            'SELECT seat_number '
            +'FROM reservation_seats'
            +'where member_id = "' + member_id + '" '
            +'order by seat_number';
        conn.query(sql, (query_err, query_res, query_fields) => {
            let ret;
            if (query_err) ret =  0; // error
            else ret = query_res;
            callback(ret);
        });
    }

    static reserveSeats(bus_code, member_id, seats, callback) {

    }
}

module.exports.searchSeats = ReservationDAO.searchSeats;
module.exports.searchReservation = ReservationDAO.searchReservation;
module.exports.reserveSeats = ReservationDAO.reserveSeats;