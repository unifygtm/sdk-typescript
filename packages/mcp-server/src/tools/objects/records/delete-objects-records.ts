// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unify-mcp/filtering';
import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects.records',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/objects/{object_name}/records/{record_id}',
  operationId: 'delete_object_record',
};

export const tool: Tool = {
  name: 'delete_objects_records',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response for a successful delete operation.',\n  properties: {\n    status: {\n      type: 'string',\n      enum: [        'success'\n      ]\n    }\n  },\n  required: [    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      object_name: {
        type: 'string',
      },
      record_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['object_name', 'record_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { record_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.objects.records.delete(record_id, body)),
  );
};

export default { metadata, tool, handler };
