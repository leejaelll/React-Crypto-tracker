#

# Coin Tracker

: 리액트 & 타입스크립트를 활용한 코인 리스트 만들기

### 💡 API - CoinPaprika JSON

https://api.coinpaprika.com/v1/coins

## Nested Routes

https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes

## Outlet (중첩 라우트 사용하기)

자식 라우트의 엘리먼트가 있는 경우 렌더링합니다. Outlet은 부모 경로 요소에서 자식 경로 요소를 렌더링하는 데 사용해야 합니다.

```

< Route path="/food" element={< Food / >} >

< Route path="pizza" element={< Pizza / >} / >

< Route path="cola" element={< Cola / >} / >

< /Route >

import { Outlet } from "react-router-dom";

function Food() {

return (

< div >

< h1 >Food< / h1 >

< Outlet / > // 자식 엘리먼트를 넣고자 하는 곳에 위치

< /div >

);

}

```

## useMatch()

현재 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환합니다.

`ex) const chartMatch: PathMatch< "coinId" > | null = useMatch("/:coinId/chart");`

https://reactrouter.com/docs/en/v6/api#usematch

## React Query

React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리 "global state"를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트합니다.

```

// Create a client

const queryClient = new QueryClient()

// Provide the client to your App

QueryClientProvider client={queryClient}

```

## React Query Devtools

React Query의 모든 내부 작동을 시각화하는 데 도움이 되며 문제가 발생하면 디버깅 시간을 절약

```

import { ReactQueryDevtools } from 'react-query/devtools';

< ReactQueryDevtools initialIsOpen={false} / >

```

### 🔥 React Router 6에서 Outlet컴포넌트와 useOutletContext()훅을 사용해서 prop 전달하고 받기

```

// 1. 상위 컴포넌트에서 Outlet컴포넌트에 context에 prop를 전달합니다.

< Outlet context={{ food: "pizza" }} / >

// 2. 하위 컴포넌트에서 useOutletContext()훅을 이용해서 props를 받아올 수 있습니다.

import { useOutletContext } from "react-router";

const data=useOutletContext< 인터페이스 >(); // {food: "pizza"}

```

https://reactrouter.com/docs/en/v6/api#useoutletcontext

---

# Recoil

`npm install recoil`

## RecoilRoot

recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요하다. Root 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소다.

## Atom

Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.

atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 리렌더링 되는 결과가 발생할 것이다.

atom(): 쓰기 가능한 state를 나타내는 atom를 만듭니다.

```

const textState = atom({

key: 'textState', // 유니크한 ID(다른 atom/selector와 관련하여)

default: '', // 기본값 (초기값)

});

```

## useRecoilValue(state)

Recoil state값을 반환합니다. 이 hook은 암묵적으로 주어진 상태에 컴포넌트를 구독합니다.

이 hook는 읽기 전용 상태와 쓰기 가능 상태에서 모두 동작하므로 컴포넌트가 상태를 읽을 수만 있게 하고 싶을 때에 추천하는 hook입니다. 이 hook을 React 컴포넌트에서 사용하면 상태가 업데이트 될 때 리렌더링을 하도록 컴포넌트를 구독합니다.

`ex) const names = useRecoilValue(namesState);`

https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/

## useSetRecoilState(state)

Recoil state의 값을 업데이트하기 위한 setter 함수를 반환합니다.

상태를 변경하기 위해 비동기로 사용될 수 있는 setter 함수를 리턴합니다.

setter는 새로운 값이나 이전 값을 인수로 받는 updater 함수를 넘겨줍니다.

`ex) const setNamesState = useSetRecoilState(namesState);`

https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/
