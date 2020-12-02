import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsProcesor } from './notifications.procesor';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email-notification',
    })
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, NotificationsProcesor]
})
export class NotificationsModule { }
