import { describe, expect, it } from 'vitest'
import { greet } from '../src/index'

describe('greet', () => {
  it('greets the named user', () => {
    expect(greet('Weburz')).toBe('Hello, Weburz!')
  })
})
