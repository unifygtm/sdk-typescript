// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unify from 'unify';

const client = new Unify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource options', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.objects.attributes.options.create('attribute_name', {
      object_name: 'object_name',
      api_name: 'api_name',
      display_name: 'display_name',
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
    const response = await client.objects.attributes.options.create('attribute_name', {
      object_name: 'object_name',
      api_name: 'api_name',
      display_name: 'display_name',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.objects.attributes.options.retrieve('option_name', {
      object_name: 'object_name',
      attribute_name: 'attribute_name',
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
    const response = await client.objects.attributes.options.retrieve('option_name', {
      object_name: 'object_name',
      attribute_name: 'attribute_name',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.objects.attributes.options.update('option_name', {
      object_name: 'object_name',
      attribute_name: 'attribute_name',
      api_name: 'api_name',
      display_name: 'display_name',
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
    const response = await client.objects.attributes.options.update('option_name', {
      object_name: 'object_name',
      attribute_name: 'attribute_name',
      api_name: 'api_name',
      display_name: 'display_name',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.objects.attributes.options.list('attribute_name', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.objects.attributes.options.list('attribute_name', {
      object_name: 'object_name',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.objects.attributes.options.delete('option_name', {
      object_name: 'object_name',
      attribute_name: 'attribute_name',
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
    const response = await client.objects.attributes.options.delete('option_name', {
      object_name: 'object_name',
      attribute_name: 'attribute_name',
    });
  });
});
