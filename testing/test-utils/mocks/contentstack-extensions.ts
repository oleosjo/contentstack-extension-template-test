/* eslint-disable @typescript-eslint/no-explicit-any */
import { Extension } from '@contentstack/ui-extensions-sdk'

const defaultExtension: Extension = {
  config: {},
  currentUser: { username: 'user1' },
  type: 'FIELD',
  fieldConfig: {},
  field: {
    uid: 'btl_123456',
    data_type: 'json',
    schema: {
      $uid: '',
    },
    setData: jest.fn((data: Record<string, any>) => Promise.resolve()),
    getData: jest.fn((options: Record<string, any>) => []),
    setFocus: jest.fn(),
    onChange: jest.fn(),
  },
  store: {
    get: jest.fn((key: string) => Promise.resolve()),
    getAll: jest.fn(() => Promise.resolve()),
    set: jest.fn((key: string, value: any) => Promise.resolve()),
    remove: jest.fn((key: string) => Promise.resolve()),
    clear: jest.fn(() => Promise.resolve()),
  },
  entry: {
    content_type: {},
    locale: 'en',
    getData: jest.fn(() => ({})),
    getField: jest.fn((uid: string) => ({})),
    onSave: jest.fn(),
    onChange: jest.fn(),
    onPublish: jest.fn(),
    onUnPublish: jest.fn(),
  },
  window: {
    enableResizing: jest.fn((callback) => Promise.resolve()),
    onDashboardResize: jest.fn(() => true),
    updateHeight: jest.fn(),
    disableAutoResizing: jest.fn(),
  },
  stack: {
    ContentType: {
      only: jest.fn(),
      except: jest.fn(),
      addParam: jest.fn(),
      getReferences: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
      fetch: jest.fn(() => Promise.resolve()),
      includeReference: jest.fn(),
      language: jest.fn(),
      environment: jest.fn(),
      addQuery: jest.fn(),
      includeSchema: jest.fn(),
      includeContentType: jest.fn(),
      includeOwner: jest.fn(),
      getLanguages: jest.fn(() => Promise.resolve()),
      unlocalize: jest.fn((locale) => Promise.resolve()),
      publish: jest.fn((payload) => Promise.resolve()),
      unpublish: jest.fn((payload) => Promise.resolve()),
      setWorkflowStage: jest.fn((payload) => Promise.resolve()),
      update: jest.fn((payload, locale) => Promise.resolve()),
    },
    Asset: {
      only: jest.fn(),
      except: jest.fn(),
      environment: jest.fn(),
      addParam: jest.fn(),
      addQuery: jest.fn(),
      getReferences: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
      publish: jest.fn((payload) => Promise.resolve()),
      unpublish: jest.fn((payload) => Promise.resolve()),
    },
  },
}

export const createMockExtension = (
  record?: Partial<Omit<Extension, 'toJSON'>>
): Extension => {
  return {
    ...defaultExtension,
    ...record,
  }
}
