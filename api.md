# Data

## Objects

Types:

- <code><a href="./src/resources/data/objects.ts">UObject</a></code>
- <code><a href="./src/resources/data/objects.ts">ObjectCreateResponse</a></code>
- <code><a href="./src/resources/data/objects.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/data/objects.ts">ObjectUpdateResponse</a></code>
- <code><a href="./src/resources/data/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/data/objects.ts">ObjectDeleteResponse</a></code>

Methods:

- <code title="post /data/v1/objects">client.data.objects.<a href="./src/resources/data/objects.ts">create</a>({ ...params }) -> ObjectCreateResponse</code>
- <code title="get /data/v1/objects/{object_name}">client.data.objects.<a href="./src/resources/data/objects.ts">retrieve</a>(objectName) -> ObjectRetrieveResponse</code>
- <code title="patch /data/v1/objects/{object_name}">client.data.objects.<a href="./src/resources/data/objects.ts">update</a>(objectName, { ...params }) -> ObjectUpdateResponse</code>
- <code title="get /data/v1/objects">client.data.objects.<a href="./src/resources/data/objects.ts">list</a>() -> ObjectListResponse</code>
- <code title="delete /data/v1/objects/{object_name}">client.data.objects.<a href="./src/resources/data/objects.ts">delete</a>(objectName) -> ObjectDeleteResponse</code>

## Attributes

Types:

- <code><a href="./src/resources/data/attributes/attributes.ts">UAttribute</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">UAttributeOptionUpdateItem</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">UReferenceCardinality</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">URelatedReferenceAttribute</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">AttributeCreateResponse</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">AttributeRetrieveResponse</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">AttributeUpdateResponse</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">AttributeListResponse</a></code>
- <code><a href="./src/resources/data/attributes/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /data/v1/objects/{object_name}/attributes">client.data.attributes.<a href="./src/resources/data/attributes/attributes.ts">create</a>(objectName, { ...params }) -> AttributeCreateResponse</code>
- <code title="get /data/v1/objects/{object_name}/attributes/{attribute_name}">client.data.attributes.<a href="./src/resources/data/attributes/attributes.ts">retrieve</a>(attributeName, { ...params }) -> AttributeRetrieveResponse</code>
- <code title="patch /data/v1/objects/{object_name}/attributes/{attribute_name}">client.data.attributes.<a href="./src/resources/data/attributes/attributes.ts">update</a>(attributeName, { ...params }) -> AttributeUpdateResponse</code>
- <code title="get /data/v1/objects/{object_name}/attributes">client.data.attributes.<a href="./src/resources/data/attributes/attributes.ts">list</a>(objectName) -> AttributeListResponse</code>
- <code title="delete /data/v1/objects/{object_name}/attributes/{attribute_name}">client.data.attributes.<a href="./src/resources/data/attributes/attributes.ts">delete</a>(attributeName, { ...params }) -> AttributeDeleteResponse</code>

### Options

Types:

- <code><a href="./src/resources/data/attributes/options.ts">UAttributeOption</a></code>
- <code><a href="./src/resources/data/attributes/options.ts">OptionCreateResponse</a></code>
- <code><a href="./src/resources/data/attributes/options.ts">OptionRetrieveResponse</a></code>
- <code><a href="./src/resources/data/attributes/options.ts">OptionUpdateResponse</a></code>
- <code><a href="./src/resources/data/attributes/options.ts">OptionListResponse</a></code>
- <code><a href="./src/resources/data/attributes/options.ts">OptionDeleteResponse</a></code>

Methods:

- <code title="post /data/v1/objects/{object_name}/attributes/{attribute_name}/options">client.data.attributes.options.<a href="./src/resources/data/attributes/options.ts">create</a>(attributeName, { ...params }) -> OptionCreateResponse</code>
- <code title="get /data/v1/objects/{object_name}/attributes/{attribute_name}/options/{option_name}">client.data.attributes.options.<a href="./src/resources/data/attributes/options.ts">retrieve</a>(optionName, { ...params }) -> OptionRetrieveResponse</code>
- <code title="patch /data/v1/objects/{object_name}/attributes/{attribute_name}/options/{option_name}">client.data.attributes.options.<a href="./src/resources/data/attributes/options.ts">update</a>(optionName, { ...params }) -> OptionUpdateResponse</code>
- <code title="get /data/v1/objects/{object_name}/attributes/{attribute_name}/options">client.data.attributes.options.<a href="./src/resources/data/attributes/options.ts">list</a>(attributeName, { ...params }) -> OptionListResponse</code>
- <code title="delete /data/v1/objects/{object_name}/attributes/{attribute_name}/options/{option_name}">client.data.attributes.options.<a href="./src/resources/data/attributes/options.ts">delete</a>(optionName, { ...params }) -> OptionDeleteResponse</code>

## Records

Types:

- <code><a href="./src/resources/data/records.ts">Address</a></code>
- <code><a href="./src/resources/data/records.ts">Boolean</a></code>
- <code><a href="./src/resources/data/records.ts">CompanyAttributes</a></code>
- <code><a href="./src/resources/data/records.ts">Country</a></code>
- <code><a href="./src/resources/data/records.ts">Currency</a></code>
- <code><a href="./src/resources/data/records.ts">Date</a></code>
- <code><a href="./src/resources/data/records.ts">Datetime</a></code>
- <code><a href="./src/resources/data/records.ts">Decimal</a></code>
- <code><a href="./src/resources/data/records.ts">Email</a></code>
- <code><a href="./src/resources/data/records.ts">Integer</a></code>
- <code><a href="./src/resources/data/records.ts">Multiselect</a></code>
- <code><a href="./src/resources/data/records.ts">OpportunityAttributes</a></code>
- <code><a href="./src/resources/data/records.ts">PersonAttributes</a></code>
- <code><a href="./src/resources/data/records.ts">PhoneNumber</a></code>
- <code><a href="./src/resources/data/records.ts">Record</a></code>
- <code><a href="./src/resources/data/records.ts">RecordAttributes</a></code>
- <code><a href="./src/resources/data/records.ts">ReferenceByID</a></code>
- <code><a href="./src/resources/data/records.ts">ReferenceByMatch</a></code>
- <code><a href="./src/resources/data/records.ts">ReferenceByUpsert</a></code>
- <code><a href="./src/resources/data/records.ts">Select</a></code>
- <code><a href="./src/resources/data/records.ts">Text</a></code>
- <code><a href="./src/resources/data/records.ts">URL</a></code>
- <code><a href="./src/resources/data/records.ts">Uuid</a></code>
- <code><a href="./src/resources/data/records.ts">ValidationMode</a></code>
- <code><a href="./src/resources/data/records.ts">Value</a></code>
- <code><a href="./src/resources/data/records.ts">RecordCreateResponse</a></code>
- <code><a href="./src/resources/data/records.ts">RecordRetrieveResponse</a></code>
- <code><a href="./src/resources/data/records.ts">RecordUpdateResponse</a></code>
- <code><a href="./src/resources/data/records.ts">RecordDeleteResponse</a></code>
- <code><a href="./src/resources/data/records.ts">RecordFindUniqueResponse</a></code>
- <code><a href="./src/resources/data/records.ts">RecordUpsertResponse</a></code>

Methods:

- <code title="post /data/v1/objects/{object_name}/records">client.data.records.<a href="./src/resources/data/records.ts">create</a>(objectName, { ...params }) -> RecordCreateResponse</code>
- <code title="get /data/v1/objects/{object_name}/records/{record_id}">client.data.records.<a href="./src/resources/data/records.ts">retrieve</a>(recordID, { ...params }) -> RecordRetrieveResponse</code>
- <code title="patch /data/v1/objects/{object_name}/records/{record_id}">client.data.records.<a href="./src/resources/data/records.ts">update</a>(recordID, { ...params }) -> RecordUpdateResponse</code>
- <code title="delete /data/v1/objects/{object_name}/records/{record_id}">client.data.records.<a href="./src/resources/data/records.ts">delete</a>(recordID, { ...params }) -> RecordDeleteResponse</code>
- <code title="post /data/v1/objects/{object_name}/records/find-unique">client.data.records.<a href="./src/resources/data/records.ts">findUnique</a>(objectName, { ...params }) -> RecordFindUniqueResponse</code>
- <code title="post /data/v1/objects/{object_name}/records/upsert">client.data.records.<a href="./src/resources/data/records.ts">upsert</a>(objectName, { ...params }) -> RecordUpsertResponse</code>
