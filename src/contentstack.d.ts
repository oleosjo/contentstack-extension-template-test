/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@contentstack/ui-extensions-sdk' {
  type Field = {
    uid: string
    data_type: string
    schema: Record<string, any>
    setData(data: Record<string, any>): Promise<void>
    getData(
      options?: Record<string, any>
    ): Record<string, any> | string | number
    setFocus(): Record<string, any>
    onChange(callback: function): void
  }

  type Entry = {
    content_type: Record<string, any>
    locale: string
    getData(): Record<string, any>
    getField(uid: string): Record<string, any>
    onSave(callback: function): void
    onChange(callback: function): void
    onPublish(callback: function): void
    onUnPublish(callback: function): void
  }

  type Window = {
    enableResizing(callback: function): Promise
    onDashboardResize(): boolean
    updateHeight(height?: number): Window
    disableAutoResizing(): Window
  }

  type Store = {
    get(key: string): Promise<any>
    getAll(): Promise<any>
    set(key: string, value: any): Promise<any>
    remove(key: string): Promise<any>
    clear(): Promise<any>
  }

  type Asset = {
    only([key], values): Asset
    except([key], values): Asset
    environment(environment_uid): Asset
    addParam(key, value): Asset
    addQuery(key, value): Asset
    getReferences(): Promise
    delete(): Promise
    publish(payload): Promise
    unpublish(payload): Promise
  }

  type ContentType = {
    only(key?: string, values?: string[]): Entry
    except(key?: string, values?: string[]): Entry
    addParam(key: string, value): Entry
    getReferences(): Promise<any>
    delete(): Promise<any>
    fetch(): Promise<any>
    includeReference(): Entry
    language(languageCode): Entry
    environment(environment_uid): Entry
    addQuery(key, value): Entry
    includeSchema(): Entry
    includeContentType(): Entry
    includeOwner(): Entry
    getLanguages(): Promise<any>
    unlocalize(locale): Promise<any>
    publish(payload): Promise<any>
    unpublish(payload): Promise<any>
    setWorkflowStage(payload): Promise<any>
    update(payload, [locale]): Promise<any>
  }

  type Stack = {
    ContentType: ContentType
    Asset: Asset
  }

  type Query = {
    field: Field
  }
  type Extension = {
    config: Record<string, any>
    currentUser: Record<string, any>
    type: 'FIELD' | 'WIDGET' | 'DASHBOARD'
    fieldConfig: Record<string, any>
    field: Field
    store: Store
    entry: Entry
    window: Window
    stack: Stack
  }

  declare function init(): Promise<Extension>
}
