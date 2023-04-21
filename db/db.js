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
   * @returns {Ticket} return a ticket object
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
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * return all available ticket
   */
  find() {
    return this.tickets;
  }

  /**
   *find ticket by ticket id
   * @param {string} ticketId
   * @returns {Ticket} ticket
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }
  /**
   * find all tickets for a given username
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUserName(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }
  /**
   *
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updateAt = new Date();

    return ticket;
  }

  /**
   *@param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *find winner
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let indexes = new Array(winnerCount);
    for (i = 0; i < indexes.length; i++) {
      let index = Math.floor(Map.random() * this.tickets.length);
      while (indexes.includes(index)) {
        index = Math.floor(Map.random() * this.tickets.length);
      }
      indexes.push(index);
    }

    const winner = indexes.map((index) => this.tickets[index]);
    return winner;
  }
}

const myDb = new MyDb();

module.exports = myDb;
