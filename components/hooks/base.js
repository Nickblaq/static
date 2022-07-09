import Airtable from 'airtable'
const airtableApi = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY
const base = new Airtable({ apiKey: airtableApi}).base(baseId)


export default base