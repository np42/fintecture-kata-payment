import { View, Rq, R, E } from 'cqes';
import * as MySQLView     from 'cqes/helpers/MySQL.View';
import * as Payment       from './Payment';
import { v4 as uuid }     from 'uuid';

export class RequestHandlers extends MySQLView.RequestHandlers {

  async Create(request: Rq<Payment.Create>) {
    const paymentId = uuid();
    const { amount, recipientId, senderId } = request.data;
    const result: any = await this.mysql.request
    ( [ 'INSERT INTO `payments` (`paymentId`, `senderId`, `recipientId`, `amount`)'
      ,      'VALUES (?, ?, ?, ?)'
      ].join(' ')
    , [ paymentId, senderId, recipientId, amount ]
    );
    if (result.affectedRows === 1) return Payment.Created.from({ paymentId });
    throw new Error('Payment not created');
  }

}
