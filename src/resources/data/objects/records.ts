// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Records extends APIResource {
  create(
    objectName: string,
    params: RecordCreateParams,
    options?: RequestOptions,
  ): APIPromise<RecordCreateResponse> {
    const { validation_mode, ...body } = params;
    return this._client.post(path`/data/v1/objects/${objectName}/records`, {
      query: { validation_mode },
      body,
      ...options,
    });
  }

  retrieve(
    recordID: string,
    params: RecordRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RecordRetrieveResponse> {
    const { object_name } = params;
    return this._client.get(path`/data/v1/objects/${object_name}/records/${recordID}`, options);
  }

  update(
    recordID: string,
    params: RecordUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RecordUpdateResponse> {
    const { object_name, validation_mode, ...body } = params;
    return this._client.patch(path`/data/v1/objects/${object_name}/records/${recordID}`, {
      query: { validation_mode },
      body,
      ...options,
    });
  }

  list(
    objectName: string,
    query: RecordListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecordListResponse> {
    return this._client.get(path`/data/v1/objects/${objectName}/records`, { query, ...options });
  }

  delete(
    recordID: string,
    params: RecordDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RecordDeleteResponse> {
    const { object_name } = params;
    return this._client.delete(path`/data/v1/objects/${object_name}/records/${recordID}`, options);
  }

  findUnique(
    objectName: string,
    body: RecordFindUniqueParams,
    options?: RequestOptions,
  ): APIPromise<RecordFindUniqueResponse> {
    return this._client.post(path`/data/v1/objects/${objectName}/records/find-unique`, { body, ...options });
  }

  upsert(
    objectName: string,
    params: RecordUpsertParams,
    options?: RequestOptions,
  ): APIPromise<RecordUpsertResponse> {
    const { validation_mode, ...body } = params;
    return this._client.post(path`/data/v1/objects/${objectName}/records/upsert`, {
      query: { validation_mode },
      body,
      ...options,
    });
  }
}

/**
 * Validation mode to use when validating request data.
 *
 * `strict` validation will fail requests if any attribute fails validation,
 * including unrecognized attributes.
 *
 * `ignore_invalid` validation will strip out unknown attributes and replace known,
 * non-required attributes with `undefined` if they fail validation. The request
 * will still fail if the request body does not contain the proper structure or if
 * any required attributes fail validation.
 */
export type ValidationMode = 'strict' | 'ignore_invalid';

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
  /**
   * String UUIDv4 value.
   */
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

/**
 * Response for a successful get operation.
 */
export interface RecordFindUniqueResponse {
  data: RecordFindUniqueResponse.Data | null;

  status: 'success';
}

export namespace RecordFindUniqueResponse {
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
export interface RecordUpsertResponse {
  data: RecordUpsertResponse.Data;

  status: 'success';
}

export namespace RecordUpsertResponse {
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

export interface RecordCreateParams {
  /**
   * Body param: The attribute values for the new record.
   *
   * All required attributes on the object must be included.
   */
  data: unknown;

  /**
   * Query param: Validation mode to use when validating request data.
   *
   * `strict` validation will fail requests if any attribute fails validation,
   * including unrecognized attributes.
   *
   * `ignore_invalid` validation will strip out unknown attributes and replace known,
   * non-required attributes with `undefined` if they fail validation. The request
   * will still fail if the request body does not contain the proper structure or if
   * any required attributes fail validation.
   */
  validation_mode?: ValidationMode;
}

export interface RecordRetrieveParams {
  object_name: string;
}

export interface RecordUpdateParams {
  /**
   * Path param
   */
  object_name: string;

  /**
   * Body param: The attribute values to update in the record.
   */
  data: unknown;

  /**
   * Query param: Validation mode to use when validating request data.
   *
   * `strict` validation will fail requests if any attribute fails validation,
   * including unrecognized attributes.
   *
   * `ignore_invalid` validation will strip out unknown attributes and replace known,
   * non-required attributes with `undefined` if they fail validation. The request
   * will still fail if the request body does not contain the proper structure or if
   * any required attributes fail validation.
   */
  validation_mode?: ValidationMode;
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

export interface RecordFindUniqueParams {
  /**
   * The attribute values to match against to find an existing record.
   *
   * At least one unique attribute must be included to ensure that at most one record
   * is matched. Additional unique or non-unique attributes may also be included to
   * refine the matching criteria.
   */
  match: unknown;
}

export interface RecordUpsertParams {
  /**
   * Body param: The attribute values to match against to find an existing record.
   *
   * At least one unique attribute must be included to ensure that at most one record
   * is matched. Additional unique or non-unique attributes may also be included to
   * refine the matching criteria.
   */
  match: unknown;

  /**
   * Query param: Validation mode to use when validating request data.
   *
   * `strict` validation will fail requests if any attribute fails validation,
   * including unrecognized attributes.
   *
   * `ignore_invalid` validation will strip out unknown attributes and replace known,
   * non-required attributes with `undefined` if they fail validation. The request
   * will still fail if the request body does not contain the proper structure or if
   * any required attributes fail validation.
   */
  validation_mode?: ValidationMode;

  /**
   * Body param: The attribute values to use when creating a new record if no match
   * is found.
   */
  create?: unknown;

  /**
   * Body param: The attribute values to apply during both creation and update
   * operations.
   */
  create_or_update?: unknown;

  /**
   * Body param: The attribute values to apply during both creation and
   * update-if-empty operations.
   */
  create_or_update_if_empty?: unknown;

  /**
   * Body param: The attribute values to use when updating an existing record if a
   * match is found.
   */
  update?: unknown;

  /**
   * Body param: The attribute values to update when a matching record is found and
   * the existing attribute value on the record is `null`.
   */
  update_if_empty?: unknown;
}

export declare namespace Records {
  export {
    type ValidationMode as ValidationMode,
    type RecordCreateResponse as RecordCreateResponse,
    type RecordRetrieveResponse as RecordRetrieveResponse,
    type RecordUpdateResponse as RecordUpdateResponse,
    type RecordListResponse as RecordListResponse,
    type RecordDeleteResponse as RecordDeleteResponse,
    type RecordFindUniqueResponse as RecordFindUniqueResponse,
    type RecordUpsertResponse as RecordUpsertResponse,
    type RecordCreateParams as RecordCreateParams,
    type RecordRetrieveParams as RecordRetrieveParams,
    type RecordUpdateParams as RecordUpdateParams,
    type RecordListParams as RecordListParams,
    type RecordDeleteParams as RecordDeleteParams,
    type RecordFindUniqueParams as RecordFindUniqueParams,
    type RecordUpsertParams as RecordUpsertParams,
  };
}
