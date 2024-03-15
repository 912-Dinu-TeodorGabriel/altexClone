import { expect, test } from 'vitest'
import React from 'react'
import renderer from 'react-test-renderer'
import Products from '../components/Products'

test('Product', () => {
  expect(true).toBe(true)
  const component = renderer.create(
    <Products e={'all'} />
  )
})