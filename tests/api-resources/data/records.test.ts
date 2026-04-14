// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unify from '@unifygtm/sdk';

const client = new Unify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource records', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.data.records.create('object_name', { data: { foo: {} } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.data.records.create('object_name', {
      data: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      validation_mode: 'strict',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.data.records.retrieve('record_id', { object_name: 'object_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.data.records.retrieve('record_id', { object_name: 'object_name' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.data.records.update('record_id', {
      object_name: 'object_name',
      data: { foo: {} },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.data.records.update('record_id', {
      object_name: 'object_name',
      data: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      validation_mode: 'strict',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.data.records.delete('record_id', { object_name: 'object_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.data.records.delete('record_id', { object_name: 'object_name' });
  });

  // Mock server tests are disabled
  test.skip('findUnique: only required params', async () => {
    const responsePromise = client.data.records.findUnique('object_name', { match: { foo: {} } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('findUnique: required and optional params', async () => {
    const response = await client.data.records.findUnique('object_name', {
      match: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.data.records.upsert('object_name', { match: { foo: {} } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.data.records.upsert('object_name', {
      match: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      validation_mode: 'strict',
      create: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      create_or_update: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      create_or_update_if_empty: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      update: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
      update_if_empty: {
        foo: {
          administrativeArea: 'administrativeArea',
          country: { code: 'AD', name: 'name' },
          dependentLocality: 'dependentLocality',
          locality: 'locality',
          postalCode: 'postalCode',
          premise: 'premise',
          subAdministrativeArea: 'subAdministrativeArea',
          subPremise: 'subPremise',
          thoroughfare: 'thoroughfare',
        },
      },
    });
  });
});
