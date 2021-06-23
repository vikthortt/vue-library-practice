import Vue, { PluginFunction, VueConstructor } from 'vue';


declare const LibraryExample: PluginFunction<any>;
export default LibraryExample;

export const Link: VueConstructor<Vue>;
export const TextInput: VueConstructor<Vue>;
export const NumberInput: VueConstructor<Vue>;
