// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Unify } from '../client';

export abstract class APIResource {
  protected _client: Unify;

  constructor(client: Unify) {
    this._client = client;
  }
}
