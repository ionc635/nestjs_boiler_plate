import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('v1/service')
export class ServiceController {
  @Get()
  findOne(@Req() request: Request): string {
    return 'hi';
  }
}
