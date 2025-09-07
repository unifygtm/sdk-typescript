// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Records extends APIResource {
  create(
    objectName: string,
    body: RecordCreateParams,
    options?: RequestOptions,
  ): APIPromise<RecordCreateResponse> {
    return this._client.post(path`/objects/${objectName}/records`, { body, ...options });
  }

  retrieve(
    recordID: string,
    params: RecordRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RecordRetrieveResponse> {
    const { object_name } = params;
    return this._client.get(path`/objects/${object_name}/records/${recordID}`, options);
  }

  update(
    recordID: string,
    params: RecordUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RecordUpdateResponse> {
    const { object_name, ...body } = params;
    return this._client.put(path`/objects/${object_name}/records/${recordID}`, { body, ...options });
  }

  list(
    objectName: string,
    query: RecordListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecordListResponse> {
    return this._client.get(path`/objects/${objectName}/records`, { query, ...options });
  }

  delete(
    recordID: string,
    params: RecordDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RecordDeleteResponse> {
    const { object_name } = params;
    return this._client.delete(path`/objects/${object_name}/records/${recordID}`, options);
  }
}

/**
 * Response for a successful create operation.
 */
export interface RecordCreateResponse {
  data: RecordCreateResponse.Data;

  status: 'success';
}

export namespace RecordCreateResponse {
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

/**
 * Response for a successful get operation.
 */
export interface RecordRetrieveResponse {
  data: RecordRetrieveResponse.Data;

  status: 'success';
}

export namespace RecordRetrieveResponse {
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

/**
 * Response for a successful update operation.
 */
export interface RecordUpdateResponse {
  data: RecordUpdateResponse.Data;

  status: 'success';
}

export namespace RecordUpdateResponse {
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

/**
 * Response for a successful list operation with cursor-based pagination.
 */
export interface RecordListResponse {
  cursor: string | null;

  data: Array<RecordListResponse.Data>;

  status: 'success';
}

export namespace RecordListResponse {
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

/**
 * Response for a successful delete operation.
 */
export interface RecordDeleteResponse {
  status: 'success';
}

export interface RecordCreateParams {
  /**
   * The attribute values for the new record.
   */
  data: unknown;
}

export interface RecordRetrieveParams {
  object_name: string;
}

export interface RecordUpdateParams {
  /**
   * Path param:
   */
  object_name: string;

  /**
   * Body param: The attribute values to update in the record.
   */
  data: unknown;
}

export interface RecordListParams {
  /**
   * Cursor from the previous response to resume pagination from.
   */
  cursor?: string;

  /**
   * Limit the number of records returned. Default is 100.
   */
  limit?: number;
}

export interface RecordDeleteParams {
  object_name: string;
}

export declare namespace Records {
  export {
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
