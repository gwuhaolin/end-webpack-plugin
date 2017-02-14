# end hook after webpack is done

## install
```bash
npm i end-webpack-plugin --save-dev
```

## use
```js
    new EndWebpackPlugin(stats => {
        console.info('after webpack all done',stats)
    } , err => {
        console.error('after webpack exit with error',err)        
    })
```