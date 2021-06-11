import { Array, Record, Tuple, UUID, Enum, DateTime, Email, String, Number
       }          from 'cqes-type';

export class Create extends Record.locate(__filename)
  .add('senderId',    UUID)
  .add('recipientId', UUID)
  .add('amount',      Number.positive)
{
  senderId:    string;
  recipientId: string;
  amount:      number;
}

