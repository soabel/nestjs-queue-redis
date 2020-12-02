import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Notification } from 'src/_models/notification';

@Injectable()
export class NotificationsService {

    constructor(@InjectQueue('email-notification') private readonly emailNotificationQueue: Queue) { }

    async save(notification: Notification): Promise<void> {
        await this.emailNotificationQueue.add('send-notification', notification);
    }
}
