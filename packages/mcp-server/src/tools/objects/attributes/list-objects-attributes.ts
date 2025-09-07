// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects.attributes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/objects/{object_name}/attributes',
  operationId: 'list_object_attributes',
};

export const tool: Tool = {
  name: 'list_objects_attributes',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      object_name: {
        type: 'string',
      },
    },
    required: ['object_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { object_name, ...body } = args as any;
  return asTextContentResult(await client.objects.attributes.list(object_name));
};

export default { metadata, tool, handler };
