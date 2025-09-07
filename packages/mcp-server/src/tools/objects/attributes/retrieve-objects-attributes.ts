// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects.attributes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/objects/{object_name}/attributes/{attribute_name}',
  operationId: 'get_object_attribute',
};

export const tool: Tool = {
  name: 'retrieve_objects_attributes',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      object_name: {
        type: 'string',
      },
      attribute_name: {
        type: 'string',
      },
    },
    required: ['object_name', 'attribute_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { attribute_name, ...body } = args as any;
  return asTextContentResult(await client.objects.attributes.retrieve(attribute_name, body));
};

export default { metadata, tool, handler };
