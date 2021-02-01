import { BadRequestException, PipeTransform } from '@nestjs/common';

export class TaskStatusPipe implements PipeTransform {
  readonly allowStatus = ['OPEN', 'PROGRESS', 'DONE'];

  transform(value: string) {
    value = value.toUpperCase();
    if (this.isStatusValid(value)) {
      return value;
    } else {
      throw new BadRequestException();
    }
  }

  private isStatusValid(status: string) {
    return this.allowStatus.includes(status);
  }
}
