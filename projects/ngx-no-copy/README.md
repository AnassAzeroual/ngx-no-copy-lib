# NgxNoCopy

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Table of Contents

- [About](#About)
- [Imports](#Imports)
- [Usage](#Usage)

## About
> This package is used to prevent *copy*, *paste* and *cut* in the **Input**'s or the **HTML**
## Imports 

> Import NgxNoCopyModule in your Module
```js

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...
    NgxNoCopyModule // <--- here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

## Usage

> Add NoCopyPasteCutDirective to input 
```html
<input type="text" NoCopyPasteCutDirective>
```

> Add NoCopyPasteCutDirective to div 
```html
<div NoCopyPasteCutDirective >you will not be able to copy this text 😋</div>
```

