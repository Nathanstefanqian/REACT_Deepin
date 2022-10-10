import { useState, useEffect, useCallback } from 'react'
import { footerList } from '../data/footerList'
import Image from '../components/Image'
import useInit from '../hooks/useInit'

const Footer = () => {
  const { data, loading } = useInit(() => {
    return footerList
  })
  return (
    <footer className="my-footer-layout">
      <div className="my-footer">
        <div className="footer-top">
          {
            loading ? 'loading' : data.map((item, index) => (
              <div key={index} className="list">
                <span>{item.name}</span>
                {
                  item.children.map((label, key) => <a key={`${index}-${key}`} href={label.url}>{label.name}</a>)
                }
              </div>
            ))
          }
          <div className="container"></div>
          <div className="code">
            <div className="codeinfo">
              <Image src="wx.png" />
              <span>关注社区微信公众�?</span>
            </div>
            <div className="codeinfo">
              <Image src="qq code.png" />
              <span>加入社区QQ交流�?</span>
            </div>
          </div>
          <div className="container"></div>
        </div>
        <hr className="hr" />
        <p>© 2011-2022 Wuhan Deepin Technology Co., Ltd.</p>
      </div>
    </footer>
  )
}
export default Footer
