import { View, Q, R, E }          from 'cqes';
import * as MySQLView             from 'cqes/helpers/MySQL.View';
import * as Payment               from './Payment';

export class QueryHandlers extends MySQLView.QueryHandlers {

  async Get(query: Q<Payment.Get>) {
    const result: any = await this.mysql.request
    ( 'SELECT * FROM `payments` WHERE `paymentId` = ?'
    , [ query.data.paymentId ]
    );
    return Payment.Payment.from(result, this.logger.warn);
  }

}