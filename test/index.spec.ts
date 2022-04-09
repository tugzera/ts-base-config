import { TestClass } from '~/some-folder';

describe('Test', () => {
  it('should return 2', () => {
    const sut = new TestClass()
    expect(sut.execute()).toBe(2)
  })
})
