import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly repo: Repository<Product>
    ){}

    async all(): Promise<Product[]>{
        return this.repo.find();
    }

    async create(data): Promise<Product[]>{
        return this.repo.save(data);
    }

    async getProduct(id: number): Promise<Product>{
        return this.repo.findOne({id});
    }

    async updateProduct(id: number, data: {title: string, image: string}): Promise<any>{
        return this.repo.update(id, data);
    }

     async deleteProduct(id: number): Promise<any>{
        return this.repo.delete(id);
    }
}
