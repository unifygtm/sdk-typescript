// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_objects from './objects/create-objects';
import retrieve_objects from './objects/retrieve-objects';
import update_objects from './objects/update-objects';
import list_objects from './objects/list-objects';
import delete_objects from './objects/delete-objects';
import find_unique_objects from './objects/find-unique-objects';
import create_objects_attributes from './objects/attributes/create-objects-attributes';
import retrieve_objects_attributes from './objects/attributes/retrieve-objects-attributes';
import update_objects_attributes from './objects/attributes/update-objects-attributes';
import list_objects_attributes from './objects/attributes/list-objects-attributes';
import delete_objects_attributes from './objects/attributes/delete-objects-attributes';
import create_attributes_objects_options from './objects/attributes/options/create-attributes-objects-options';
import retrieve_attributes_objects_options from './objects/attributes/options/retrieve-attributes-objects-options';
import update_attributes_objects_options from './objects/attributes/options/update-attributes-objects-options';
import list_attributes_objects_options from './objects/attributes/options/list-attributes-objects-options';
import delete_attributes_objects_options from './objects/attributes/options/delete-attributes-objects-options';
import create_objects_records from './objects/records/create-objects-records';
import retrieve_objects_records from './objects/records/retrieve-objects-records';
import update_objects_records from './objects/records/update-objects-records';
import list_objects_records from './objects/records/list-objects-records';
import delete_objects_records from './objects/records/delete-objects-records';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_objects);
addEndpoint(retrieve_objects);
addEndpoint(update_objects);
addEndpoint(list_objects);
addEndpoint(delete_objects);
addEndpoint(find_unique_objects);
addEndpoint(create_objects_attributes);
addEndpoint(retrieve_objects_attributes);
addEndpoint(update_objects_attributes);
addEndpoint(list_objects_attributes);
addEndpoint(delete_objects_attributes);
addEndpoint(create_attributes_objects_options);
addEndpoint(retrieve_attributes_objects_options);
addEndpoint(update_attributes_objects_options);
addEndpoint(list_attributes_objects_options);
addEndpoint(delete_attributes_objects_options);
addEndpoint(create_objects_records);
addEndpoint(retrieve_objects_records);
addEndpoint(update_objects_records);
addEndpoint(list_objects_records);
addEndpoint(delete_objects_records);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
