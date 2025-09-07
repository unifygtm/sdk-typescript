// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unify-mcp/filtering';
import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/objects/{object_name}',
  operationId: 'update_object',
};

export const tool: Tool = {
  name: 'update_objects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response for a successful update operation.',\n  properties: {\n    data: {\n      $ref: '#/$defs/u_object'\n    },\n    status: {\n      type: 'string',\n      enum: [        'success'\n      ]\n    }\n  },\n  required: [    'data',\n    'status'\n  ],\n  $defs: {\n    u_object: {\n      type: 'object',\n      properties: {\n        api_name: {\n          type: 'string',\n          description: 'This is the unique identifier for the object at the API level. It is unique\\nwithin Unify and cannot be changed.'\n        },\n        description: {\n          type: 'string',\n          description: 'This is a description of the object. It is not required but will be shown\\nin the UI to help understand the purpose of the object. Typically, this\\nshould be a short sentence or two explaining the object.'\n        },\n        display_name: {\n          type: 'string',\n          description: 'This is the user-facing object name shown within Unify. It is not required\\nto be unique within Unify and can be changed at any time.'\n        },\n        provider: {\n          type: 'string',\n          description: 'Represents who created and manages an object in Unify.\\n\\nIn most ways, all objects within the Unify platform behave the same way\\nregardless of whether they are defined by Unify or as custom objects by a\\nplugin or user. This includes the ability to define custom attributes and\\naccess records via API.\\n\\nHowever, there are some subtle distinctions that require differentiating\\nbetween these classifications of objects. This enumeration is used to\\nrepresent these distinctions.',\n          enum: [            'UNIFY',\n            'CUSTOMER'\n          ]\n        }\n      },\n      required: [        'api_name',\n        'description',\n        'display_name',\n        'provider'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      object_name: {
        type: 'string',
      },
      api_name: {
        type: 'string',
        description:
          'This is the unique identifier for the object at the API level. It is unique\nwithin Unify and cannot be changed.',
      },
      description: {
        type: 'string',
        description:
          'This is a description of the object. It is not required but will be shown\nin the UI to help understand the purpose of the object. Typically, this\nshould be a short sentence or two explaining the object.',
      },
      display_name: {
        type: 'string',
        description:
          'This is the user-facing object name shown within Unify. It is not required\nto be unique within Unify and can be changed at any time.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['object_name', 'api_name', 'description', 'display_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { object_name, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.objects.update(object_name, body)));
};

export default { metadata, tool, handler };
