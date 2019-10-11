/**
 *定义一个书类
 *@constructor
 *@param {Object} bookAttr - 定义书类所需参数
 *@param {string} bookAttr.title - 书名
 *@param {string} [bookAttr.author=John Doe] - 作者
 *@param {date} updateTime - 书本更新时间
 *@return {Book<class>} - 返回一个书类，包含着某个书的属性，如书名、作者
 *@example new Book({ title: 'tenYear', author: 'dongye' })
 *@author wanjia 2019/10/9 515480824@qq.com
 */
class Book {
  constructor({title, author = 'John Doe'}, updateTime) {
    this.title = title
    this.author = author
  }

  /**
   * @description 获取书本的标题
   * @returns {string|*} 返回书本的标题
   */
  getBookName() {
    return this.title
  }
}
