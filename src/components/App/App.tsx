import { Extension } from '@contentstack/ui-extensions-sdk'
import { Component, ReactNode } from 'react'
import '@contentstack/venus-components/build/main.css'

export type Field = {
  value: string
}

type AppProps = {
  extension: Extension
}

type AppState = {
  fields: Field[]
}

const BASE_FIELD_VALUE: Field = {
  value: 'unknown',
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    const field = this.props.extension.field.getData() as Array<Field>

    // Add a field if one is not present
    if (field.length === 0) {
      field.push({ ...BASE_FIELD_VALUE })
    }

    this.state = { fields: field }
  }

  // Resize the iFrame after the component mounts
  componentDidMount(): void {
    this.props.extension.window.updateHeight(190)
  }

  render(): ReactNode {
    return <h2>Hello</h2>
  }
}

export default App
