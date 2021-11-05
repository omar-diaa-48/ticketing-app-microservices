import { Publisher } from "@omar48/common";
import { Subjects } from "@omar48/common";
import { TicketCreatedEvent } from "@omar48/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
    
}