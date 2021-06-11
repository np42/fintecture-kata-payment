import { Typer, NotFound, Done, Boolean
       }                from 'cqes-type';
import { HTTPService, Request, Response, AccessError
       , props as HTTPServiceProps
       }                from 'cqes/helpers/HTTP.Service';

import * as Payment     from './Payment';


export interface props extends HTTPServiceProps {}

export class API extends HTTPService {

  constructor(props: props) {
    super(props);
    this.useCustomHandler = true;
    // Owner
    this.express.get('/Payment/:paymentId', this.GetPayment.bind(this));
    this.express.post('/Payment/Create',    this.CreatePayment.bind(this));

    // Exceptions
    this.express.use('*', (req: Request, res: Response) => {
      this.respondJSON(res, { code: 404, data: 'Endpoint not found' });
    });
    this.express.use((err: Error, req: Request, res: Response, next: () => void) => {
      this.respondServerError(res, err);
    });
  }

  GetPayment(req: Request, res: Response) {
    return this.query(Payment.Get, { paymentId: req.params.paymentId })
      .on(Payment.Payment, payment => this.respond(res, 200, payment))
      .on(NotFound, () => this.respond(res, 404))
      .onError(e => this.respondServerError(res, e));
  }

  CreatePayment(req: Request, res: Response) {
    return this.request(Payment.Create, req.body)
      .on(Payment.Created, info => this.respond(res, 200, info))
      .onError(e => this.respondServerError(res, e))
    ;
  }

}