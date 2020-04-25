import React from 'react'
import renderer from 'react-test-renderer'
import PaginationBar from '../components/PaginationBar/PaginationBar'

describe("Pagination bar", () => {
  it("Correct render", () => {
    for (let i = 1; i <= 100; i++) {
      const paginationBar = renderer.create(<PaginationBar pagesCount={i} />)
      expect(paginationBar.root.findByType('select').children.length).toEqual(i)
    }
  })
})
