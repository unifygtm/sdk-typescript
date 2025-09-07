// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unify-mcp/filtering';
import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects.records',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/objects/{object_name}/records/{record_id}',
  operationId: 'update_object_record',
};

export const tool: Tool = {
  name: 'update_objects_records',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response for a successful update operation.',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'UUuid',\n          description: 'String UUIDv4 value.'\n        },\n        attributes: {\n          type: 'object',\n          description: 'Attribute values for the record. Each key is the API name of the attribute\\nand each value is the corresponding attribute value for the record.',\n          additionalProperties: true\n        },\n        created_at: {\n          type: 'string',\n          description: 'Date and time the record was created.',\n          format: 'date-time'\n        },\n        object: {\n          type: 'string',\n          description: 'The API name of the object this record is an instance of.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Date and time the record was last updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'attributes',\n        'created_at',\n        'object',\n        'updated_at'\n      ]\n    },\n    status: {\n      type: 'string',\n      enum: [        'success'\n      ]\n    }\n  },\n  required: [    'data',\n    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      object_name: {
        type: 'string',
      },
      record_id: {
        type: 'string',
      },
      data: {
        type: 'object',
        description: 'The attribute values to update in the record.',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['object_name', 'record_id', 'data'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { record_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.objects.records.update(record_id, body)),
  );
};

export default { metadata, tool, handler };
