import { Array, Record, Tuple, UUID, Enum, DateTime, Email, String, Number
       }          from 'cqes-type';


export class Get extends Record.locate(__filename)
  .add('paymentId', UUID)
{
  paymentId: string;
}

