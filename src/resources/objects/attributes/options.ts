// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Options extends APIResource {
  create(
    attributeName: string,
    params: OptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<OptionCreateResponse> {
    const { object_name, ...body } = params;
    return this._client.post(path`/objects/${object_name}/attributes/${attributeName}/options`, {
      body,
      ...options,
    });
  }

  retrieve(
    optionName: string,
    params: OptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OptionRetrieveResponse> {
    const { object_name, attribute_name } = params;
    return this._client.get(
      path`/objects/${object_name}/attributes/${attribute_name}/options/${optionName}`,
      options,
    );
  }

  update(
    optionName: string,
    params: OptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OptionUpdateResponse> {
    const { object_name, attribute_name, ...body } = params;
    return this._client.put(
      path`/objects/${object_name}/attributes/${attribute_name}/options/${optionName}`,
      { body, ...options },
    );
  }

  list(
    attributeName: string,
    params: OptionListParams,
    options?: RequestOptions,
  ): APIPromise<OptionListResponse> {
    const { object_name } = params;
    return this._client.get(path`/objects/${object_name}/attributes/${attributeName}/options`, options);
  }

  delete(
    optionName: string,
    params: OptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OptionDeleteResponse> {
    const { object_name, attribute_name } = params;
    return this._client.delete(
      path`/objects/${object_name}/attributes/${attribute_name}/options/${optionName}`,
      options,
    );
  }
}

/**
 * Definition of an option for a `SELECT` or `MULTI_SELECT` attribute.
 */
export interface UAttributeOption {
  /**
   * This is the unique identifier for the attribute option at the API level. It is
   * unique within the attribute and cannot be changed.
   */
  api_name: string;

  /**
   * This is the user-facing attribute option name that will be shown within Unify.
   * It is unique within the object and can be changed at any time.
   */
  display_name: string;
}

/**
 * Response for a successful create operation.
 */
export interface OptionCreateResponse {
  /**
   * Definition of an option for a `SELECT` or `MULTI_SELECT` attribute.
   */
  data: UAttributeOption;

  status: 'success';
}

/**
 * Response for a successful get operation.
 */
export interface OptionRetrieveResponse {
  /**
   * Definition of an option for a `SELECT` or `MULTI_SELECT` attribute.
   */
  data: UAttributeOption;

  status: 'success';
}

/**
 * Response for a successful update operation.
 */
export interface OptionUpdateResponse {
  /**
   * Definition of an option for a `SELECT` or `MULTI_SELECT` attribute.
   */
  data: UAttributeOption;

  status: 'success';
}

/**
 * Response for a successful list operation.
 */
export interface OptionListResponse {
  data: Array<UAttributeOption>;

  status: 'success';
}

/**
 * Response for a successful delete operation.
 */
export interface OptionDeleteResponse {
  status: 'success';
}

export interface OptionCreateParams {
  /**
   * Path param:
   */
  object_name: string;

  /**
   * Body param: This is the unique identifier for the attribute option at the API
   * level. It is unique within the attribute and cannot be changed.
   */
  api_name: string;

  /**
   * Body param: This is the user-facing attribute option name that will be shown
   * within Unify. It is unique within the object and can be changed at any time.
   */
  display_name: string;
}

export interface OptionRetrieveParams {
  object_name: string;

  attribute_name: string;
}

export interface OptionUpdateParams {
  /**
   * Path param:
   */
  object_name: string;

  /**
   * Path param:
   */
  attribute_name: string;

  /**
   * Body param: This is the unique identifier for the attribute option at the API
   * level. It is unique within the attribute and cannot be changed.
   */
  api_name: string;

  /**
   * Body param: This is the user-facing attribute option name that will be shown
   * within Unify. It is unique within the object and can be changed at any time.
   */
  display_name: string;
}

export interface OptionListParams {
  object_name: string;
}

export interface OptionDeleteParams {
  object_name: string;

  attribute_name: string;
}

export declare namespace Options {
  export {
    type UAttributeOption as UAttributeOption,
    type OptionCreateResponse as OptionCreateResponse,
    type OptionRetrieveResponse as OptionRetrieveResponse,
    type OptionUpdateResponse as OptionUpdateResponse,
    type OptionListResponse as OptionListResponse,
    type OptionDeleteResponse as OptionDeleteResponse,
    type OptionCreateParams as OptionCreateParams,
    type OptionRetrieveParams as OptionRetrieveParams,
    type OptionUpdateParams as OptionUpdateParams,
    type OptionListParams as OptionListParams,
    type OptionDeleteParams as OptionDeleteParams,
  };
}
