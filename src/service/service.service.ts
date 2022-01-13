import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Service } from "./service.entity";

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>
  ) {}

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  findOne(id: string): Promise<Service> {
    return this.serviceRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}
