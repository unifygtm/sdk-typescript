// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
 * Composite object representing a physical address.
 */
export interface Address {
  /**
   * State, province, region, or territory.
   */
  administrative_area?: string;

  /**
   * Composite object representing a country.
   */
  country?: Country;

  /**
   * Neighborhood, borough, district, or city sector.
   */
  dependent_locality?: string;

  /**
   * City, town, or village.
   */
  locality?: string;

  /**
   * Postal code or ZIP code.
   */
  postal_code?: string;

  /**
   * Street number or building name.
   */
  premise?: string;

  /**
   * County or other secondary governmental division of an administrative area.
   */
  sub_administrative_area?: string;

  /**
   * Apartment, suite, office number, or other secondary unit designator.
   */
  sub_premise?: string;

  /**
   * Street name with elements such as street type or direction.
   */
  thoroughfare?: string;
}

/**
 * Boolean value.
 */
export type Boolean = boolean;

/**
 * Attribute key-value pairs associated with an object record.
 */
export interface CompanyAttributes {
  /**
   * String value representing a web URL or internet domain.
   */
  domain: URL;

  /**
   * Composite object representing a physical address.
   */
  address?: Address;

  /**
   * String value representing a phone number.
   */
  corporate_phone?: PhoneNumber | null;

  /**
   * String value.
   */
  description?: Text | null;

  /**
   * Boolean value.
   */
  do_not_contact?: Boolean | null;

  /**
   * Integer value.
   */
  employee_count?: Integer | null;

  /**
   * String value representing a date.
   */
  founded?: Date | null;

  /**
   * String value.
   */
  industry?: Text | null;

  /**
   * String value representing a datetime.
   */
  last_activity_at?: Datetime | null;

  /**
   * String value.
   */
  lead_source?: Text | null;

  /**
   * String value representing a web URL or internet domain.
   */
  linkedin_url?: URL | null;

  /**
   * String value.
   */
  name?: Text | null;

  /**
   * The user that owns the company record.
   */
  record_owner?: ReferenceByID | ReferenceByMatch | ReferenceByUpsert | null;

  /**
   * Composite object representing a currency value.
   */
  revenue?: Currency;

  /**
   * String value.
   */
  status?: Text | null;

  /**
   * String value.
   */
  time_zone?: Text | null;

  [k: string]:
    | Value
    | null
    | URL
    | Address
    | PhoneNumber
    | null
    | Text
    | null
    | Boolean
    | null
    | Integer
    | null
    | Date
    | null
    | Datetime
    | null
    | ReferenceByID
    | ReferenceByMatch
    | ReferenceByUpsert
    | null
    | Currency
    | undefined;
}

/**
 * Composite object representing a country.
 */
export interface Country {
  /**
   * ISO 3166-1 alpha-2 country code.
   */
  code:
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';

  /**
   * Country name.
   */
  name: string;
}

/**
 * Composite object representing a currency value.
 */
export interface Currency {
  /**
   * ISO 4217 currency code.
   */
  code:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'USS'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XTS'
    | 'XXX'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

  /**
   * Currency value.
   */
  value: number;
}

/**
 * String value representing a date.
 */
export type Date = string;

/**
 * String value representing a datetime.
 */
export type Datetime = string;

/**
 * Decimal value.
 */
export type Decimal = number;

/**
 * String value representing an email address.
 */
export type Email = string;

/**
 * Integer value.
 */
export type Integer = number;

/**
 * String array that contains strings from a specific set of allowed values.
 */
export type Multiselect = Array<string>;

/**
 * Attribute key-value pairs associated with an object record.
 */
export interface OpportunityAttributes {
  /**
   * String value.
   */
  name: Text;

  /**
   * String value.
   */
  uniqueness_key: Text;

  /**
   * Composite object representing a currency value.
   */
  amount?: Currency;

  /**
   * Company associated with the opportunity.
   */
  company?: ReferenceByID | ReferenceByMatch | ReferenceByUpsert | null;

  /**
   * String value.
   */
  lead_source?: Text | null;

  /**
   * String value.
   */
  opportunity_type?: Text | null;

  /**
   * String value representing a datetime.
   */
  original_created_at?: Datetime | null;

  /**
   * Person associated with the opportunity.
   */
  person?: ReferenceByID | ReferenceByMatch | ReferenceByUpsert | null;

  /**
   * The user that owns the opportunity record.
   */
  record_owner?: ReferenceByID | ReferenceByMatch | ReferenceByUpsert | null;

  /**
   * String value.
   */
  stage?: Text | null;

  [k: string]:
    | Value
    | null
    | Text
    | Currency
    | ReferenceByID
    | ReferenceByMatch
    | ReferenceByUpsert
    | null
    | Datetime
    | null
    | undefined;
}

/**
 * Attribute key-value pairs associated with an object record.
 */
export interface PersonAttributes {
  /**
   * String value representing an email address.
   */
  email: Email;

  /**
   * Composite object representing a physical address.
   */
  address?: Address;

  /**
   * Company associated with the person.
   */
  company?: ReferenceByID | ReferenceByMatch | ReferenceByUpsert | null;

  /**
   * String value representing a phone number.
   */
  corporate_phone?: PhoneNumber | null;

  /**
   * Boolean value.
   */
  do_not_call?: Boolean | null;

  /**
   * Boolean value.
   */
  do_not_email?: Boolean | null;

  /**
   * Boolean value.
   */
  email_opt_out?: Boolean | null;

  /**
   * Boolean value.
   */
  eu_resident?: Boolean | null;

  /**
   * String value.
   */
  first_name?: Text | null;

  /**
   * String value representing a datetime.
   */
  last_activity_at?: Datetime | null;

  /**
   * String value.
   */
  last_name?: Text | null;

  /**
   * String value.
   */
  lead_source?: Text | null;

  /**
   * String value representing a web URL or internet domain.
   */
  linkedin_url?: URL | null;

  /**
   * String value representing a phone number.
   */
  mobile_phone?: PhoneNumber | null;

  /**
   * The user that owns the person record.
   */
  record_owner?: ReferenceByID | ReferenceByMatch | ReferenceByUpsert | null;

  /**
   * String value.
   */
  status?: Text | null;

  /**
   * String value.
   */
  title?: Text | null;

  /**
   * String value representing a phone number.
   */
  work_phone?: PhoneNumber | null;

  [k: string]:
    | Value
    | null
    | Email
    | Address
    | ReferenceByID
    | ReferenceByMatch
    | ReferenceByUpsert
    | null
    | PhoneNumber
    | null
    | Boolean
    | null
    | Text
    | null
    | Datetime
    | null
    | URL
    | null
    | undefined;
}

/**
 * String value representing a phone number.
 */
export type PhoneNumber = string;

/**
 * Object record with its associated metadata and attribute key-value pairs.
 */
export interface Record {
  /**
   * String UUIDv4 value.
   */
  id: Uuid;

  /**
   * Attribute key-value pairs associated with an object record.
   */
  attributes: RecordAttributes;

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

/**
 * Attribute key-value pairs associated with an object record.
 */
export type RecordAttributes = { [key: string]: Value | null };

/**
 * Reference to another object record by ID.
 *
 * This will find an existing record by its ID, and an error will be returned if
 * the record does not exist.
 */
export interface ReferenceByID {
  /**
   * String UUIDv4 value.
   */
  id: Uuid;
}

/**
 * Reference to another object record by match criteria.
 *
 * This will find an existing record using the provided match criteria, and `null`
 * will be returned if no match is found.
 */
export interface ReferenceByMatch {
  /**
   * The attribute values to match against to find an existing record.
   *
   * At least one unique attribute must be included to ensure that at most one record
   * is matched. Additional unique or non-unique attributes may also be included to
   * refine the matching criteria.
   */
  match: { [key: string]: unknown };
}

/**
 * Reference to another object record by performing a nested upsert.
 *
 * At least one of `create`, `create_or_update` or `create_or_update_if_empty` must
 * be provided, and all required attributes on the object must be included in at
 * least one of these properties.
 *
 * ## Precedence
 *
 * When the same attribute is specified in multiple properties, the values will be
 * applied in a specific order of precedence. If a record is being created, the
 * following order is used:
 *
 * 1. `create`
 * 2. `create_or_update`
 * 3. `create_or_update_if_empty`
 *
 * If an existing record is being updated, the following order is used:
 *
 * 1. `update`
 * 2. `create_or_update`
 * 3. `update_if_empty`
 * 4. `create_or_update_if_empty`
 */
export interface ReferenceByUpsert {
  /**
   * The attribute values to match against to find an existing record.
   *
   * At least one unique attribute must be included to ensure that at most one record
   * is matched. Additional unique or non-unique attributes may also be included to
   * refine the matching criteria.
   */
  match: { [key: string]: unknown };

  /**
   * The attribute values to use when creating a new record if no match is found.
   */
  create?: { [key: string]: unknown };

  /**
   * The attribute values to apply during both creation and update operations.
   */
  create_or_update?: { [key: string]: unknown };

  /**
   * The attribute values to apply during both creation and update-if-empty
   * operations.
   */
  create_or_update_if_empty?: { [key: string]: unknown };

  /**
   * The attribute values to use when updating an existing record if a match is
   * found.
   */
  update?: { [key: string]: unknown };

  /**
   * The attribute values to update when a matching record is found and the existing
   * attribute value on the record is `null`.
   */
  update_if_empty?: { [key: string]: unknown };
}

/**
 * String value that matches one of a specific set of allowed values.
 */
export type Select = string;

/**
 * String value.
 */
export type Text = string;

/**
 * String value representing a web URL or internet domain.
 */
export type URL = string;

/**
 * String UUIDv4 value.
 */
export type Uuid = string;

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
 * Composite object representing a physical address.
 */
export type Value =
  | Address
  | Boolean
  | Country
  | Currency
  | Date
  | Decimal
  | Multiselect
  | ReferenceByID
  | ReferenceByMatch
  | ReferenceByUpsert;

/**
 * Response for a successful create operation.
 */
export interface RecordCreateResponse {
  /**
   * Object record with its associated metadata and attribute key-value pairs.
   */
  data: Record;

  status: 'success';
}

/**
 * Response for a successful get operation.
 */
export interface RecordRetrieveResponse {
  /**
   * Object record with its associated metadata and attribute key-value pairs.
   */
  data: Record;

  status: 'success';
}

/**
 * Response for a successful update operation.
 */
export interface RecordUpdateResponse {
  /**
   * Object record with its associated metadata and attribute key-value pairs.
   */
  data: Record;

  status: 'success';
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
  /**
   * Object record with its associated metadata and attribute key-value pairs.
   */
  data: Record | null;

  status: 'success';
}

/**
 * Response for a successful update operation.
 */
export interface RecordUpsertResponse {
  /**
   * Object record with its associated metadata and attribute key-value pairs.
   */
  data: Record;

  status: 'success';
}

export interface RecordCreateParams {
  /**
   * Body param: Attribute key-value pairs associated with an object record.
   */
  data: RecordAttributes;

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
   * Body param: Attribute key-value pairs associated with an object record.
   */
  data: RecordAttributes;

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

export interface RecordDeleteParams {
  object_name: string;
}

export interface RecordFindUniqueParams {
  /**
   * Attribute key-value pairs associated with an object record.
   */
  match: RecordAttributes;
}

export interface RecordUpsertParams {
  /**
   * Body param: Attribute key-value pairs associated with an object record.
   */
  match: RecordAttributes;

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
   * Body param: Attribute key-value pairs associated with an object record.
   */
  create?: RecordAttributes;

  /**
   * Body param: Attribute key-value pairs associated with an object record.
   */
  create_or_update?: RecordAttributes;

  /**
   * Body param: Attribute key-value pairs associated with an object record.
   */
  create_or_update_if_empty?: RecordAttributes;

  /**
   * Body param: Attribute key-value pairs associated with an object record.
   */
  update?: RecordAttributes;

  /**
   * Body param: Attribute key-value pairs associated with an object record.
   */
  update_if_empty?: RecordAttributes;
}

export declare namespace Records {
  export {
    type Address as Address,
    type Boolean as Boolean,
    type CompanyAttributes as CompanyAttributes,
    type Country as Country,
    type Currency as Currency,
    type Date as Date,
    type Datetime as Datetime,
    type Decimal as Decimal,
    type Email as Email,
    type Integer as Integer,
    type Multiselect as Multiselect,
    type OpportunityAttributes as OpportunityAttributes,
    type PersonAttributes as PersonAttributes,
    type PhoneNumber as PhoneNumber,
    type Record as Record,
    type RecordAttributes as RecordAttributes,
    type ReferenceByID as ReferenceByID,
    type ReferenceByMatch as ReferenceByMatch,
    type ReferenceByUpsert as ReferenceByUpsert,
    type Select as Select,
    type Text as Text,
    type URL as URL,
    type Uuid as Uuid,
    type ValidationMode as ValidationMode,
    type Value as Value,
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
