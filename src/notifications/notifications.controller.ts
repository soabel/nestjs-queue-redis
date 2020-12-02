import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Notification } from 'src/_models/notification';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {

    constructor(private notificationService: NotificationsService) {

    }

    @Post()
    async save(@Res() res: Response, @Body() notification: Notification): Promise<any> {
        await this.notificationService.save(notification);
        return res.status(HttpStatus.OK).send();
    }
}
