# Objects

Types:

- <code><a href="./src/resources/objects/objects.ts">UObject</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectCreateResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectUpdateResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectFindUniqueResponse</a></code>

Methods:

- <code title="post /objects">client.objects.<a href="./src/resources/objects/objects.ts">create</a>({ ...params }) -> ObjectCreateResponse</code>
- <code title="get /objects/{object_name}">client.objects.<a href="./src/resources/objects/objects.ts">retrieve</a>(objectName) -> ObjectRetrieveResponse</code>
- <code title="put /objects/{object_name}">client.objects.<a href="./src/resources/objects/objects.ts">update</a>(objectName, { ...params }) -> ObjectUpdateResponse</code>
- <code title="get /objects">client.objects.<a href="./src/resources/objects/objects.ts">list</a>() -> ObjectListResponse</code>
- <code title="delete /objects/{object_name}">client.objects.<a href="./src/resources/objects/objects.ts">delete</a>(objectName) -> ObjectDeleteResponse</code>
- <code title="post /objects/{object_name}/find-unique">client.objects.<a href="./src/resources/objects/objects.ts">findUnique</a>(objectName, { ...params }) -> ObjectFindUniqueResponse</code>

## Attributes

Types:

- <code><a href="./src/resources/objects/attributes/attributes.ts">UAttribute</a></code>
- <code><a href="./src/resources/objects/attributes/attributes.ts">UValueType</a></code>
- <code><a href="./src/resources/objects/attributes/attributes.ts">AttributeCreateResponse</a></code>
- <code><a href="./src/resources/objects/attributes/attributes.ts">AttributeRetrieveResponse</a></code>
- <code><a href="./src/resources/objects/attributes/attributes.ts">AttributeUpdateResponse</a></code>
- <code><a href="./src/resources/objects/attributes/attributes.ts">AttributeListResponse</a></code>
- <code><a href="./src/resources/objects/attributes/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /objects/{object_name}/attributes">client.objects.attributes.<a href="./src/resources/objects/attributes/attributes.ts">create</a>(objectName, { ...params }) -> AttributeCreateResponse</code>
- <code title="get /objects/{object_name}/attributes/{attribute_name}">client.objects.attributes.<a href="./src/resources/objects/attributes/attributes.ts">retrieve</a>(attributeName, { ...params }) -> AttributeRetrieveResponse</code>
- <code title="put /objects/{object_name}/attributes/{attribute_name}">client.objects.attributes.<a href="./src/resources/objects/attributes/attributes.ts">update</a>(attributeName, { ...params }) -> AttributeUpdateResponse</code>
- <code title="get /objects/{object_name}/attributes">client.objects.attributes.<a href="./src/resources/objects/attributes/attributes.ts">list</a>(objectName) -> AttributeListResponse</code>
- <code title="delete /objects/{object_name}/attributes/{attribute_name}">client.objects.attributes.<a href="./src/resources/objects/attributes/attributes.ts">delete</a>(attributeName, { ...params }) -> AttributeDeleteResponse</code>

### Options

Types:

- <code><a href="./src/resources/objects/attributes/options.ts">UAttributeOption</a></code>
- <code><a href="./src/resources/objects/attributes/options.ts">OptionCreateResponse</a></code>
- <code><a href="./src/resources/objects/attributes/options.ts">OptionRetrieveResponse</a></code>
- <code><a href="./src/resources/objects/attributes/options.ts">OptionUpdateResponse</a></code>
- <code><a href="./src/resources/objects/attributes/options.ts">OptionListResponse</a></code>
- <code><a href="./src/resources/objects/attributes/options.ts">OptionDeleteResponse</a></code>

Methods:

- <code title="post /objects/{object_name}/attributes/{attribute_name}/options">client.objects.attributes.options.<a href="./src/resources/objects/attributes/options.ts">create</a>(attributeName, { ...params }) -> OptionCreateResponse</code>
- <code title="get /objects/{object_name}/attributes/{attribute_name}/options/{option_name}">client.objects.attributes.options.<a href="./src/resources/objects/attributes/options.ts">retrieve</a>(optionName, { ...params }) -> OptionRetrieveResponse</code>
- <code title="put /objects/{object_name}/attributes/{attribute_name}/options/{option_name}">client.objects.attributes.options.<a href="./src/resources/objects/attributes/options.ts">update</a>(optionName, { ...params }) -> OptionUpdateResponse</code>
- <code title="get /objects/{object_name}/attributes/{attribute_name}/options">client.objects.attributes.options.<a href="./src/resources/objects/attributes/options.ts">list</a>(attributeName, { ...params }) -> OptionListResponse</code>
- <code title="delete /objects/{object_name}/attributes/{attribute_name}/options/{option_name}">client.objects.attributes.options.<a href="./src/resources/objects/attributes/options.ts">delete</a>(optionName, { ...params }) -> OptionDeleteResponse</code>

## Records

Types:

- <code><a href="./src/resources/objects/records.ts">RecordCreateResponse</a></code>
- <code><a href="./src/resources/objects/records.ts">RecordRetrieveResponse</a></code>
- <code><a href="./src/resources/objects/records.ts">RecordUpdateResponse</a></code>
- <code><a href="./src/resources/objects/records.ts">RecordListResponse</a></code>
- <code><a href="./src/resources/objects/records.ts">RecordDeleteResponse</a></code>

Methods:

- <code title="post /objects/{object_name}/records">client.objects.records.<a href="./src/resources/objects/records.ts">create</a>(objectName, { ...params }) -> RecordCreateResponse</code>
- <code title="get /objects/{object_name}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records.ts">retrieve</a>(recordID, { ...params }) -> RecordRetrieveResponse</code>
- <code title="put /objects/{object_name}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records.ts">update</a>(recordID, { ...params }) -> RecordUpdateResponse</code>
- <code title="get /objects/{object_name}/records">client.objects.records.<a href="./src/resources/objects/records.ts">list</a>(objectName, { ...params }) -> RecordListResponse</code>
- <code title="delete /objects/{object_name}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records.ts">delete</a>(recordID, { ...params }) -> RecordDeleteResponse</code>
