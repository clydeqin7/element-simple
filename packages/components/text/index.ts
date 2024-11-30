import { withInstall } from '@element-simple/utils'

import Text from './src/text.vue'
import type { SFCWithInstall } from '@element-simple/utils'

export const EsText: SFCWithInstall<typeof Text> = withInstall(Text)
export default EsText

export * from './src/text'
