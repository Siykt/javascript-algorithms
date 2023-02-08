import { removeSubFoldersFromTheFilesystem } from './removeSubFoldersFromTheFilesystem'

describe('1233. 删除子文件夹', () => {
  test('folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]', () => {
    expect(removeSubFoldersFromTheFilesystem(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'])).toEqual(['/a', '/c/d', '/c/f'])
  }, 300)

  test('folder = ["/a","/a/b/c","/a/b/d"]', () => {
    expect(removeSubFoldersFromTheFilesystem(['/a', '/a/b/c', '/a/b/d'])).toEqual(['/a'])
  }, 300)

  test('folder = ["/a/b/c","/a/b/ca","/a/b/d"]', () => {
    expect(removeSubFoldersFromTheFilesystem(['/a/b/c', '/a/b/ca', '/a/b/d'])).toEqual(['/a/b/c', '/a/b/ca', '/a/b/d'])
  }, 300)
})
