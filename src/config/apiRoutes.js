/**
 * Created by cristian.jora on 12.10.2016.
 */
var base_url = 'http://localhost:3000/api/';
var yesterday = new Date().getDate() - 1;

export default {
  routes: {
    login: base_url + 'customers/login?include=user',
    payments: base_url + 'payments/',
    paymentCount: base_url + 'payments/count?where[receiverId]=',
    lastPayments: base_url + 'payments?filter[fields][date]=true&filter[fields][amount]=true&filter[order]=date%20DESC&filter[where][date][gt]=' + yesterday + '&filter[where][receiverId]='
  },
  base_url: base_url
}
