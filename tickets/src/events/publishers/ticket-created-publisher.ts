import { Publisher, Subjects, TicketCreatedEvent } from '@omar48/common'

export class TickerCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
    
}