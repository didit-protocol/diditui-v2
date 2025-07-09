# Didit Icons for React

![icons-react](https://github.com/user-attachments/assets/db8fff16-ebbe-4454-8236-fe90e5d00c41)

<p align="center">
Implementation of the Didit Icons library for React applications.
<p>

<p align="center">
    <a href="https://github.com/keddib/diditui/releases"><img src="https://img.shields.io/npm/v/@diditui/icons-react" alt="Latest Release"></a>
</p>

## Installation

```
pnpm install @diditui/icons-react
```

or

```
yarn add @diditui/icons-react
```

or

```
npm install @diditui/icons-react
```

or just [download from Github](https://github.com/keddib/diditui/releases).

## How to use

It's build with ESmodules so it's completely tree-shakable. Each icon can be imported as a component.

```js
import { ArrowLeftIcom } from "@diditui/icons-react";

const App = () => {
  return <ArrowLeftIcom />;
};

export default App;
```

You can pass additional props to adjust the icon.

```js
<ArrowLeftIcom color="red" size={48} />
```

### Props

| name     | type     | default      |
| -------- | -------- | ------------ |
| `size`   | _Number_ | 24           |
| `color`  | _String_ | currentColor |
| `stroke` | _Number_ | 2            |
