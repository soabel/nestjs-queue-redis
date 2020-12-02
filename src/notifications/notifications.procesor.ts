import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";
import { Notification } from "src/_models/notification";

@Processor('email-notification')
export class NotificationsProcesor {
  private readonly logger = new Logger(NotificationsProcesor.name);

  @Process('send-notification')
  async handleSendNotification(job: Job<Notification>) {
    this.logger.debug('Start notification...');
    await this.sleep(5000);

    this.logger.debug(job.data);
    this.logger.debug('Notification completed');


  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}