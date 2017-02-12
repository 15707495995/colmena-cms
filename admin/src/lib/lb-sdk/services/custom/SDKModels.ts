/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Domain } from '../../models/Domain';
import { Event } from '../../models/Event';
import { Post } from '../../models/Post';
import { Product } from '../../models/Product';
import { Setting } from '../../models/Setting';
import { Ping } from '../../models/Ping';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Domain: Domain,
    Event: Event,
    Post: Post,
    Product: Product,
    Setting: Setting,
    Ping: Ping,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
