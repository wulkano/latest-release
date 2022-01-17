import {NowRequest, NowResponse} from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  return res.status(410).send('Use /api/x64 or /api/arm64 instead');
}