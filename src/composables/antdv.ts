import type { GlobalToken } from 'ant-design-vue/es/theme'
import { Modal, message, notification, theme } from 'ant-design-vue'
import { kebabCase } from 'lodash-es'
import { updateCSS } from '@pennajs/utils/dist/dom/dynamc-css'
import canUseDom from '@pennajs/utils/dist/canUseDom'

import type { ModalFunc } from 'ant-design-vue/es/modal/Modal'

function formatKey(key: string, prefixCls: string) {
  return `${prefixCls}${kebabCase(key)}`
}
const prefixCls = '--ant-pro-'

const dynamicStyleMark = `${prefixCls}${Date.now()}-${Math.random()}`

function registerTokenToCSSVar(token: GlobalToken) {
  const variables: Record<string, any> = {}
  if (!token)
    return

  for (const key in token)
    variables[formatKey(key, prefixCls)] = token[key as keyof GlobalToken]

  const cssList = Object.keys(variables).map(key => `${key}: ${variables[key]};`)
  if (canUseDom()) {
    updateCSS(
        `:root {${cssList.join('\n')}}`,
        `${dynamicStyleMark}-dynamic-theme`,
    )
  }
}

interface GlobalConfigIntl {
  message?: Omit<typeof message, 'useMessage'>
  modal?: {
    readonly info: ModalFunc
    readonly success: ModalFunc
    readonly error: ModalFunc
    readonly warning: ModalFunc
    readonly confirm: ModalFunc
  }
  notification?: Omit<typeof notification, 'useNotification'>
}

export const useAntd = createSharedComposable(() => {
  const { token: antdToken } = theme.useToken()
  const token = shallowRef<GlobalToken>(antdToken.value)
  watch(antdToken, (val) => {
    token.value = val
    registerTokenToCSSVar(val)
  }, {
    immediate: true
  })

  const globalConfig: GlobalConfigIntl = {}
  const globalConfigProxy = new Proxy(globalConfig, {
    get(target, p, receiver) {
      if (p in target)
        return Reflect.get(target, p, receiver)
      if (p === 'message') {
        return message
      } else if (p === 'modal') {
        return {
          info: Modal.info,
          success: Modal.success,
          error: Modal.error,
          warning: Modal.warning,
          confirm: Modal.confirm,
        }
      } else if (p === 'notification') {
        return notification
      } else {
        return undefined
      }
    },
    set(target, p, newValue, receiver) {
      return Reflect.set(target, p, newValue, receiver)
    },
  })

  const registerComposable = (_globalConfig: GlobalConfigIntl) => {
    globalConfigProxy.message = _globalConfig.message
    globalConfigProxy.modal = _globalConfig.modal
    globalConfigProxy.notification = _globalConfig.notification
  }

  return {
    globalConfig: globalConfigProxy,
    token,
    registerComposable
  }
})

export function useMessage() {
  const { globalConfig } = useAntd()
  return globalConfig.message!
}

export function useModal() {
  const { globalConfig } = useAntd()
  return globalConfig.modal!
}

export function useNotification() {
  const { globalConfig } = useAntd()
  return globalConfig.notification!
}
