// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ObjectsAPI from './objects/objects';
import {
  ObjectCreateParams,
  ObjectCreateResponse,
  ObjectDeleteResponse,
  ObjectListResponse,
  ObjectRetrieveResponse,
  ObjectUpdateParams,
  ObjectUpdateResponse,
  Objects,
  UObject,
} from './objects/objects';

export class Data extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
}

Data.Objects = Objects;

export declare namespace Data {
  export {
    Objects as Objects,
    type UObject as UObject,
    type ObjectCreateResponse as ObjectCreateResponse,
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectUpdateResponse as ObjectUpdateResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectCreateParams as ObjectCreateParams,
    type ObjectUpdateParams as ObjectUpdateParams,
  };
}
