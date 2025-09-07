// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttributesAPI from './attributes';
import * as OptionsAPI from './options';
import {
  OptionCreateParams,
  OptionCreateResponse,
  OptionDeleteParams,
  OptionDeleteResponse,
  OptionListParams,
  OptionListResponse,
  OptionRetrieveParams,
  OptionRetrieveResponse,
  OptionUpdateParams,
  OptionUpdateResponse,
  Options,
  UAttributeOption,
} from './options';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Attributes extends APIResource {
  options: OptionsAPI.Options = new OptionsAPI.Options(this._client);

  create(
    objectName: string,
    body: AttributeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AttributeCreateResponse> {
    return this._client.post(path`/objects/${objectName}/attributes`, { body, ...options });
  }

  retrieve(
    attributeName: string,
    params: AttributeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AttributeRetrieveResponse> {
    const { object_name } = params;
    return this._client.get(path`/objects/${object_name}/attributes/${attributeName}`, options);
  }

  update(
    attributeName: string,
    params: AttributeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AttributeUpdateResponse> {
    const { object_name, ...body } = params;
    return this._client.put(path`/objects/${object_name}/attributes/${attributeName}`, { body, ...options });
  }

  list(objectName: string, options?: RequestOptions): APIPromise<AttributeListResponse> {
    return this._client.get(path`/objects/${objectName}/attributes`, options);
  }

  delete(
    attributeName: string,
    params: AttributeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AttributeDeleteResponse> {
    const { object_name } = params;
    return this._client.delete(path`/objects/${object_name}/attributes/${attributeName}`, options);
  }
}

/**
 * Definition of an attribute on a Unify object.
 */
export type UAttribute =
  | UAttribute.UnionMember0
  | UAttribute.UnionMember1
  | UAttribute.UnionMember2
  | UAttribute.UnionMember3
  | UAttribute.UnionMember4
  | UAttribute.UnionMember5
  | UAttribute.UnionMember6
  | UAttribute.UnionMember7
  | UAttribute.UnionMember8
  | UAttribute.UnionMember9
  | UAttribute.UnionMember10
  | UAttribute.UnionMember11
  | UAttribute.UnionMember12
  | UAttribute.UnionMember13
  | UAttribute.UnionMember14
  | UAttribute.UnionMember15;

export namespace UAttribute {
  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember0 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember1 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember2 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember3 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember4 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember5 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember6 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember7 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember8 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  export interface UnionMember9 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * The list of options for the attribute.
     */
    options: Array<OptionsAPI.UAttributeOption>;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember10 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  export interface UnionMember11 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * The API name of the object that this attribute references.
     */
    reference_to_object: string;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  export interface UnionMember12 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * The list of options for the attribute.
     */
    options: Array<OptionsAPI.UAttributeOption>;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember13 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember14 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }

  /**
   * Base properties that define an attribute on a Unify object.
   */
  export interface UnionMember15 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: AttributesAPI.UValueType;
  }
}

/**
 * Supported object attribute value type.
 */
export type UValueType =
  | 'Address'
  | 'Boolean'
  | 'Country'
  | 'Currency'
  | 'Date'
  | 'DateTime'
  | 'Decimal'
  | 'EmailAddress'
  | 'Integer'
  | 'MultiSelect'
  | 'PhoneNumber'
  | 'Reference'
  | 'Select'
  | 'Text'
  | 'Url'
  | 'Uuid';

/**
 * Response for a successful create operation.
 */
export interface AttributeCreateResponse {
  /**
   * Definition of an attribute on a Unify object.
   */
  data: UAttribute;

  status: 'success';
}

/**
 * Response for a successful get operation.
 */
export interface AttributeRetrieveResponse {
  /**
   * Definition of an attribute on a Unify object.
   */
  data: UAttribute;

  status: 'success';
}

/**
 * Response for a successful update operation.
 */
export interface AttributeUpdateResponse {
  /**
   * Definition of an attribute on a Unify object.
   */
  data: UAttribute;

  status: 'success';
}

/**
 * Response for a successful list operation.
 */
export interface AttributeListResponse {
  data: Array<UAttribute>;

  status: 'success';
}

/**
 * Response for a successful delete operation.
 */
export interface AttributeDeleteResponse {
  status: 'success';
}

export type AttributeCreateParams =
  | AttributeCreateParams.Variant0
  | AttributeCreateParams.Variant1
  | AttributeCreateParams.Variant2
  | AttributeCreateParams.Variant3
  | AttributeCreateParams.Variant4
  | AttributeCreateParams.Variant5
  | AttributeCreateParams.Variant6
  | AttributeCreateParams.Variant7
  | AttributeCreateParams.Variant8
  | AttributeCreateParams.UObjectsUMultiSelectAttribute
  | AttributeCreateParams.Variant10
  | AttributeCreateParams.UObjectsUReferenceAttribute
  | AttributeCreateParams.UObjectsUSelectAttribute
  | AttributeCreateParams.Variant13
  | AttributeCreateParams.Variant14
  | AttributeCreateParams.Variant15;

export declare namespace AttributeCreateParams {
  export interface Variant0 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant1 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant2 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant3 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant4 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant5 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant6 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant7 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant8 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface UObjectsUMultiSelectAttribute {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * The list of options for the attribute.
     */
    options: Array<OptionsAPI.UAttributeOption>;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant10 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface UObjectsUReferenceAttribute {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * The API name of the object that this attribute references.
     */
    reference_to_object: string;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface UObjectsUSelectAttribute {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * The list of options for the attribute.
     */
    options: Array<OptionsAPI.UAttributeOption>;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant13 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant14 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant15 {
    /**
     * This is the unique identifier for the attribute at the API level. It is unique
     * within the object and cannot be changed.
     */
    api_name: string;

    /**
     * This is a description of the attribute. It is not required but will be shown in
     * the UI to help understand the purpose of the object. Typically, this should be a
     * short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * This is the user-facing attribute name that will be shown within Unify. It is
     * unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Supported object attribute value type.
     */
    type: UValueType;
  }
}

export interface AttributeRetrieveParams {
  object_name: string;
}

export type AttributeUpdateParams =
  | AttributeUpdateParams.Variant0
  | AttributeUpdateParams.Variant1
  | AttributeUpdateParams.Variant2
  | AttributeUpdateParams.Variant3
  | AttributeUpdateParams.Variant4
  | AttributeUpdateParams.Variant5
  | AttributeUpdateParams.Variant6
  | AttributeUpdateParams.Variant7
  | AttributeUpdateParams.Variant8
  | AttributeUpdateParams.UObjectsUMultiSelectAttribute
  | AttributeUpdateParams.Variant10
  | AttributeUpdateParams.UObjectsUReferenceAttribute
  | AttributeUpdateParams.UObjectsUSelectAttribute
  | AttributeUpdateParams.Variant13
  | AttributeUpdateParams.Variant14
  | AttributeUpdateParams.Variant15;

export declare namespace AttributeUpdateParams {
  export interface Variant0 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant1 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant2 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant3 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant4 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant5 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant6 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant7 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant8 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface UObjectsUMultiSelectAttribute {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: The list of options for the attribute.
     */
    options: Array<OptionsAPI.UAttributeOption>;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant10 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface UObjectsUReferenceAttribute {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: The API name of the object that this attribute references.
     */
    reference_to_object: string;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface UObjectsUSelectAttribute {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: The list of options for the attribute.
     */
    options: Array<OptionsAPI.UAttributeOption>;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant13 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant14 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }

  export interface Variant15 {
    /**
     * Path param:
     */
    object_name: string;

    /**
     * Body param: This is the unique identifier for the attribute at the API level. It
     * is unique within the object and cannot be changed.
     */
    api_name: string;

    /**
     * Body param: This is a description of the attribute. It is not required but will
     * be shown in the UI to help understand the purpose of the object. Typically, this
     * should be a short sentence or two explaining the attribute.
     */
    description: string;

    /**
     * Body param: This is the user-facing attribute name that will be shown within
     * Unify. It is unique within the object and can be changed at any time.
     */
    display_name: string;

    /**
     * Body param: Whether the attribute is required.
     */
    is_required: boolean;

    /**
     * Body param: Whether the attribute is unique.
     */
    is_unique: boolean;

    /**
     * Body param: Supported object attribute value type.
     */
    type: UValueType;
  }
}

export interface AttributeDeleteParams {
  object_name: string;
}

Attributes.Options = Options;

export declare namespace Attributes {
  export {
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
    Options as Options,
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
