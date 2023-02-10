import axios from 'axios'

async function getGemData() {
  const { data } = await axios.get("https://rubygems.org/api/v1/gems/futuro", { headers: { Accept: "application/json" } });
  const { downloads, name, project_uri, version, platform } = data;

  return {
    downloads,
    name,
    url: project_uri,
    version
  }
}

export default getGemData;

