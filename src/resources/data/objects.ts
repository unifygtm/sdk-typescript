// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  create(body: ObjectCreateParams, options?: RequestOptions): APIPromise<ObjectCreateResponse> {
    return this._client.post('/data/v1/objects', { body, ...options });
  }

  retrieve(objectName: string, options?: RequestOptions): APIPromise<ObjectRetrieveResponse> {
    return this._client.get(path`/data/v1/objects/${objectName}`, options);
  }

  update(
    objectName: string,
    body: ObjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUpdateResponse> {
    return this._client.patch(path`/data/v1/objects/${objectName}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<ObjectListResponse> {
    return this._client.get('/data/v1/objects', options);
  }

  delete(objectName: string, options?: RequestOptions): APIPromise<ObjectDeleteResponse> {
    return this._client.delete(path`/data/v1/objects/${objectName}`, options);
  }
}

export interface UObject {
  /**
   * This is the unique identifier for the object at the API level. It is unique
   * within Unify and cannot be changed.
   */
  api_name: string;

  /**
   * This is a description of the object. It is not required but will be shown in the
   * UI to help understand the purpose of the object. Typically, this should be a
   * short sentence or two explaining the object.
   */
  description: string | null;

  /**
   * This is the user-facing object name shown within Unify. It is not required to be
   * unique within Unify and can be changed at any time.
   */
  display_name: string;

  /**
   * Represents who created and manages an object in Unify.
   *
   * In most ways, all objects within the Unify platform behave the same way
   * regardless of whether they are defined by Unify or as custom objects by a plugin
   * or user. This includes the ability to define custom attributes and access
   * records via API.
   *
   * However, there are some subtle distinctions that require differentiating between
   * these classifications of objects. This enumeration is used to represent these
   * distinctions.
   */
  provider: 'UNIFY' | 'CUSTOMER';
}

/**
 * Response for a successful create operation.
 */
export interface ObjectCreateResponse {
  data: UObject;

  status: 'success';
}

/**
 * Response for a successful get operation.
 */
export interface ObjectRetrieveResponse {
  data: UObject;

  status: 'success';
}

/**
 * Response for a successful update operation.
 */
export interface ObjectUpdateResponse {
  data: UObject;

  status: 'success';
}

/**
 * Response for a successful list operation.
 */
export interface ObjectListResponse {
  data: Array<UObject>;

  status: 'success';
}

/**
 * Response for a successful delete operation.
 */
export interface ObjectDeleteResponse {
  status: 'success';
}

export interface ObjectCreateParams {
  /**
   * This is the unique identifier for the object at the API level. It is unique
   * within Unify and cannot be changed.
   */
  api_name: string;

  /**
   * This is a description of the object. It is not required but will be shown in the
   * UI to help understand the purpose of the object. Typically, this should be a
   * short sentence or two explaining the object.
   */
  description: string | null;

  /**
   * This is the user-facing object name shown within Unify. It is not required to be
   * unique within Unify and can be changed at any time.
   */
  display_name: string;
}

export interface ObjectUpdateParams {
  /**
   * This is a description of the object. It is not required but will be shown in the
   * UI to help understand the purpose of the object. Typically, this should be a
   * short sentence or two explaining the object.
   */
  description: string | null;

  /**
   * This is the user-facing object name shown within Unify. It is not required to be
   * unique within Unify and can be changed at any time.
   */
  display_name: string;
}

export declare namespace Objects {
  export {
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
