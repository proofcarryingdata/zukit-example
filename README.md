<img width="630" alt="image" src="https://user-images.githubusercontent.com/169280/234023424-e88b0bba-8ea1-49f5-9bd2-411e8471a4e3.png">

This repo is a <a href="https://github.com/dcposch/zukit">Zukit</a> Hello World
app.

You're welcome to copy it. It's less than 100 lines of code!

```
$ cloc src/

cloc v 1.92  T=0.01 s (374.7 files/s, 7643.3 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                       4              6              0             89
CSS                              1              1              0              6
-------------------------------------------------------------------------------
SUM:                             5              7              0             95
-------------------------------------------------------------------------------
```

## Quick start

```
npm ci
npm dev
```

To develop zukit, install it using `npm link`.

```
cd zukit
npm link
cd node_modules/react
npm link
```

Finally, back in the zukit-example folder,

```
npm i && npm link zukit react
npm run dev
```
