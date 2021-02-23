export type JsonPrimatives = string | number | boolean | null;
export interface JsonObject extends Record<string, JsonValue> {}
export interface JsonArray extends Array<JsonValue> {}
export type JsonValue = JsonPrimatives | JsonObject | JsonArray;
