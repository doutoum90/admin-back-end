import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { title } from 'process';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
    ){

    }
    
    @Get()
    allProducts(){
        
        return this.productService.all();
    }

    @Post()
    async create(
        @Body('title') title: string,
         @Body('image') image: string
    ){
        const product = await this.productService.create({title, image});
        this.client.emit('product_created', product);
        return product;
    }

    @Get(':id')
    getProduct(@Param('id') id: number){
        return this.productService.getProduct(id);
    }

    @Put(':id')
    async updateProduct(
        @Param('id') id: number,
        @Body('title') title: string,
         @Body('image') image: string
         ){
        await this.productService.updateProduct(id, { title, image});
        const product = await this.getProduct(id);
        this.client.emit('product_updated', product);
         return product;
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number){
        await this.productService.deleteProduct(id);
        const product = await this.getProduct(id);
        this.client.emit('product_deleted', product);
    }
}
