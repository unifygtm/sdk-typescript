// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecordsAPI from './records';
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
export interface UAddress {
  /**
   * State, province, region, or territory.
   */
  administrativeArea?: string;

  /**
   * Composite object representing a country.
   */
  country?: UCountry;

  /**
   * Neighborhood, borough, district, or city sector.
   */
  dependentLocality?: string;

  /**
   * City, town, or village.
   */
  locality?: string;

  /**
   * Postal code or ZIP code.
   */
  postalCode?: string;

  /**
   * Street number or building name.
   */
  premise?: string;

  /**
   * County or other secondary governmental division of an administrative area.
   */
  subAdministrativeArea?: string;

  /**
   * Apartment, suite, office number, or other secondary unit designator.
   */
  subPremise?: string;

  /**
   * Street name with elements such as street type or direction.
   */
  thoroughfare?: string;
}

/**
 * Boolean value.
 */
export type UBoolean = boolean;

/**
 * Composite object representing a country.
 */
export interface UCountry {
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
export interface UCurrency {
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
export type UDate = string;

/**
 * String value representing a datetime.
 */
export type UDatetime = string;

/**
 * Decimal value.
 */
export type UDecimal = number;

/**
 * String value representing an email address.
 */
export type UEmail = string;

/**
 * Integer value.
 */
export type UInteger = number;

/**
 * String array that contains strings from a specific set of allowed values.
 */
export type UMultiselect = Array<string>;

/**
 * String value representing a phone number.
 */
export type UPhoneNumber = string;

/**
 * Reference to another object record by ID.
 *
 * This will find an existing record by its ID, and an error will be returned if
 * the record does not exist.
 */
export interface UReferenceByID {
  /**
   * String UUIDv4 value.
   */
  id: UUuid;
}

/**
 * Reference to another object record by match criteria.
 *
 * This will find an existing record using the provided match criteria, and `null`
 * will be returned if no match is found.
 */
export interface UReferenceByMatch {
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
export interface UReferenceByUpsert {
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
export type USelect = string;

/**
 * String value.
 */
export type UText = string;

/**
 * String value representing a web URL or internet domain.
 */
export type UURL = string;

/**
 * String UUIDv4 value.
 */
export type UUuid = string;

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
    id: RecordsAPI.UUuid;

    /**
     * Attribute values for the record. Each key is the API name of the attribute and
     * each value is the corresponding attribute value for the record.
     */
    attributes: {
      [key: string]:
        | RecordsAPI.UAddress
        | RecordsAPI.UBoolean
        | RecordsAPI.UCountry
        | RecordsAPI.UCurrency
        | RecordsAPI.UDate
        | RecordsAPI.UDecimal
        | RecordsAPI.UMultiselect
        | RecordsAPI.UReferenceByID
        | RecordsAPI.UReferenceByMatch
        | RecordsAPI.UReferenceByUpsert
        | null;
    };

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
    id: RecordsAPI.UUuid;

    /**
     * Attribute values for the record. Each key is the API name of the attribute and
     * each value is the corresponding attribute value for the record.
     */
    attributes: {
      [key: string]:
        | RecordsAPI.UAddress
        | RecordsAPI.UBoolean
        | RecordsAPI.UCountry
        | RecordsAPI.UCurrency
        | RecordsAPI.UDate
        | RecordsAPI.UDecimal
        | RecordsAPI.UMultiselect
        | RecordsAPI.UReferenceByID
        | RecordsAPI.UReferenceByMatch
        | RecordsAPI.UReferenceByUpsert
        | null;
    };

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
    id: RecordsAPI.UUuid;

    /**
     * Attribute values for the record. Each key is the API name of the attribute and
     * each value is the corresponding attribute value for the record.
     */
    attributes: {
      [key: string]:
        | RecordsAPI.UAddress
        | RecordsAPI.UBoolean
        | RecordsAPI.UCountry
        | RecordsAPI.UCurrency
        | RecordsAPI.UDate
        | RecordsAPI.UDecimal
        | RecordsAPI.UMultiselect
        | RecordsAPI.UReferenceByID
        | RecordsAPI.UReferenceByMatch
        | RecordsAPI.UReferenceByUpsert
        | null;
    };

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
    id: RecordsAPI.UUuid;

    /**
     * Attribute values for the record. Each key is the API name of the attribute and
     * each value is the corresponding attribute value for the record.
     */
    attributes: {
      [key: string]:
        | RecordsAPI.UAddress
        | RecordsAPI.UBoolean
        | RecordsAPI.UCountry
        | RecordsAPI.UCurrency
        | RecordsAPI.UDate
        | RecordsAPI.UDecimal
        | RecordsAPI.UMultiselect
        | RecordsAPI.UReferenceByID
        | RecordsAPI.UReferenceByMatch
        | RecordsAPI.UReferenceByUpsert
        | null;
    };

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
    id: RecordsAPI.UUuid;

    /**
     * Attribute values for the record. Each key is the API name of the attribute and
     * each value is the corresponding attribute value for the record.
     */
    attributes: {
      [key: string]:
        | RecordsAPI.UAddress
        | RecordsAPI.UBoolean
        | RecordsAPI.UCountry
        | RecordsAPI.UCurrency
        | RecordsAPI.UDate
        | RecordsAPI.UDecimal
        | RecordsAPI.UMultiselect
        | RecordsAPI.UReferenceByID
        | RecordsAPI.UReferenceByMatch
        | RecordsAPI.UReferenceByUpsert
        | null;
    };

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
  data: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };

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
  data: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };

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
   * The attribute values to match against to find an existing record.
   *
   * At least one unique attribute must be included to ensure that at most one record
   * is matched. Additional unique or non-unique attributes may also be included to
   * refine the matching criteria.
   */
  match: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert
      | null;
  };
}

export interface RecordUpsertParams {
  /**
   * Body param: The attribute values to match against to find an existing record.
   *
   * At least one unique attribute must be included to ensure that at most one record
   * is matched. Additional unique or non-unique attributes may also be included to
   * refine the matching criteria.
   */
  match: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert
      | null;
  };

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
  create?: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };

  /**
   * Body param: The attribute values to apply during both creation and update
   * operations.
   */
  create_or_update?: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };

  /**
   * Body param: The attribute values to apply during both creation and
   * update-if-empty operations.
   */
  create_or_update_if_empty?: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };

  /**
   * Body param: The attribute values to use when updating an existing record if a
   * match is found.
   */
  update?: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };

  /**
   * Body param: The attribute values to update when a matching record is found and
   * the existing attribute value on the record is `null`.
   */
  update_if_empty?: {
    [key: string]:
      | UAddress
      | UBoolean
      | UCountry
      | UCurrency
      | UDate
      | UDecimal
      | UMultiselect
      | UReferenceByID
      | UReferenceByMatch
      | UReferenceByUpsert;
  };
}

export declare namespace Records {
  export {
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
