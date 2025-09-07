// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unify from 'unify';

const client = new Unify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.objects.attributes.create('object_name', {
      api_name: 'api_name',
      description: 'description',
      display_name: 'display_name',
      is_required: true,
      is_unique: true,
      type: 'Address',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.objects.attributes.create('object_name', {
      api_name: 'api_name',
      description: 'description',
      display_name: 'display_name',
      is_required: true,
      is_unique: true,
      type: 'Address',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.objects.attributes.retrieve('attribute_name', {
      object_name: 'object_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.objects.attributes.retrieve('attribute_name', {
      object_name: 'object_name',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.objects.attributes.update('attribute_name', {
      object_name: 'object_name',
      api_name: 'api_name',
      description: 'description',
      display_name: 'display_name',
      is_required: true,
      is_unique: true,
      type: 'Address',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.objects.attributes.update('attribute_name', {
      object_name: 'object_name',
      api_name: 'api_name',
      description: 'description',
      display_name: 'display_name',
      is_required: true,
      is_unique: true,
      type: 'Address',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.objects.attributes.list('object_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.objects.attributes.delete('attribute_name', {
      object_name: 'object_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.objects.attributes.delete('attribute_name', { object_name: 'object_name' });
  });
});
