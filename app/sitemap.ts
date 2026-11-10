import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','technology/','about/','research/','contact/','privacy/'].map(path=>({url:`https://safesight.ca/${path}`}))}
