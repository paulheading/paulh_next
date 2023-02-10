import axios from 'axios'

async function getMediumData() {
  const { data } = await axios.get("https://api.rss2json.com/v1/api.json", { params: { rss_url: "https://medium.com/feed/@paulheading", api_key: process.env.NEXT_PUBLIC_RSS2JSON_API_KEY } });      
  const { items } = data;
  return items;
}

export default getMediumData;

