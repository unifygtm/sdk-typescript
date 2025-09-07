// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unify-mcp/filtering';
import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects.attributes.options',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/objects/{object_name}/attributes/{attribute_name}/options',
  operationId: 'list_object_attribute_options',
};

export const tool: Tool = {
  name: 'list_attributes_objects_options',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response for a successful list operation.',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/u_attribute_option'\n      }\n    },\n    status: {\n      type: 'string',\n      enum: [        'success'\n      ]\n    }\n  },\n  required: [    'data',\n    'status'\n  ],\n  $defs: {\n    u_attribute_option: {\n      type: 'object',\n      description: 'Definition of an option for a `SELECT` or `MULTI_SELECT` attribute.',\n      properties: {\n        api_name: {\n          type: 'string',\n          description: 'This is the unique identifier for the attribute option at the API level. It\\nis unique within the attribute and cannot be changed.'\n        },\n        display_name: {\n          type: 'string',\n          description: 'This is the user-facing attribute option name that will be shown within\\nUnify. It is unique within the object and can be changed at any time.'\n        }\n      },\n      required: [        'api_name',\n        'display_name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      object_name: {
        type: 'string',
      },
      attribute_name: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['object_name', 'attribute_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { attribute_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.objects.attributes.options.list(attribute_name, body)),
  );
};

export default { metadata, tool, handler };
