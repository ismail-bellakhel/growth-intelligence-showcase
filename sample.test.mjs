import test from 'node:test';
import assert from 'node:assert/strict';
import {validateProvider} from './sample.mjs';
const valid={property_id:'123456',sync_frequency:'Manual'};
test('valid metadata passes and values are trimmed',()=>{
 const result=validateProvider('ga4',{...valid,property_id:' 123456 '});
 assert.deepEqual(result.errors,{});assert.equal(result.data.property_id,'123456');
});
test('credential fields are rejected and omitted from accepted data',()=>{
 const result=validateProvider('ga4',{...valid,access_token:'synthetic-placeholder'});
 assert.ok(result.errors.access_token);assert.equal(result.data.access_token,undefined);
});
test('measurement IDs are not property IDs',()=>assert.ok(validateProvider('ga4',{...valid,property_id:'G-EXAMPLE'}).errors.property_id));
test('unknown providers and invalid input fail validation',()=>{
 assert.ok(validateProvider('unknown',{}).errors.provider);
 assert.ok(validateProvider('ga4',[]).errors.configuration);
});
test('required fields and select choices are checked',()=>{
 assert.ok(validateProvider('ga4',{}).errors.property_id);
 assert.ok(validateProvider('ga4',{...valid,sync_frequency:'Every second'}).errors.sync_frequency);
});
