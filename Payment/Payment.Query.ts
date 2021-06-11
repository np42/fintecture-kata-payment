import { View, Q, R, E }          from 'cqes';
import { NotFound }               from 'cqes-type';
import * as MySQLView             from 'cqes/helpers/MySQL.View';
import * as Payment               from './Payment';

export class QueryHandlers extends MySQLView.QueryHandlers {

  async Get(query: Q<Payment.Get>) {
    const result: any = await this.mysql.request
    ( 'SELECT * FROM `payments` WHERE `paymentId` = ?'
    , [ query.data.paymentId ]
    );
    if (result.length === 1) {
      return Payment.Payment.from(result[0], this.logger.warn);
    } else {
      return NotFound.from();
    }
  }

}