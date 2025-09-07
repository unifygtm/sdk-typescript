// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecordsAPI from './records';
import {
  RecordCreateParams,
  RecordCreateResponse,
  RecordDeleteParams,
  RecordDeleteResponse,
  RecordListParams,
  RecordListResponse,
  RecordRetrieveParams,
  RecordRetrieveResponse,
  RecordUpdateParams,
  RecordUpdateResponse,
  Records,
} from './records';
import * as AttributesAPI from './attributes/attributes';
import {
  AttributeCreateParams,
  AttributeCreateResponse,
  AttributeDeleteParams,
  AttributeDeleteResponse,
  AttributeListResponse,
  AttributeRetrieveParams,
  AttributeRetrieveResponse,
  AttributeUpdateParams,
  AttributeUpdateResponse,
  Attributes,
  UAttribute,
  UValueType,
} from './attributes/attributes';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);

  create(body: ObjectCreateParams, options?: RequestOptions): APIPromise<ObjectCreateResponse> {
    return this._client.post('/objects', { body, ...options });
  }

  retrieve(objectName: string, options?: RequestOptions): APIPromise<ObjectRetrieveResponse> {
    return this._client.get(path`/objects/${objectName}`, options);
  }

  update(
    objectName: string,
    body: ObjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUpdateResponse> {
    return this._client.put(path`/objects/${objectName}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<ObjectListResponse> {
    return this._client.get('/objects', options);
  }

  delete(objectName: string, options?: RequestOptions): APIPromise<ObjectDeleteResponse> {
    return this._client.delete(path`/objects/${objectName}`, options);
  }

  findUnique(
    objectName: string,
    body: ObjectFindUniqueParams,
    options?: RequestOptions,
  ): APIPromise<ObjectFindUniqueResponse> {
    return this._client.post(path`/objects/${objectName}/find-unique`, { body, ...options });
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

/**
 * Response for a successful get operation.
 */
export interface ObjectFindUniqueResponse {
  data: ObjectFindUniqueResponse.Data | null;

  status: 'success';
}

export namespace ObjectFindUniqueResponse {
  export interface Data {
    /**
     * String UUIDv4 value.
     */
    id: string;

    /**
     * Attribute values for the record. Each key is the API name of the attribute and
     * each value is the corresponding attribute value for the record.
     */
    attributes: unknown;

    /**
     * Date and time the record was created.
     */
    created_at: string;

    /**
     * The API name of the object this record is an instance of.
     */
    object: string;

    /**
     * Date and time the record was last updated.
     */
    updated_at: string;
  }
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

export interface ObjectFindUniqueParams {
  /**
   * The attribute values to match against. Each key is the API name of the attribute
   * and each value is the corresponding attribute value to match.
   */
  match: unknown;
}

Objects.Attributes = Attributes;
Objects.Records = Records;

export declare namespace Objects {
  export {
    type UObject as UObject,
    type ObjectCreateResponse as ObjectCreateResponse,
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectUpdateResponse as ObjectUpdateResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectFindUniqueResponse as ObjectFindUniqueResponse,
    type ObjectCreateParams as ObjectCreateParams,
    type ObjectUpdateParams as ObjectUpdateParams,
    type ObjectFindUniqueParams as ObjectFindUniqueParams,
  };

  export {
    Attributes as Attributes,
    type UAttribute as UAttribute,
    type UValueType as UValueType,
    type AttributeCreateResponse as AttributeCreateResponse,
    type AttributeRetrieveResponse as AttributeRetrieveResponse,
    type AttributeUpdateResponse as AttributeUpdateResponse,
    type AttributeListResponse as AttributeListResponse,
    type AttributeDeleteResponse as AttributeDeleteResponse,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeRetrieveParams as AttributeRetrieveParams,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };

  export {
    Records as Records,
    type RecordCreateResponse as RecordCreateResponse,
    type RecordRetrieveResponse as RecordRetrieveResponse,
    type RecordUpdateResponse as RecordUpdateResponse,
    type RecordListResponse as RecordListResponse,
    type RecordDeleteResponse as RecordDeleteResponse,
    type RecordCreateParams as RecordCreateParams,
    type RecordRetrieveParams as RecordRetrieveParams,
    type RecordUpdateParams as RecordUpdateParams,
    type RecordListParams as RecordListParams,
    type RecordDeleteParams as RecordDeleteParams,
  };
}
