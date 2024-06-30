var RecentCounter = function () {
  // create the Queue
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // push the element into the Queue
  this.queue.push(t);
  // remove the first element if its 3000+ older
  while (this.queue[0] < t - 3000) {
    // remove the first element since its older
    this.queue.shift();
  }
  // return the length of the remaining Q
  return this.queue.length;
};
