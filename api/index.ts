import {NowRequest, NowResponse} from '@now/node'
import got from 'got';

export default async (req: NowRequest, res: NowResponse) => {
  const {body} = await got.get<any>('https://api.github.com/repos/wulkano/kap/releases/latest', {
    responseType: 'json'
  });

  const dmgArtifact = (body.assets || []).find(asset => asset.name.includes('dmg'));
  const dmgLink = dmgArtifact && dmgArtifact.browser_download_url;

  if (dmgLink) {
    res.writeHead(302, {
      Location: dmgLink
    });
    res.end();
  } else {
    res.status(404);
    res.send('Artifact not found');
  }
}
