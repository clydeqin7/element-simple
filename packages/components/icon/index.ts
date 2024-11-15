import { withInstall } from '@element-simple/utils'

import Icon from './src/icon.vue'
import type { SFCWithInstall } from '@element-simple/utils'

export const EsIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default EsIcon

export * from './src/icon'
