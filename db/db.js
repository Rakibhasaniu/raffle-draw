const Ticket = require("./../routes/Ticket");

class MyDb {
  constructor() {
    this.tickets = [];
  }

  //create new ticket
  /**
   *create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @param {Ticket} return a ticket object
   */

  create(username, price) {
    const ticket = new Ticket();
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   */
  bulkCreate(username, price, quantity) {}

  //return all ticket
  find() {}

  //singleTicket
  findById() {}
}

const myDb = new MyDb();

module.exports = myDb;
