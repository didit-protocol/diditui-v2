# Didit Icons

![Money](https://github.com/user-attachments/assets/81b365d8-8e66-4a3e-99c2-06deed491558)

<p align="center">
    A set of high-quality SVG icons to use in your web projects. Each icon is designed on a 24x24 grid and a 1.5px stroke.
<p>

<p align="center">
    <a href="https://github.com/keddib/diditui/releases"><img src="https://img.shields.io/npm/v/@diditui/icons" alt="Latest Release"></a>
</p>

## Installation

```
pnpm install @diditui/icons --save
```

## Usage

All icons are built with SVG, so you can place them as `<img>`, `background-image` and inline in HTML code.

### HTML image

If you load an icon as an image, you can modify its size using CSS.

```html
<img src="path/to/icon.svg" alt="icon title" />
```

### Inline HTML

You can paste the content of the icon file into your HTML code to display it on the page.

```html
<a href="">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon didit-icon didit-icon-disabled"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="1.25"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ...
  </svg>
  Click me
</a>
```

Thanks to that, you can change the size, color and the `stroke-width` of the icons with CSS code.

```css
.didit-icon {
  color: red;
  width: 32px;
  height: 32px;
  stroke-width: 1.25;
}
```

### SVG sprite

Add an icon to be displayed on your page with the following markup (`activity` in the above example can be replaced with any valid icon name):

```html
<svg width="24" height="24">
  <use xlink:href="path/to/arrow-left.svg#didit-activity" />
</svg>
```

### React

React components available through [`@diditui/icons-react`](https://www.npmjs.com/package/@diditui/icons-react) package.

```jsx
import { ArrowLeftIcon } from "@diditui/icons-react";

const MyComponent = () => {
  return (
    <ArrowLeftIcon
      size={36} // set custom `width` and `height`
      color="red" // set `stroke` color
      stroke={3} // set `stroke-width`
      strokeLinejoin="miter" // override other SVG props
    />
  );
};
```

`@diditui/icons-react` exports its own type declarations for usage with React and Typescript.

For more details, see the [documentation](https://github.com/keddib/diditui/tree/master/packages/icons-react).
