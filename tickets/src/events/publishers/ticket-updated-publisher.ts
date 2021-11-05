import { Publisher, Subjects, TicketUpdatedEvent } from '@omar48/common'

export class TickerUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    readonly subject = Subjects.TicketUpdated;
    
}