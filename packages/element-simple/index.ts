import installer from './defaults'
export * from '@element-simple/components'
export * from '@element-simple/constants'
export * from '@element-simple/hooks'
export * from './make-installer'

export const install = installer.install
// export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
