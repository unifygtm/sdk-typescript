// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ObjectsAPI from './objects';
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
} from './objects';
import * as RecordsAPI from './records';
import {
  RecordCreateParams,
  RecordCreateResponse,
  RecordDeleteParams,
  RecordDeleteResponse,
  RecordFindUniqueParams,
  RecordFindUniqueResponse,
  RecordRetrieveParams,
  RecordRetrieveResponse,
  RecordUpdateParams,
  RecordUpdateResponse,
  RecordUpsertParams,
  RecordUpsertResponse,
  Records,
  UAddress,
  UBoolean,
  UCountry,
  UCurrency,
  UDate,
  UDatetime,
  UDecimal,
  UEmail,
  UInteger,
  UMultiselect,
  UPhoneNumber,
  UReferenceByID,
  UReferenceByMatch,
  UReferenceByUpsert,
  USelect,
  UText,
  UURL,
  UUuid,
  ValidationMode,
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
  UAttributeOptionUpdateItem,
  UReferenceCardinality,
  URelatedReferenceAttribute,
} from './attributes/attributes';

export class Data extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
}

Data.Objects = Objects;
Data.Attributes = Attributes;
Data.Records = Records;

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

  export {
    Attributes as Attributes,
    type UAttribute as UAttribute,
    type UAttributeOptionUpdateItem as UAttributeOptionUpdateItem,
    type UReferenceCardinality as UReferenceCardinality,
    type URelatedReferenceAttribute as URelatedReferenceAttribute,
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
    type UAddress as UAddress,
    type UBoolean as UBoolean,
    type UCountry as UCountry,
    type UCurrency as UCurrency,
    type UDate as UDate,
    type UDatetime as UDatetime,
    type UDecimal as UDecimal,
    type UEmail as UEmail,
    type UInteger as UInteger,
    type UMultiselect as UMultiselect,
    type UPhoneNumber as UPhoneNumber,
    type UReferenceByID as UReferenceByID,
    type UReferenceByMatch as UReferenceByMatch,
    type UReferenceByUpsert as UReferenceByUpsert,
    type USelect as USelect,
    type UText as UText,
    type UURL as UURL,
    type UUuid as UUuid,
    type ValidationMode as ValidationMode,
    type RecordCreateResponse as RecordCreateResponse,
    type RecordRetrieveResponse as RecordRetrieveResponse,
    type RecordUpdateResponse as RecordUpdateResponse,
    type RecordDeleteResponse as RecordDeleteResponse,
    type RecordFindUniqueResponse as RecordFindUniqueResponse,
    type RecordUpsertResponse as RecordUpsertResponse,
    type RecordCreateParams as RecordCreateParams,
    type RecordRetrieveParams as RecordRetrieveParams,
    type RecordUpdateParams as RecordUpdateParams,
    type RecordDeleteParams as RecordDeleteParams,
    type RecordFindUniqueParams as RecordFindUniqueParams,
    type RecordUpsertParams as RecordUpsertParams,
  };
}
