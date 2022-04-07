import { Extension } from '@contentstack/ui-extensions-sdk'
import { render, screen } from '@testing-library/react'
import { createMockExtension } from '../../../testing/test-utils/mocks/contentstack-extensions'
import App from './App'

describe('App', () => {
  let extension: Extension

  beforeEach(() => {
    extension = createMockExtension()
    extension.field.getData = jest.fn().mockReturnValue([])
  })

  it('renders', () => {
    render(<App extension={extension} />)
    const element = screen.getByText(/Hello/)
    screen.findByText('Hello')
    expect(element).toBeInTheDocument()
  })
})
