export abstract class EmailSenderPort {
  abstract send(to: string, subject: string, body: string): Promise<void>;
}
