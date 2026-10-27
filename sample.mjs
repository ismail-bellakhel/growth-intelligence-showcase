// JavaScript adaptation of selected-source.ts for this dependency-free preview.
import { providers } from './providers.mjs';
export {providers};
export function validateProvider(id,value) {
 const provider=providers.find(p=>p.id===id);const errors={};const data={};
 if(!provider)return {data,errors:{provider:'Unknown provider'}};
 if(!value||typeof value!=='object'||Array.isArray(value))return {data,errors:{configuration:'Configuration must be an object'}};
 const input=value;
 for(const key of Object.keys(input))if(!provider.fields.some(f=>f.key===key))errors[key]='Unsupported field. Credentials cannot be saved in this form.';
 for(const f of provider.fields){
  const v=input[f.key];if(v!==undefined&&typeof v!=='string'){errors[f.key]='Enter text';continue;}const s=(v||'').trim();data[f.key]=s;
  if(f.required&&!s){errors[f.key]=`${f.label} is required`;continue;}if(!s)continue;
  if(s.length>500){errors[f.key]='Use at most 500 characters';continue;}
  if(f.pattern&&!new RegExp(f.pattern).test(s))errors[f.key]=`Check the format of ${f.label}`;
  if(f.options&&!f.options.includes(s))errors[f.key]='Choose an available option';
  if(f.type==='number'&&(!Number.isFinite(Number(s))||Number(s)<0))errors[f.key]='Enter a non-negative number';
  if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))errors[f.key]='Enter a valid email address';
  if(f.type==='url'){try{const u=new URL(s);if(!['https:','http:'].includes(u.protocol)||u.username||u.password||u.search||u.hash)throw 0;}catch{errors[f.key]='Use a website URL without credentials, query parameters or fragments';}}
 }
 if(id==='postgresql'&&data.port&&(Number(data.port)<1||Number(data.port)>65535))errors.port='Use a port from 1 to 65535';
 if(id==='email'&&data.recipients&&!data.recipients.split(',').every(s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())))errors.recipients='Enter comma-separated email addresses';
 if(id==='search_console'&&data.property&&!/^sc-domain:[a-z0-9.-]+$/i.test(data.property)&&!/^https?:\/\//.test(data.property))errors.property='Use sc-domain:yourdomain.com or a URL-prefix property';
 return {data,errors};
}
