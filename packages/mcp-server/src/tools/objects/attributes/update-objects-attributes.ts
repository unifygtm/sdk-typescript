// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unify-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unify from 'unify';

export const metadata: Metadata = {
  resource: 'objects.attributes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/objects/{object_name}/attributes/{attribute_name}',
  operationId: 'update_object_attribute',
};

export const tool: Tool = {
  name: 'update_objects_attributes',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          options: {
            type: 'array',
            description: 'The list of options for the attribute.',
            items: {
              $ref: '#/$defs/u_attribute_option',
            },
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'options',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          reference_to_object: {
            type: 'string',
            description: 'The API name of the object that this attribute references.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'reference_to_object',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          options: {
            type: 'array',
            description: 'The list of options for the attribute.',
            items: {
              $ref: '#/$defs/u_attribute_option',
            },
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'options',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
      {
        type: 'object',
        properties: {
          object_name: {
            type: 'string',
          },
          attribute_name: {
            type: 'string',
          },
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute at the API level. It is\nunique within the object and cannot be changed.',
          },
          description: {
            type: 'string',
            description:
              'This is a description of the attribute. It is not required but will be\nshown in the UI to help understand the purpose of the object. Typically,\nthis should be a short sentence or two explaining the attribute.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute name that will be shown within Unify. It\nis unique within the object and can be changed at any time.',
          },
          is_required: {
            type: 'boolean',
            description: 'Whether the attribute is required.',
          },
          is_unique: {
            type: 'boolean',
            description: 'Whether the attribute is unique.',
          },
          type: {
            $ref: '#/$defs/u_value_type',
          },
        },
        required: [
          'object_name',
          'attribute_name',
          'api_name',
          'description',
          'display_name',
          'is_required',
          'is_unique',
          'type',
        ],
      },
    ],
    $defs: {
      u_value_type: {
        type: 'string',
        description: 'Supported object attribute value type.',
        enum: [
          'Address',
          'Boolean',
          'Country',
          'Currency',
          'Date',
          'DateTime',
          'Decimal',
          'EmailAddress',
          'Integer',
          'MultiSelect',
          'PhoneNumber',
          'Reference',
          'Select',
          'Text',
          'Url',
          'Uuid',
        ],
      },
      u_attribute_option: {
        type: 'object',
        description: 'Definition of an option for a `SELECT` or `MULTI_SELECT` attribute.',
        properties: {
          api_name: {
            type: 'string',
            description:
              'This is the unique identifier for the attribute option at the API level. It\nis unique within the attribute and cannot be changed.',
          },
          display_name: {
            type: 'string',
            description:
              'This is the user-facing attribute option name that will be shown within\nUnify. It is unique within the object and can be changed at any time.',
          },
        },
        required: ['api_name', 'display_name'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unify, args: Record<string, unknown> | undefined) => {
  const { attribute_name, ...body } = args as any;
  return asTextContentResult(await client.objects.attributes.update(attribute_name, body));
};

export default { metadata, tool, handler };
