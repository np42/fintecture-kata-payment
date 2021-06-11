import { IArray, Array, Record, Tuple, UUID, Enum, DateTime, Email, String, Number
       }          from 'cqes-type';

export class Payment extends Record.locate(__filename)
  .add('paymentId',   UUID)
  .add('senderId',    UUID)
  .add('recipientId', UUID)
  .add('amount',      Number.positive)
{
  paymentId:   string;
  senderId:    string;
  recipientId: string;
  amount:      number;
}

export class Created extends Record.locate(__filename)
  .add('paymentId', UUID)
{
  paymentId: string;
}
