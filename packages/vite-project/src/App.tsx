import React, { useState, useCallback, useEffect, useMemo } from 'react'
import './App.css'

// 如果不使用useMemo and useCallback, 所有非原始类型的值， 如array object, function 都会在每一次重渲染时被彻底重新创建。
const Page = ({onClick, value}) => {
  const num: number = Math.random() * 10;

  return (
    <div onClick={onClick}>this is Page {num}</div>
  )
}
// 只有在唯一的一种场景下，缓存props 才是有意义的： 当组件的每一个prop, 以及组件本身被缓存的时候。
const PageMemoized = React.memo(Page);
function App() {
  const [count, setCount] = useState(0);
  // const a = {test: 1}; // object 会被重新重新创建， 所以 log(re-render) 会执行

  const a = useMemo(() => ({test: 1}), []); // 在重新渲染之间保留“a”引用
  // const a = 1;
  useEffect(() => {
    console.log("re-render");
  }, [a])

  // const fetch = () => {
  //   console.log('fetch some data here');
  // }
  const fetch = useCallback(() => {  // 
    console.log('fetch some data here');
  }, [])
  useEffect(() => {
    fetch();
  }, [fetch]);
  // const before = performance.now();
  // console.log(before)

  // const onClick = () => { // 当count 的改变时，App 重新渲染，所有 onClick 会重新生成一个
  //   console.log('Do something on click');
  // }

  const onClick = useCallback(  // PageMemoized 因为 onClick 被缓存了，将「不会」重渲染
    () => { console.log('Do something on click');  }, 
    []
  );

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
        <PageMemoized onClick={onClick} value={[1, 2, 3]}/>
    </>
  )
}

export default App
